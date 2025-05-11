import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CurrencyResultProps {
  data: any;
  currency?: string;
  date?: string;
}

export default function CurrencyResult({ data, currency, date }: CurrencyResultProps) {
  let resultText = "Lütfen para birimi seçin";
  
  if (currency && !data) {
    resultText = "Veri alınırken bir hata oluştu. Lütfen tekrar deneyin.";
  } else if (data) {
    resultText = `1 ${data.CurrencyCode} = ${data.ForexBuying} TL, ${data.BanknoteBuying} TL`;
  }
  
  return (
    <Alert>
      <AlertTitle>{date || "Bugün"}</AlertTitle>
      <AlertDescription>{resultText}</AlertDescription>
    </Alert>
  );
} 