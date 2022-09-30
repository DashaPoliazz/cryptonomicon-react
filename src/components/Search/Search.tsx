import { useState } from "react";
import { useDispatch } from "react-redux";
import { useCryptonomiconActions } from "../../hooks/useCryptonomiconActions";
import { useCryptonomiconSelector } from "../../hooks/useCryptonomiconSelector";

import { v4 as uuidv4, v4 } from "uuid";
import { DefaultTicker } from "../../types/initialState";

export const Search = () => {
  // Local State
  const [searchQuery, setSearchQuery] = useState("");
  const [isInputError, setIsInputEror] = useState(false);
  const [isTickerExist, setIsTickerExist] = useState(false);

  // Store
  const { tickers } = useCryptonomiconSelector((state) => state.tickersSlice);
  const { addTicker: addTickerAction } = useCryptonomiconActions();

  // Methods
  const addNewTicker = () => {
    if (!searchQuery.length) {
      setIsInputEror(true);

      return;
    }

    const newTicker = {
      name: searchQuery,
      price: 0,
      id: v4(),
    };

    if (tickers.find((t) => t.name === newTicker.name)) {
      setIsTickerExist(true);

      return;
    }

    addTickerAction(newTicker);
  };

  const onInputChange = (value: string) => {
    setSearchQuery(value);

    // Reset validations
    setIsInputEror(false);
    setIsTickerExist(false);
  };

  return (
    <section>
      <div className="flex">
        <div className="max-w-xs">
          <label
            htmlFor="wallet"
            className="block text-sm font-medium text-gray-700"
          >
            Тикер
          </label>
          <div className="mt-1 relative rounded-md shadow-md">
            <input
              onChange={(e) => onInputChange(e.target.value)}
              value={searchQuery}
              type="text"
              name="wallet"
              id="wallet"
              className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
              placeholder="Например DOGE"
            />
          </div>
          <div className="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap">
            <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
              BTC
            </span>
            <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
              DOGE
            </span>
            <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
              BCH
            </span>
            <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
              CHD
            </span>
          </div>
          {isTickerExist && (
            <div className="text-sm text-red-600">
              This ticker has been added already
            </div>
          )}
          {isInputError && (
            <div className="text-sm text-red-600">
              Please, enter ticker name
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => addNewTicker()}
        type="button"
        className="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <svg
          className="-ml-0.5 mr-2 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        </svg>
        Добавить
      </button>
    </section>
  );
};
