"use client";

import { Tab } from "@headlessui/react";
import React from "react";

type Props = {};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const types = ["All", "Pending", "Completed"];

type Transaction = {
  buy: {
    icon: string;
    amount: number;
    currency: string;
  };
  sell: {
    icon: string;
    amount: number;
    currency: string;
  };
  price: {
    amount: number;
    currency: string;
  };
  fee: {
    amount: number;
    currency: string;
  };
  time: string;
  status: string;
};

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData: Transaction[] = Array.from({ length: 30 }, (k, i) => ({
  buy: {
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    amount: (Math.random() * 10).toFixed(1),
    currency: Math.random() > 0.5 ? "ETH" : "BTC",
  },
  sell: {
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    amount: (Math.random() * 10).toFixed(1),
    currency: Math.random() > 0.5 ? "ETH" : "BTC",
  },
  price: {
    amount: (Math.random() * 40).toFixed(1),
    currency: Math.random() > 0.5 ? "ETH" : "BTC",
  },
  fee: {
    amount: (Math.random() * 0.1).toFixed(3),
    currency: Math.random() > 0.5 ? "ETH" : "BTC",
  },
  time: "2021-09-01 12:00:00",
  status: Math.random() > 0.5 ? "Pending" : "Completed",
}));

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("buy", {
    header: () => "Buy",
    cell: (info) => (
      <span className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-[#EA973D] grid place-items-center">
          <img
            src={info.getValue().icon}
            className="h-5 w-5"
            alt={info.getValue().currency}
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
        <div className="w-8 h-8 rounded-full bg-[#6780E3] grid place-items-center">
          <img
            src={info.getValue().icon}
            className="h-5 w-5"
            alt={info.getValue().currency}
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

export const Transactions = (props: Props) => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="flex flex-col">
      <div className="flex gap-12 items-center">
        <p className="font-bold text-lg">My Orders</p>
        <Tab.Group>
          <Tab.List className="flex p-1 gap-3">
            {types.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "rounded-lg p-2 min-w-[50px] text-sm font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-violet-700 shadow"
                      : "hover:bg-violet-700/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
      <div className="mt-3 relative overflow-x-auto rounded-lg">
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
    </section>
  );
};
