[![Support Palestine](https://raw.githubusercontent.com/mustafagenc/palestine/refs/heads/main/banners/b-2.svg)](https://github.com/mustafagenc/palestine/blob/main/Support.md)


[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://github.com/sponsors/mustafagenc) ![GitHub package.json version](https://img.shields.io/github/package-json/v/mustafagenc/kurlar) [![NPM Version](https://img.shields.io/npm/v/%40mustafagenc%2Fkurlar)](https://www.npmjs.com/package/kurlar) [![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/mustafagenc/kurlar)](https://www.codefactor.io/repository/github/mustafagenc/kurlar) [![GitHub Repo stars](https://img.shields.io/github/stars/mustafagenc/kurlar)](https://github.com/mustafagenc/kurlar/stargazers)


# Kurlar

Türkiye Cumhuriyet Merkez Bankası (TCMB) tarafından yayınlanan döviz kurlarını kolayca çekmenizi sağlayan bir TypeScript kütüphanesi.

## Özellikler

- TCMB'nin günlük döviz kurlarını çekme
- Tarihe göre döviz kuru sorgulama
- JSON formatında sonuç döndürme
- TypeScript desteği ile güçlü tip kontrolü

## Kurulum

Projeyi kullanmaya başlamak için aşağıdaki adımları izleyin:

```bash
yarn add kurlar
```

## Kullanım

Aşağıdaki örnek, kütüphanenin nasıl kullanılacağını göstermektedir:

```ts
import { fetchCurrency } from "kurlar";

(async () => {
  const result = await fetchCurrency({
    currency: "USD",
    date: new Date("2023-10-26"),
  });

  console.log(result);
})();
```
```ts
import { fetchAllCurrencies } from "kurlar";

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
})();
```

### Döviz Kodu Listesi

`USD`, `AUD`, `DKK`, `EUR`, `GBP`, `CHF`, `SEK`, `CAD`, `KWD`, `NOK`, `SAR`, `JPY`, `BGN`, `RON`, `RUB`, `CNY`, `PKR`, `QAR`, `KRW`, `AZN`, `AED`

## API

### `fetchCurrency({ currency, date }): Promise<TCMBResponseType | null>`

- **`currency`**: Döviz kodu (ör. `"USD"`, `"EUR"`)
- **`date`**: Tarih (opsiyonel, belirtilmezse bugünün tarihi kullanılır)

Dönen değer, aşağıdaki yapıya sahiptir:

```ts
type TCMBResponseType = {
  Unit: number;
  CurrencyName: string;
  CurrencyCode: string;
  ForexBuying: number;
  ForexSelling: number;
  BanknoteBuying: number;
  BanknoteSelling: number;
};
```

## Testler

Testleri çalıştırmak için:

```bash
yarn test
```

Kod kapsamını görmek için:

```bash
yarn test:coverage
```

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir issue açın.

## Katkıda Bulunanlar

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/eatalay13"><img src="https://avatars.githubusercontent.com/u/30194127?v=4?s=100" width="100px;" alt="Emrah Atalay"/><br /><sub><b>Emrah Atalay</b></sub></a><br /><a href="#code-eatalay13" title="Code">💻</a> <a href="#review-eatalay13" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Lisans

Bu proje [MIT](LICENSE) ile lisanslanmıştır.
