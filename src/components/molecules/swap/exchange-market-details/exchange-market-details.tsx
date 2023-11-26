import React from "react";

type Props = {};

export const ExchangeMarketDetails = (props: Props) => {
  return (
    <div className="mt-12 bg-[#28304B] rounded-lg p-3 flex justify-between">
      <p>Market price:</p>
      <p className="font-semibold">$23.56</p>
    </div>
  );
};
