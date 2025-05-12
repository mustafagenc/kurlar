import type { EncodingType, UrlType } from "./types";

function getEncoding({ date }: { date: Date }): EncodingType {
  const firstUtfDate: Date = new Date(2016, 8, 8);
  const currentDate: Date = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  if (currentDate >= firstUtfDate) return "UTF-8";
  return "ISO-8859-9";
}

function formatToTwoDigits(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

function getApiUrl({ date }: { date?: Date }): UrlType {
  let url = "https://www.tcmb.gov.tr/kurlar/today.xml";
  let encoding = "UTF-8";

  if (date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const inputDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );

    if (inputDate <= today) {
      const year = date.getFullYear();
      const month = formatToTwoDigits(date.getMonth());
      const day = formatToTwoDigits(date.getDate());

      url = `https://www.tcmb.gov.tr/kurlar/${year}${month}/${day}${month}${year}.xml`;
      encoding = getEncoding({ date });
    }
  }

  return {
    url: url,
    encoding: encoding,
  };
}

export { getEncoding, formatToTwoDigits, getApiUrl };
