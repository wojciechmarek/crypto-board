"use client";

import React from "react";

type Props = {
  onClick: () => void;
};

export const AcceptAndSwapButton = (props: Props) => {
  const { onClick } = props;

  return (
    <button
      className="bg-purple-700 rounded-xl py-4 flex items-center justify-center font-semibold"
      onClick={onClick}
    >
      Accept and swap
    </button>
  );
};
