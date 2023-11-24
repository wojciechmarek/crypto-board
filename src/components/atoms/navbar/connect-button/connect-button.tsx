import React from "react";

type Props = {
  onWalletConnectButtonClick: () => void;
};

export const ConnectButton = (props: Props) => {
  const { onWalletConnectButtonClick } = props;

  return (
    <button
      className="px-4 h-8 bg-purple-700 text-sm font-bold rounded-lg"
      onClick={onWalletConnectButtonClick}
    >
      Connect wallet
    </button>
  );
};
