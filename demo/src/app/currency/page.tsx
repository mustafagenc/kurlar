"use client";

import * as React from "react";

import { format } from "date-fns";

import { IconCalendar } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { currencyTypes } from "@/lib/constants";
import { fetchCurrency } from "kurlar";

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

export default function Page() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [inputValue, setInputValue] = React.useState(
    format(new Date(), "dd.MM.yyyy")
  );
  const [currency, setCurrency] = React.useState<CurrencyType>("USD");

  const [result, setResult] = React.useState<string>("Lütfen para birimi seçin");

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setDate(new Date());
    } else {
      setDate(date);
      setInputValue(format(date, "dd.MM.yyyy"));
      getCurrency();
    }
  };

  function handleCurrencyCodeSelect(value: CurrencyType): void {
    setCurrency(value);
    getCurrency();
  }

  function getCurrency() {
    if (currency) {
      console.log("currency", currency);
      console.log("date", date);
      fetchCurrency({ currency: currency, date: new Date(date) })
        .then((res) => {
          setResult(
            `1 ${res?.CurrencyCode} = ${res?.ForexBuying} TL, ${res?.BanknoteBuying} TL`
          );
        })
        .catch((err) => {
          setResult(`Hata: ${err}`);
        });
    }
  }

  return (
    <div className="m-auto w-3xl my-10">
      <div className="flex flex-row gap-4">
        <Select onValueChange={handleCurrencyCodeSelect}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Para birimi" />
          </SelectTrigger>
          <SelectContent>
            {currencyTypes.filter(Boolean).map((currency) => {
              if (!currency) return null;
              return (
                <SelectItem key={currency} value={currency}>
                  {currency}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[180px] justify-start text-left font-normal",
                !inputValue && "text-muted-foreground"
              )}
            >
              <IconCalendar />
              {inputValue}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDayPickerSelect}
              initialFocus
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="mt-4">
        <Alert>
          <AlertTitle>{inputValue}</AlertTitle>
          <AlertDescription>{result}</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
