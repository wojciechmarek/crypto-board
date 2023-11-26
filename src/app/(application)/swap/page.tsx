import {
  Exchange,
  Chart,
  Transactions,
} from "@cb/components/organisms/application/swap";
import React from "react";

export default function SwapPage() {
  return (
    <main className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <Exchange />
          <Chart />
        </div>
        <Transactions />
      </div>
    </main>
  );
}
