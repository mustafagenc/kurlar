import { fetchCurrency } from "kurlar";
import { Suspense } from "react";
import CurrencyForm from "./components/currency-form";
import CurrencyResult from "./components/currency-result";
import { CurrencyType } from "@/lib/types";

type CurrencyPageProps = {
  searchParams: Promise<{
    currency?: CurrencyType;
    date?: string;
  }>;
};

export default async function Page({ searchParams }: CurrencyPageProps) {
  const { currency, date } = await searchParams;

  let result = null;

  if (currency) {
    try {
      const _date = date
        ? new Date(date.split(".").reverse().join("-"))
        : undefined;

      result = await fetchCurrency({
        currency: currency as CurrencyType,
        date: _date,
      });
    } catch (error) {
      console.error("Döviz verileri çekilirken hata oluştu:", error);
    }
  }

  return (
    <div className="m-auto w-3xl my-10">
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <CurrencyForm initialCurrency={currency} initialDate={date} />
        <div className="mt-4">
          <CurrencyResult data={result} currency={currency} />
        </div>
      </Suspense>
    </div>
  );
}
