import { ArrowUp } from "lucide-react";
import React from "react";

type Props = {};

export const ChartBasicDetails = (props: Props) => {
  return (
    <div className="flex items-end justify-between">
      <div className="flex gap-2 items-end">
        <div className="flex">
          <div className="h-16 w-16 bg-[#151D2A] rounded-full grid place-items-center">
            <div className="h-14 w-14 bg-[#EA973D] rounded-full grid place-items-center">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
                alt="BTC"
                className="h-10 w-10"
              />
            </div>
          </div>
          <div className="h-16 w-16 bg-[#151D2A] rounded-full grid place-items-center relative -left-6">
            <div className="h-14 w-14 bg-[#6780E3] rounded-full grid place-items-center">
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
                alt="ETH"
                className="h-10 w-10"
              />
            </div>
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
  );
};
