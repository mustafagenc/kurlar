"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { IconArrowsUpDown } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export type TCMBResponseType = {
  Unit: number;
  CurrencyName: string;
  CurrencyCode: string;
  ForexBuying: number;
  ForexSelling: number;
  BanknoteBuying: number;
  BanknoteSelling: number;
};

export const columns: ColumnDef<TCMBResponseType>[] = [
  {
    accessorKey: "CurrencyName",
    header: "Para Birimi",
    cell: ({ row }) => {
      const currencyName: string = row.getValue("CurrencyName");
      const currencyCode: string = row.getValue("CurrencyCode");
      return (
        <div className="text-left flex items-center justify-start gap-2">
          <Image
            src={`/flags/${currencyCode}.svg`}
            alt={currencyCode}
            width={20}
            height={15}
          />
          {currencyName}
        </div>
      );
    },
  },
  {
    accessorKey: "CurrencyCode",
    header: "Para Birimi Kodu",
  },
  {
    accessorKey: "ForexBuying",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Alış
            <IconArrowsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("ForexBuying"));
      let formatted = new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
      }).format(amount);
      if (!amount) {
        formatted = "-";
      }
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "ForexSelling",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Satış
            <IconArrowsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("ForexSelling"));
      let formatted = new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
      }).format(amount);
      if (!amount) {
        formatted = "-";
      }
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
