import { getEncoding, formatToTwoDigits, getApiUrl } from "../src/helpers";

describe("getEncoding", () => {
	it("should return 'UTF-8' for a date on or after 2016-09-08", () => {
		const date = new Date(2016, 8, 8); // September 8, 2016
		expect(getEncoding({ date })).toBe("UTF-8");
	});

	it("should return 'ISO-8859-9' for a date before 2016-09-08", () => {
		const date = new Date(2015, 0, 1); // January 1, 2015
		expect(getEncoding({ date })).toBe("ISO-8859-9");
	});
});

describe("formatToTwoDigits", () => {
	it("should format single-digit numbers with a leading zero", () => {
		expect(formatToTwoDigits(5)).toBe("05");
	});

	it("should return double-digit numbers as strings without modification", () => {
		expect(formatToTwoDigits(12)).toBe("12");
	});
});

describe("getApiUrl", () => {
	it("should return the default URL and encoding when no date is provided", () => {
		const result = getApiUrl({});
		expect(result.url).toBe("https://www.tcmb.gov.tr/kurlar/today.xml");
		expect(result.encoding).toBe("UTF-8");
	});

	it("should return the correct URL and encoding for a date before 2016-09-08", () => {
		const date = new Date(2015, 1, 1); // January 1, 2015
		const result = getApiUrl({ date });
		expect(result.url).toBe(
			"https://www.tcmb.gov.tr/kurlar/201501/01012015.xml",
		);
		expect(result.encoding).toBe("ISO-8859-9");
	});

	it("should return the correct URL and encoding for a date on or after 2016-09-08", () => {
		const date = new Date(2016, 8, 8); // September 8, 2016
		const result = getApiUrl({ date });
		expect(result.url).toBe(
			"https://www.tcmb.gov.tr/kurlar/201608/08082016.xml",
		);
		expect(result.encoding).toBe("UTF-8");
	});

	it("should not generate a past URL for a future date", () => {
		const futureDate = new Date();
		futureDate.setFullYear(futureDate.getFullYear() + 1); // One year in the future
		const result = getApiUrl({ date: futureDate });
		expect(result.url).toBe("https://www.tcmb.gov.tr/kurlar/today.xml");
		expect(result.encoding).toBe("UTF-8");
	});
});
