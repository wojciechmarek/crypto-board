import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Transaction = {
  buy: {
    icon: string;
    amount: string;
    currency: string;
    color: string;
  };
  sell: {
    icon: string;
    amount: string;
    currency: string;
    color: string;
  };
  price: {
    amount: string;
    currency: string;
  };
  fee: {
    amount: string;
    currency: string;
  };
  time: string;
  status: string;
};

type Props = {
  data: Transaction[];
};

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("buy", {
    header: () => "Buy",
    cell: (info) => (
      <span className="flex items-center">
        <div
          className={clsx(
            "w-8 h-8 rounded-full grid place-items-center",
            info.getValue().color
          )}
        >
          <Image
            src={info.getValue().icon}
            alt={info.getValue().currency}
            width={24}
            height={24}
          />
        </div>
        <p className="ml-2">
          <span className="font-semibold">{info.getValue().amount}</span>{" "}
          {info.getValue().currency}
        </p>
      </span>
    ),
  }),
  columnHelper.accessor("sell", {
    header: () => "Sell",
    cell: (info) => (
      <span className="flex items-center">
        <div
          className={clsx(
            "w-8 h-8 rounded-full grid place-items-center",
            info.getValue().color
          )}
        >
          <Image
            src={info.getValue().icon}
            alt={info.getValue().currency}
            width={24}
            height={24}
          />
        </div>
        <p className="ml-2">
          <span className="font-semibold">{info.getValue().amount}</span>{" "}
          {info.getValue().currency}
        </p>
      </span>
    ),
  }),
  columnHelper.accessor("price", {
    header: () => "Price",
    cell: (info) => (
      <p>
        <span className="font-semibold">{info.getValue().amount}</span>{" "}
        {info.getValue().currency}
      </p>
    ),
  }),
  columnHelper.accessor("fee", {
    header: () => <span>Fee</span>,
    cell: (info) => (
      <p>
        <span className="font-semibold">{info.getValue().amount}</span>{" "}
        {info.getValue().currency}
      </p>
    ),
  }),
  columnHelper.accessor("time", {
    header: "Time",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <span className="flex items-center">
        <span
          className={`w-3 h-3 rounded-full mr-2 ${
            info.getValue() === "Completed" ? "bg-green-700" : "bg-yellow-400"
          }`}
        ></span>
        <p>{info.getValue()}</p>
      </span>
    ),
  }),
];

export const TransactionsTable = (props: Props) => {
  const { data: defaultData } = props;
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table className="w-full">
        <thead className="bg-[#29304C]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 text-start">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-[#21273E]">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b-[1px] border-[#29304C]">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-3 px-2 text-start">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
