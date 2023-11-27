"use client";

import React from "react";
import { TransactionsTable } from "@cb/components/molecules/swap";
import { TransactionsSettings } from "@cb/components/molecules/swap/transactions-settings/transactions-settings";

type Props = {};

const types = ["All", "Pending", "Completed"];

const tableDataList = Array.from({ length: 30 }, (k, i) => ({
  buy: {
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    amount: (Math.random() * 10).toFixed(1),
    currency: Math.random() > 0.5 ? "ETH" : "BTC",
    color: "bg-[#e18e35]",
  },
  sell: {
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    amount: (Math.random() * 10).toFixed(1),
    currency: Math.random() > 0.5 ? "ETH" : "BTC",
    color: "bg-[#335af4]",
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

export const Transactions = (props: Props) => {
  const [selectedTransactionType, setSelectedTransactionType] =
    React.useState("All");

  const [tableData, setTableData] = React.useState(tableDataList);

  const handleTransactionTypeClick = (type: string) => {
    setSelectedTransactionType(type);

    if (type === "All") {
      setTableData(tableDataList);
    } else if (type === "Pending") {
      setTableData(tableDataList.filter((data) => data.status === "Pending"));
    } else if (type === "Completed") {
      setTableData(tableDataList.filter((data) => data.status === "Completed"));
    }
  };

  return (
    <section className="flex flex-col">
      <div className="flex gap-12 items-center">
        <p className="font-bold text-lg ml-2">My Orders</p>
        <TransactionsSettings
          transactionTypes={types}
          selectedTransactionType={selectedTransactionType}
          onTransactionTypeClick={handleTransactionTypeClick}
        />
      </div>
      <div className="mt-2">
        <TransactionsTable data={tableData} />
      </div>
    </section>
  );
};
