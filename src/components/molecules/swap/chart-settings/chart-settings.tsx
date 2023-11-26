import React from "react";
import { Tab } from "@headlessui/react";
import { CalendarClock } from "lucide-react";

type Props = {};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const categories = ["1D", "1W", "1M", "1Y", "ALL"];
const types = ["Candle", "Line", "Area"];

export const ChartSettings = (props: Props) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center">
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
        <div className="w-[1px] h-full bg-gray-700"></div>
        <button className="grid gap-2 place-items-center rounded-lg p-2 w-12 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 hover:bg-violet-700/[0.12] hover:text-white">
          <CalendarClock className="h-4 w-4" />
        </button>
      </div>

      <Tab.Group>
        <Tab.List className="flex p-1 gap-3">
          {types.map((type) => (
            <Tab
              key={type}
              className={({ selected }) =>
                classNames(
                  "rounded-lg p-2 w-16 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-violet-700 shadow"
                    : "hover:bg-violet-700/[0.12] hover:text-white"
                )
              }
            >
              {type}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};
