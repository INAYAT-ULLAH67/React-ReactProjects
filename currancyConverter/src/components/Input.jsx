import React, { useId } from 'react'

function Input({
  label,
  amount,
  onAmountChange,      // called when user types a number
  onCurrencyChange,     // called when user picks a currency from dropdown
  currencyOptions = [], // list of available currency codes, e.g. ['usd','eur','pkr']
  selectCurrency = 'usd', // currently selected currency for this input
  amountDisabled = false, // lets us make the "to" amount read-only (since it's calculated, not typed)
  currencyDisabled = false,
}) {
  const amountInputId = useId(); // unique id, good practice for label/input pairing

  return (
    <div className='bg-white p-3 rounded-lg text-sm flex flex-col w-full h-24 shadow-xs my-2'>
      <div className="labels flex flex-row justify-between w-full">
        <label htmlFor={amountInputId} className='text-gray-400 font-medium inline-block'>{label}</label>
        <label className='text-gray-400 font-medium inline-block'>Currency Type</label>
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-2">
        {/* Numeric Input — now controlled + fires onAmountChange on every keystroke */}
        <input
          id={amountInputId}
          type="number"
          className='outline-none w-2/3 bg-transparent py-1.5 text-gray-800 font-semibold'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          min={0}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />

        {/* Currency dropdown — now built dynamically from currencyOptions,
            and fires onCurrencyChange when user picks a new one */}
        <select
          className='rounded-md px-2 py-1.5 bg-gray-100 border border-gray-200 cursor-pointer outline-none font-medium text-gray-700'
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Input