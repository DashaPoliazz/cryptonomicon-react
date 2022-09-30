export interface ITicker {
  Id: string;
  ImageUrl: string;
  Symbol: string;
  FullName: string;
}
export interface RateLimit {}

export interface ServerResponse {
  Response: string;
  Message: string;
  Data: ITicker[];
  RateLimit: RateLimit;
  HasWarning: boolean;
  Type: number;
}
