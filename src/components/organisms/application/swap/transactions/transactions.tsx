"use client";

import { Tab } from "@headlessui/react";
import React from "react";

type Props = {};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const types = ["All", "Pending", "Completed"];

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData: Person[] = Array.from({ length: 30 }, (k, i) => ({
  firstName: `User ${i}`,
  lastName: `Last Name ${i}`,
  age: 80 - i,
  visits: 100 - i,
  status: "In Relationship",
  progress: 50 - i,
}));

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    header: () => "First Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("lastName", {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    footer: (info) => info.column.id,
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
      <div className="mt-3">
        <table className="w-full ">
          <thead className="bg-[#29304C] rounded-lg">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="py-2 text-start">
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
                  <td key={cell.id} className="py-2 text-start">
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
