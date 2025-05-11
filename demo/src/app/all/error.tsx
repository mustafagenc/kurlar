"use client";

import { Button } from "@/components/ui/button";
import { ErrorMessage } from "@/components/ui/error-message";
import { useEffect } from "react";

export default function AllError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="m-auto w-3xl my-10">
      <ErrorMessage
        title="Döviz Kurları Yüklenemedi"
        message={
          error.message ||
          "Döviz kurları yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."
        }
      />
      <Button onClick={reset}>Tekrar Dene</Button>
    </div>
  );
}
