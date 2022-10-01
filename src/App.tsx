import "./app.css";

import { Graph } from "./components/Graph";
import { Search } from "./components/Search";
import { Ticker } from "./components/Ticker";
import { useCryptonomiconActions } from "./hooks/useCryptonomiconActions";

import { useCryptonomiconSelector } from "./hooks/useCryptonomiconSelector";
import { useLoadAllTickersQuery } from "./store/cryptocompare/cryptocompare.api";

function App() {
  const { tickers, selectedTicker } = useCryptonomiconSelector(
    (state) => state.tickersSlice,
  );

  const { selectTicker } = useCryptonomiconActions();

  return (
    <div className="App">
      {/* <div className="fixed w-100 h-100 opacity-80 bg-purple-800 inset-0 z-50 flex items-center justify-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-12 w-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div> */}

      <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
        <div className="container">
          <Search />
          {tickers.length ? (
            <>
              {" "}
              <hr className="w-full border-t border-gray-600 my-4" />
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {tickers.map((tickerData) => (
                  <Ticker key={tickerData.id} tickerData={tickerData} />
                ))}
              </dl>
              <hr className="w-full border-t border-gray-600 my-4" />{" "}
            </>
          ) : (
            <div
              className="flex  p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">
                  You have not added any tickers yet!
                </span>{" "}
                Please, add new ticker
              </div>
            </div>
          )}
          {tickers.length > 0 && selectedTicker && <Graph />}
        </div>
      </div>
    </div>
  );
}

export default App;
