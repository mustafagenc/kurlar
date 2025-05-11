export type CurrencyType =
  | "USD"
  | "AUD"
  | "DKK"
  | "EUR"
  | "GBP"
  | "CHF"
  | "SEK"
  | "CAD"
  | "KWD"
  | "NOK"
  | "SAR"
  | "JPY"
  | "BGN"
  | "RON"
  | "RUB"
  | "CNY"
  | "PKR"
  | "QAR"
  | "KRW"
  | "AZN"
  | "AED";

export type TCMBResponseType = {
  Unit: number;
  CurrencyName: string;
  CurrencyCode: string;
  ForexBuying: number;
  ForexSelling: number;
  BanknoteBuying: number;
  BanknoteSelling: number;
};
