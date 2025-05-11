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
import { currencyTypes } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconCalendar } from "@tabler/icons-react";
import { format } from "date-fns";

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

export function CurrencySelect({ 
  currency, 
  onCurrencyChange 
}: { 
  currency: CurrencyType; 
  onCurrencyChange: (value: CurrencyType) => void;
}) {
  return (
    <Select onValueChange={onCurrencyChange} value={currency}>
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
  );
}

export function DatePicker({ 
  date, 
  onDateChange 
}: { 
  date: Date; 
  onDateChange: (date: Date) => void;
}) {
  const inputValue = format(date, "dd.MM.yyyy");

  return (
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
          onSelect={(date) => date && onDateChange(date)}
          initialFocus
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
        />
      </PopoverContent>
    </Popover>
  );
} 