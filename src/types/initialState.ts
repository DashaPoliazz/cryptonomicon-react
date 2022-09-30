export interface DefaultTicker {
  name: string;
  price: number;
  id: string;
}

export interface InitialState<T> {
  tickers: T[];
  selectedTicker: null | string;
}
