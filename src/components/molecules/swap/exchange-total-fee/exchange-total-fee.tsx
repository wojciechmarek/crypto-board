import React from "react";

type Props = {};

export const ExchangeTotalFee = (props: Props) => {
  return (
    <div className="mt-12 bg-[#28304B] rounded-b-xl flex justify-between p-6">
      <p>Total fee:</p>
      <p className="font-semibold">0.0012 ETH</p>
    </div>
  );
};
