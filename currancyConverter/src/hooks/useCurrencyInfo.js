import { useEffect, useState } from "react";

// Custom hook: takes a base currency (e.g. 'usd') and returns
// an object of exchange rates for that currency against all others.
function useCurrencyInfo(currency) {
  // Holds the rates object once fetched, e.g. { eur: 0.85, pkr: 279.4, ... }
  // Starts as an empty object so currencyInfo[to] doesn't crash before data arrives.
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch rates for the given base currency from the API.
    // Example: currency = 'usd' → fetches usd.json
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json()) // parse the raw response into a JS object
      .then((res) => {
        // Full response looks like:
        // {
        //   "date": "2026-07-09",
        //   "usd": {
        //     "eur": 0.85366041,
        //     "pkr": 279.40060149,
        //     "gbp": 0.73894467,
        //     ...
        //   }
        // }
        //
        // res[currency] pulls out just the nested rates object for our base currency.
        // e.g. if currency = 'usd', res['usd'] → { eur: 0.85366041, pkr: 279.40060149, ... }
        setData(res[currency]);
      }); 

    // This effect re-runs ONLY when `currency` changes.
    // It does NOT depend on anything else, so no unnecessary refetching happens
    // when other unrelated state (like `amount` or `to`) changes elsewhere.
  }, [currency]);

  // Return the rates object so any component using this hook can read it.
  // e.g. const rates = useCurrencyInfo('usd'); rates.pkr → 279.4
  return data;
}

export default useCurrencyInfo;