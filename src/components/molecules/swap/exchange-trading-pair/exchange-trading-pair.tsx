"use client";

import clsx from "clsx";
import { ArrowDownUp, ChevronDown } from "lucide-react";
import React from "react";

type ExchangeEntry = {
  symbol: string;
  amount: number;
  amountInUsd: number;
  price: number;
  imageUrl: string;
  color: string;
};

type Props = {
  onExchangeDirectionClick: () => void;
  exchange: {
    from: ExchangeEntry;
    to: ExchangeEntry;
  };
};

export const ExchangeTradingPair = (props: Props) => {
  const { exchange, onExchangeDirectionClick } = props;

  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        {Object.keys(exchange).map((key) => {
          const { symbol, amount, price, imageUrl, color } =
            exchange[key as keyof typeof exchange];

          return (
            <div
              className="flex items-center justify-between bg-[#151D2A] rounded-lg h-16 p-3"
              key={key}
            >
              <div className="flex">
                <div
                  className={clsx(
                    "h-10 w-10 rounded-md grid place-items-center",
                    color
                  )}
                >
                  <img src={imageUrl} alt={symbol} className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Sell</p>
                  <p className="text-base font-semibold">
                    {symbol}
                    <span className="ml-1">
                      <ChevronDown className="inline-block w-4 h-4" />
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-end text-lg font-semibold">{amount}</p>
                <p className="text-end text-xs text-gray-400">${price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-10 h-10 bg-[#1f253d] rounded-full">
        <button
          className="w-8 h-8 bg-[#151D2A] rounded-full grid place-items-center"
          onClick={onExchangeDirectionClick}
        >
          <ArrowDownUp className="w-4 h-4 " />
        </button>
      </div>
    </div>
  );
};
