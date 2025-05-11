import { XMLParser, XMLValidator, type X2jOptions } from "fast-xml-parser";
import axios from "axios";
import type { TCMBResponseType, TcmbType } from "./types";
import { getApiUrl } from "./helpers";

/// Function to fetch all exchange rates for a given date
/// @param date - The date for which to fetch exchange rates
/// @returns An array of all exchange rates or null if no data is found
async function fetchAllCurrencies(
	date?: Date,
): Promise<TCMBResponseType[] | null> {
	const apiUrl = getApiUrl({ date: date });
	const currencyResponses: TCMBResponseType[] = [];

	try {
		const response = await axios.get(apiUrl.url);
		const result = XMLValidator.validate(response.data);

		if (result !== true) {
			throw new Error("Invalid XML response");
		}

		const options: X2jOptions = {
			ignoreAttributes: false,
			allowBooleanAttributes: true,
			ignoreDeclaration: true,
			attributeNamePrefix: "@_",
			trimValues: true,
		};

		const parser = new XMLParser(options);
		const json = parser.parse(response.data);

		for (const item of json.Tarih_Date.Currency) {
			currencyResponses.push({
				Unit: item.Unit,
				CurrencyName: item.CurrencyName,
				CurrencyCode: item["@_CurrencyCode"],
				ForexBuying: item.ForexBuying,
				ForexSelling: item.ForexSelling,
				BanknoteBuying: item.BanknoteBuying,
				BanknoteSelling: item.BanknoteSelling,
			});
		}

		return currencyResponses.length > 0 ? currencyResponses : null;
	} catch (error) {
		return Promise.reject(error);
	}
}

/// Function to fetch a specific currency's exchange rate for a given date
/// @param currency - The currency code to fetch (e.g., "USD")
/// @param date - The date for which to fetch the exchange rate
/// @returns The exchange rate for the specified currency or null if not found
async function fetchCurrency({
	currency,
	date,
}: TcmbType): Promise<TCMBResponseType | null> {
	const allCurrencies = await fetchAllCurrencies(date);

	if (!allCurrencies) {
		return null;
	}

	const currencyResponse = allCurrencies.find(
		(item) => item.CurrencyCode === currency,
	);

	return currencyResponse || null;
}

export { fetchAllCurrencies, fetchCurrency };
