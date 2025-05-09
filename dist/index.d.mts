type CurrencyType = "USD" | "AUD" | "DKK" | "EUR" | "GBP" | "CHF" | "SEK" | "CAD" | "KWD" | "NOK" | "SAR" | "JPY" | "BGN" | "RON" | "RUB" | "CNY" | "PKR" | "QAR" | "KRW" | "AZN" | "AED";
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

declare function fetchAllCurrencies(date?: Date): Promise<TCMBResponseType[] | null>;
declare function fetchCurrency({ currency, date, }: TcmbType): Promise<TCMBResponseType | null>;

export { fetchAllCurrencies, fetchCurrency };
