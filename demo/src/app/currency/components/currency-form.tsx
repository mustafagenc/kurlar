"use client";

import { IconCalendar } from "@tabler/icons-react";
import { format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

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

import { currencyTypes } from "@/lib/constants";
import { CurrencyType } from "@/lib/types";

interface CurrencyFormProps {
  initialCurrency?: string;
  initialDate?: string;
}

export default function CurrencyForm({
  initialCurrency,
  initialDate,
}: CurrencyFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [date, setDate] = React.useState<Date | undefined>(
    initialDate
      ? new Date(initialDate.split(".").reverse().join("-"))
      : new Date(),
  );

  const [inputValue, setInputValue] = React.useState(
    initialDate || format(new Date(), "dd.MM.yyyy"),
  );

  const [currency, setCurrency] = React.useState<CurrencyType | undefined>(
    (initialCurrency as CurrencyType) || undefined,
  );

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setDate(undefined);
    } else {
      setDate(date);
      setInputValue(format(date, "dd.MM.yyyy"));

      if (currency) {
        updateURL(currency, format(date, "dd.MM.yyyy"));
      }
    }
  };

  function handleCurrencyCodeSelect(value: CurrencyType): void {
    setCurrency(value);

    if (date) {
      updateURL(value, inputValue);
    }
  }

  function updateURL(selectedCurrency: string, selectedDate: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("currency", selectedCurrency);
    params.set("date", selectedDate);

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex flex-row gap-4">
      <Select onValueChange={handleCurrencyCodeSelect} value={currency}>
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
              !inputValue && "text-muted-foreground",
            )}
          >
            <IconCalendar className="mr-2 h-4 w-4" />
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
  );
}
