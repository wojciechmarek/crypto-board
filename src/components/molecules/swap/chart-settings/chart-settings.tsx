"use client";

import { Menu, Tab, Transition } from "@headlessui/react";
import { CalendarClock } from "lucide-react";
import { Fragment, useState } from "react";
import clsx from "clsx";

type Props = {
  chartType: "Line" | "Area" | "Candle";
  onChartTypeChange: (chartType: "Line" | "Area" | "Candle") => void;
};

const allPeriods = [
  "1s",
  "5s",
  "15s",
  "1m",
  "5m",
  "15m",
  "1h",
  "4h",
  "1D",
  "1W",
  "1M",
  "1Y",
  "MTD",
  "YTD",
  "ALL",
];
const periods = ["1m", "1h", "1D", "1W", "1Y", "ALL"];
const types = ["Candle", "Line", "Area"];

export const ChartSettings = (props: Props) => {
  const { chartType, onChartTypeChange } = props;

  const [selectedPeriod, setSelectedPeriod] = useState("1W");

  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center">
        <Tab.Group>
          <Tab.List className="flex p-1 gap-3">
            {periods.map((period) => (
              <Tab
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={clsx(
                  "rounded-lg p-2 w-12 text-sm font-medium leading-5",
                  selectedPeriod === period
                    ? "bg-violet-700 shadow"
                    : "hover:bg-violet-700/[0.12] hover:text-white"
                )}
              >
                {period}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
        <div className="w-[1px] h-full bg-gray-700"></div>
        <div>
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <Menu.Button
                  className={clsx(
                    "grid gap-2 place-items-center rounded-lg p-2 w-12 hover:bg-violet-700/[0.12]",
                    open && "bg-violet-700 hover:bg-violet-700"
                  )}
                >
                  <CalendarClock className="h-5 w-5" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-52 grid grid-cols-4 gap-1 p-1 origin-top-right divide-y rounded-md bg-[#1B292B] shadow-lg">
                    {allPeriods.map((period) => (
                      <button
                        onClick={() => setSelectedPeriod(period)}
                        className={clsx(
                          "px-1 py-2 border-none rounded-lg text-sm",
                          selectedPeriod === period
                            ? "bg-violet-700"
                            : "hover:bg-violet-700/[0.24] hover:text-white"
                        )}
                        key={period}
                      >
                        {period}
                      </button>
                    ))}
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>

      <Tab.Group>
        <Tab.List className="flex p-1 gap-3">
          {types.map((type) => (
            <Tab
              key={type}
              onClick={() => onChartTypeChange(type as any)}
              className={clsx(
                "rounded-lg p-2 w-16 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                type === chartType
                  ? "bg-violet-700 shadow"
                  : "hover:bg-violet-700/[0.12] hover:text-white"
              )}
            >
              {type}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};
