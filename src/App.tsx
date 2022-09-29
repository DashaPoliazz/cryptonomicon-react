import "./app.css";

import { Graph } from "./components/Graph";
import { Search } from "./components/Search";
import { Ticker } from "./components/Ticker";
import { useCryptonomiconSelector } from "./hooks/useAppSelector";

function App() {
  const tickerList = useCryptonomiconSelector((state) => state.tickers);

  console.log(tickerList);

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
          <hr className="w-full border-t border-gray-600 my-4" />
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Ticker />
          </dl>
          <hr className="w-full border-t border-gray-600 my-4" />
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;
