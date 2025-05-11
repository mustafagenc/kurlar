import { fetchAllCurrencies } from "kurlar";
import { Suspense } from "react";

import { columns } from "./columns";
import CurrencyTableSkeleton from "./components/currency-table-skeleton";
import { DataTable } from "./data-table";

export default async function Page() {
	const data = await fetchAllCurrencies();

	if (!data) {
		return <div className="m-auto w-3xl my-10">Kayıt yok</div>;
	}

	return (
		<div className="m-auto w-3xl my-10">
			<Suspense fallback={<CurrencyTableSkeleton />}>
				<DataTable columns={columns} data={data} />
			</Suspense>
		</div>
	);
}
