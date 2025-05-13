import { fetchAllCurrencies, fetchCurrency } from "../src/index";
import axios from "axios";

interface Currency {
  CurrencyCode: string;
}

describe("fetchAllCurrencies", () => {
  const assertCurrencyArrayResult = (result: Currency[] | null | undefined) => {
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    if (result) {
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty("CurrencyCode");
    }
  };

  it("should fetch all currencies for a valid date", async () => {
    const mockDate = new Date("2023-10-26");
    const result = await fetchAllCurrencies(mockDate);
    assertCurrencyArrayResult(result);
  });

  it("should fetch all currencies for today if no date is provided", async () => {
    const result = await fetchAllCurrencies();
    assertCurrencyArrayResult(result);
  });

  it("should return null if the API response is invalid", async () => {
    jest
      .spyOn(axios, "get")
      .mockRejectedValueOnce(new Error("Invalid XML response"));
    await expect(fetchAllCurrencies(new Date("2023-10-26"))).rejects.toThrow(
      "Invalid XML response"
    );
  });
});

describe("fetchCurrency", () => {
  it("should fetch a specific currency for a valid date", async () => {
    const result = await fetchCurrency({
      currency: "USD",
      date: new Date("2023-10-26"),
    });
    expect(result).toBeDefined();
    expect(result?.CurrencyCode).toBe("USD");
  });

  it("should fetch a specific currency for today if no date is provided", async () => {
    const result = await fetchCurrency({ currency: "EUR" });
    expect(result).toBeDefined();
    expect(result?.CurrencyCode).toBe("EUR");
  });

  it("should throw an error if the API response is invalid", async () => {
    jest
      .spyOn(axios, "get")
      .mockRejectedValueOnce(new Error("Invalid XML response"));
    await expect(
      fetchCurrency({ currency: "USD", date: new Date("2023-10-26") })
    ).rejects.toThrow("Invalid XML response");
  });
});

describe("fetchAllCurrencies", () => {
  it("should throw an error if the XML response is invalid", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      data: "<invalid-xml>",
    });
    await expect(fetchAllCurrencies(new Date("2023-10-26"))).rejects.toThrow(
      "Invalid XML response"
    );
  });

  it("should return null if the parsed XML contains no currency data", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      data: `
        <Tarih_Date>
          <Currency></Currency>
        </Tarih_Date>
      `,
    });
    const result = await fetchAllCurrencies(new Date("2023-10-26"));
    expect(result).toBeNull();
  });
});
