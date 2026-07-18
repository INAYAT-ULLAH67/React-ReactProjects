import { useState } from 'react'
import './App.css'
import Input from './components/Input.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js' // adjust path to wherever your hook lives

function App() {
  const [amount, setAmount] = useState(1)         // value typed in the "from" box
  const [from, setFrom] = useState('usd')         // selected "from" currency
  const [to, setTo] = useState('pkr')             // selected "to" currency
  const [convertedAmount, setConvertedAmount] = useState(0) // calculated result
  
  // e.g. if from = 'usd', useCurrencyInfo('usd') → { eur: 0.85366041, pkr: 279.40060149, ... }
  // Fetches rates for whatever `from` currently is (auto-refetches when `from` changes)
  const currencyInfo = useCurrencyInfo(from)

  // List of currency codes for the dropdowns — derived from the fetched rates object
  // ["1inch", "aave", "ada", "aed", "afn", "agix", "akt", "algo", "all", "amd................]
  const options = Object.keys(currencyInfo)
  // console.log(options)

  // Runs the actual conversion using current amount/to/currencyInfo
  const convert = () => {
    // eg :currencyInfo['pkr'] = 279.40060149
    setConvertedAmount(amount * (currencyInfo[to] || 0))
  }

  // Swaps "from" and "to", and also swaps amount <-> convertedAmount for a nice UX touch
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <>
      <div className="main my-3 border-4 border-black h-90 ml-48 mr-48 bg-blue-400/30 rounded-xl p-6">

        {/* FROM input — user types the amount here */}
        <Input
          label='From'
          amount={amount}

          onAmountChange={(value) => setAmount(value)}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          currencyOptions={options}
        />

        <button
          className="bg-blue-600 text-white px-3 py-1 rounded-md my-2"
          onClick={swap}
        >
          Swap
        </button>

        {/* TO input — read-only, shows the calculated result */}
        <Input
          label='To'
          amount={convertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          currencyOptions={options}
          amountDisabled={true}
        />

        <button
          className="bg-green-600 text-white px-3 py-1 rounded-md my-2"
          onClick={convert}
        >
          Convert
        </button>

      </div>
    </>
  )
}

export default App