// This file contains the types used in the project
type EncodingType = "UTF-8" | "ISO-8859-9";

// The URL type is used to store the URL and encoding of the TCMB API
type UrlType = {
  url: string;
  encoding: string;
};

// The currency types are based on the TCMB API documentation
// https://www.tcmb.gov.tr/kurlar/today.xml
type CurrencyType =
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

// The TcmbType is used to store the currency and date of the TCMB API
type TcmbType = {
  currency: CurrencyType;
  date?: Date;
};

type TCMBResponseType = {
  Unit: number;
  CurrencyName: string;
  CurrencyCode: string;
  ForexBuying: number;
  ForexSelling: number;
  BanknoteBuying: number;
  BanknoteSelling: number;
};

export type { EncodingType, UrlType, CurrencyType, TcmbType, TCMBResponseType };
