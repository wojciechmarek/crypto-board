import { Tab } from "@headlessui/react";
import { clsx } from "clsx";
import React from "react";

type Props = {
  transactionTypes: string[];
};

export const TransactionsSettings = (props: Props) => {
  const { transactionTypes } = props;

  return (
    <Tab.Group>
      <Tab.List className="flex p-1 gap-3">
        {transactionTypes.map((type) => (
          <Tab
            key={type}
            className={({ selected }) =>
              clsx(
                "rounded-lg p-2 min-w-[50px] text-sm font-medium leading-5",
                selected ? "bg-violet-700 shadow" : "hover:bg-violet-700/[0.12]"
              )
            }
          >
            {type}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
};
