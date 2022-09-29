export interface DefaultTicker {
  name: string;
  price: number;
}

export interface InitialState<T> {
  tickers: T[];
}
