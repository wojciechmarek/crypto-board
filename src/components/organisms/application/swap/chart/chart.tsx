"use client";

import { ArrowDownUp, ArrowUp, ChevronDown, Info } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tab } from "@headlessui/react";

import { AxisOptions } from "react-charts";

type Props = {};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const categories = ["1D", "1W", "1M", "1Y", "ALL"];

export const Chart = (props: Props) => {
  return (
    <section className="flex flex-col gap-2 w-4/6">
      <div className="flex items-end justify-between">
        <div className="flex gap-2 items-end">
          <div className="flex">
            <div className="h-16 w-16 bg-[#151D2A] rounded-full grid place-items-center">
              <div className="h-14 w-14 bg-amber-400 rounded-full"></div>
            </div>
            <div className="h-16 w-16 bg-[#151D2A] rounded-full grid place-items-center relative -left-6">
              <div className="h-14 w-14 bg-blue-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-400">BTC/ADA Price</p>
            <div className="flex gap-6">
              <p className="text-2xl font-bold">234.22</p>
              <div className="bg-green-800 px-2 flex items-center rounded-lg">
                <ArrowUp className="h-4 w-4 mr-2" />
                <p>2.45%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-end">
          <p>
            Gas fee: <span className="font-bold">$1.34</span>
          </p>
          <p>
            TVL: <span className="font-bold">$4.23</span>
          </p>
          <p>
            Volume 24h: <span className="font-bold">$1.12B</span>
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Tab.Group>
          <Tab.List className="flex p-1 gap-3">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "rounded-lg p-2 w-12 text-sm font-medium leading-5",
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
    </section>
  );
};
