"use client";

import React from "react";

type Props = {
  isConnecting: boolean;
  onWalletConnectButtonClick: () => void;
};

export const ConnectButton = (props: Props) => {
  const { isConnecting, onWalletConnectButtonClick } = props;

  return (
    <button
      className="px-4 h-10 bg-purple-700 text-sm font-bold rounded-lg"
      onClick={onWalletConnectButtonClick}
    >
      {isConnecting ? "Connecting..." : "Connect wallet"}
    </button>
  );
};
