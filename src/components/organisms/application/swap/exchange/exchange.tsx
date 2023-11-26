import { ArrowDownUp, ChevronDown, Info } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export const Exchange = (props: Props) => {
  return (
    <section className="flex flex-col gap-2 w-2/6">
      <div className="bg-[#1f253d] rounded-xl">
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
        <div className="px-6 py-8">
          <p className="font-semibold">Trading pair:</p>
          <div className="relative flex flex-col mt-2 gap-1">
            <div className="flex items-center justify-between bg-[#151D2A] rounded-lg h-16 p-3">
              <div className="flex">
                <div className="bg-[#EA973D] h-10 w-10 rounded-md grid place-items-center">
                  <img
                    src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
                    alt="BTC"
                    className="h-6 w-6"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Sell</p>
                  <p className="text-base font-semibold">
                    BTC
                    <span className="ml-1">
                      <ChevronDown className="inline-block w-4 h-4" />
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-end text-lg font-semibold">100.0</p>
                <p className="text-end text-xs text-gray-400">$23.45</p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-[#151D2A] rounded-lg h-16 p-3">
              <div className="flex">
                <div className="bg-[#6780E3] h-10 w-10 rounded-md grid place-items-center">
                  <img
                    src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
                    alt="ETH"
                    className="h-6 w-6"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Buy</p>
                  <p className="text-base font-semibold">
                    ETH
                    <span className="ml-1">
                      <ChevronDown className="inline-block w-4 h-4" />
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-end text-lg font-semibold">100.0</p>
                <p className="text-end text-xs text-gray-400">$23.45</p>
              </div>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-10 h-10 bg-[#1f253d] rounded-full">
              <button className="w-8 h-8 bg-[#151D2A] rounded-full grid place-items-center">
                <ArrowDownUp className="w-4 h-4 " />
              </button>
            </div>
          </div>
          <div className="mt-12 bg-[#28304B] rounded-lg p-3 flex justify-between">
            <p>Market price:</p>
            <p className="font-semibold">$23.56</p>
          </div>
        </div>
        <div className="mt-12 bg-[#28304B] rounded-b-xl flex justify-between p-6">
          <p>Total fee:</p>
          <p className="font-semibold">0.0012 ETH</p>
        </div>
      </div>
      <button className="bg-purple-700 rounded-xl py-4 flex items-center justify-center font-semibold">
        Accept and swap
      </button>
    </section>
  );
};
