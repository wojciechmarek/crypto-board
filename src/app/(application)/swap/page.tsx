import { Exchange } from "@cb/components/organisms/application/swap";
import { Chart } from "@cb/components/organisms/application/swap/chart";
import { ArrowDown, ArrowDownUp, ChevronDown, Info } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SwapPage() {
  return (
    <main className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Exchange />
          <Chart />
        </div>
        <section>transactions</section>
      </div>
    </main>
  );
}
