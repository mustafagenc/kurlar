interface TcmbRoot {
	"?xml": Xml;
	"?xml-stylesheet": XmlStylesheet;
	Tarih_Date: TarihDate;
}

interface Xml {
	$version: number;
	$encoding: string;
}

interface XmlStylesheet {
	$type: string;
	$href: string;
}

interface TarihDate {
	Currency: Currency[];
	$Tarih: string;
	$Date: string;
	$Bulten_No: string;
}

interface Currency {
	Unit: number;
	Isim: string;
	CurrencyName: string;
	ForexBuying: number;
	ForexSelling: number | null;
	BanknoteBuying: number | null;
	BanknoteSelling: number | null;
	CrossRateUSD: number | null;
	CrossRateOther: string;
	$CrossOrder: number;
	$Kod: string;
	$CurrencyCode: string;
}

export type { TcmbRoot, Xml, XmlStylesheet, TarihDate, Currency };
