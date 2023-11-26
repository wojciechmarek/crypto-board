import { Info } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export const ExchangeTitle = (props: Props) => {
  return (
    <div className="flex justify-between items-center p-6 border-b-[1px] border-gray-700">
      <h2 className="font-bold text-lg">Create order</h2>
      <Link
        className="flex items-center text-gray-400 hover:text-gray-200"
        href="/learn-more"
      >
        <Info className="mr-2 h-4 w-4" />
        <p className=" text-sm">Learn more</p>
      </Link>
    </div>
  );
};
