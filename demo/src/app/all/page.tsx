import { fetchAllCurrencies } from "kurlar";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Page() {
  const data = await fetchAllCurrencies();

  if (!data) {
    return <div className="m-auto w-3xl my-10">No data found</div>;
  }

  return (
    <div className="m-auto w-3xl my-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
