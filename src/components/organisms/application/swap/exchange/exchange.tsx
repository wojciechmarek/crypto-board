"use client";

import { AcceptAndSwapButton } from "@cb/components/atoms/swap";
import {
  ExchangeMarketDetails,
  ExchangeTitle,
  ExchangeTotalFee,
  ExchangeTradingPair,
} from "@cb/components/molecules/swap";
import React from "react";

type Props = {};

const exchangeData = {
  from: {
    symbol: "ETH",
    amount: 0.01,
    amountInUsd: 23.56,
    price: 2356,
    imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=013",
    color: "bg-[#335af4]",
  },
  to: {
    symbol: "BTC",
    amount: 0.0001,
    amountInUsd: 23.56,
    price: 2356,
    imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013",
    color: "bg-[#e18e35]",
  },
};

export const Exchange = (props: Props) => {
  const [exchangeDirection, setExchangeDirection] = React.useState(true);
  const [exchange, setExchange] = React.useState(exchangeData);

  const handleExchangeDirectionClick = () => {
    if (exchangeDirection) {
      setExchangeDirection(false);
      setExchange({
        from: exchangeData.from,
        to: exchangeData.to,
      });
    } else {
      setExchangeDirection(true);
      setExchange({
        from: exchangeData.to,
        to: exchangeData.from,
      });
    }
  };

  const handleAcceptButtonClick = () => {
    console.log("Accept button clicked");
  };

  return (
    <section className="flex flex-col gap-2 w-2/6">
      <div className="bg-[#1f253d] rounded-xl">
        <ExchangeTitle />
        <div className="px-6 py-8">
          <ExchangeTradingPair
            exchange={exchangeData}
            onExchangeDirectionClick={handleExchangeDirectionClick}
          />
          <ExchangeMarketDetails />
        </div>
        <ExchangeTotalFee />
      </div>
      <AcceptAndSwapButton onClick={handleAcceptButtonClick} />
    </section>
  );
};
