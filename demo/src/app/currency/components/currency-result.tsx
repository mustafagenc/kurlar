import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TCMBResponseType } from "@/lib/types";
import { Terminal } from "lucide-react";

interface CurrencyResultProps {
  data?: TCMBResponseType;
  currency?: string;
}

export default function CurrencyResult({ data, currency }: CurrencyResultProps) {
  let resultText = "Lütfen para birimi seçin";
  
  if (currency && !data) {
    resultText = "Veri alınırken bir hata oluştu. Lütfen tekrar deneyin.";
  } else if (data) {
    resultText = `1 ${data.CurrencyCode} = ${data.ForexBuying} TL, ${data.BanknoteBuying} TL`;
  }
  
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Sonuç</AlertTitle>
      <AlertDescription>{resultText}</AlertDescription>
    </Alert>
  );
} 