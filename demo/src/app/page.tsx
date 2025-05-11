"use client";

import Image from "next/image";
import Link from "next/link";
import Prism from "prismjs";
import { useEffect } from "react";
import { currencyTypes } from "@/lib/constants";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";

export default function Page() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

	return (
    <div className="m-auto w-3xl my-10">
      <Link
        href="https://github.com/mustafagenc/palestine/blob/main/Support.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://raw.githubusercontent.com/mustafagenc/palestine/refs/heads/main/banners/b-2.svg"
          alt="alt"
          width={800}
          height={140}
        />
      </Link>
      <p className="mt-10">
        Türkiye Cumhuriyet Merkez Bankası (TCMB) tarafından yayınlanan döviz
        kurlarını kolayca çekmenizi sağlayan bir TypeScript kütüphanesi.
        Kütüphane, döviz kurlarını JSON formatında döndürür ve bu sayede kolayca
        kullanılabilir.
      </p>
      <div>
        <h3 className="text-xl font-bold mt-10 border-b-1 mb-2 pb-1">
          Özellikler
        </h3>
        <ul className="list-inside list-disc">
          <li>TCMB&apos;nin günlük döviz kurlarını çekme</li>
          <li>Tarihe göre döviz kuru sorgulama</li>
          <li>JSON formatında sonuç döndürme</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mt-10 border-b-1 mb-2 pb-1">
          Kurulum
        </h3>
        <p className="mb-5">
          Projeyi kullanmaya başlamak için aşağıdaki adımları izleyin:
        </p>
        <pre className="language-bash" tabIndex={0}>
          <code className="language-bash">yarn add kurlar / npm i kurlar</code>
        </pre>
      </div>
      <div>
        <h3 className="text-xl font-bold mt-10 border-b-1 mb-2 pb-1">
          Kullanım
        </h3>
        <p className="mb-5">
          Projenizi başlatmak için aşağıdaki kodu kullanabilirsiniz:
        </p>
        <pre className="language-typescript" tabIndex={0}>
          <code className="language-typescript">
            {`import { fetchCurrency } from "kurlar";

(async () => {
  const result = await fetchCurrency({
    currency: "USD",
    date: new Date("2023-10-26"),
  });

  console.log(result);
})();`}
          </code>
        </pre>
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
      </div>
      <div>
        <h3 className="text-xl font-bold mt-10 border-b-1 mb-2 pb-1">
          Döviz Kodu Listesi
        </h3>
        {currencyTypes.map((currency) => (
          <Link
            href={`/currency?currency=${currency}`}
            key={currency}
            className="inline-flex items-center rounded-md bg-gray-50 dark:bg-green-300/40 px-2 py-1 mr-1 mb-1 text-xs font-medium text-gray-600 dark:text-white ring-1 ring-gray-500/10 ring-inset"
          >
            {currency}
          </Link>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-bold mt-10 border-b-1 mb-2 pb-1">
          Katkıda Bulunma
        </h3>
        <p>
          Katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir
          issue açın.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold mt-10 border-b-1 mb-2 pb-1">Lisans</h3>
        <p>
          Bu proje{" "}
          <Link
            href={"https://github.com/mustafagenc/kurlar/blob/main/LICENSE"}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT
          </Link>{" "}
          ile lisanslanmıştır.
        </p>
      </div>
    </div>
  );
}
