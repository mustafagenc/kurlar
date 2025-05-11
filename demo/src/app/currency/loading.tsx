import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function CurrencyLoading() {
  return (
    <div className="m-auto w-3xl my-10">
      <LoadingSpinner
        text="Döviz çevirici yükleniyor..."
        className="h-[400px]"
      />
    </div>
  );
}
