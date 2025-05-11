"use client";
import { Button } from "@/components/ui/button";
import { IconSourceCode } from "@tabler/icons-react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import { useEffect } from "react";

export default function Code() {

    useEffect(() => {
      Prism.highlightAll();
    }, []);

  return (
    <div className="m-auto w-3xl my-10">
      <h2 className="text-2xl">Kullanım</h2>
      <pre className="language-typescript" tabIndex={0}>
        <code className="language-typescript">
          {`import { fetchAllCurrencies } from "kurlar";

(async () => {
  try {
    const allCurrencies = await fetchAllCurrencies(new Date("2023-10-26"));

    if (allCurrencies) {
      console.log("Tüm döviz kurları:", allCurrencies);
    } else {
      console.log("Belirtilen tarihte döviz kurları bulunamadı.");
    }
  } catch (error) {
    console.error("Döviz kurları alınırken bir hata oluştu:", error);
  }
})();`}
        </code>
      </pre>

      <Button
        variant="outline"
        className="mt-4 cursor-pointer"
        onClick={() =>
          window.open(
            "https://github.com/mustafagenc/kurlar/tree/main/demo/src/app/all"
          )
        }
      >
        <IconSourceCode /> Sayfanın Kaynak Kodu
      </Button>
    </div>
  );
}
