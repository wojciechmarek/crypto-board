import { Exchange } from "@cb/components/organisms/application/swap";
import { Chart } from "@cb/components/organisms/application/swap/chart";
import React from "react";

export default function SwapPage() {
  return (
    <main className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col justify-between">
        <div className="flex gap-6">
          <Exchange />
          <Chart />
        </div>
        <section>transactions</section>
      </div>
    </main>
  );
}
