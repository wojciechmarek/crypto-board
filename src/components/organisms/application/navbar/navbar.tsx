"use client";

import React, { Fragment, useState } from "react";
import { LogOut, Settings, Menu as MenuIcon } from "lucide-react";
import { ConnectButton, Logo } from "@cb/components/atoms/navbar";
import { WalletManager } from "@cb/components/molecules/navbar";
import { NavigationLinks } from "@cb/components/molecules/navbar/navigation-links";
import { useWeb3Modal } from "@web3modal/wagmi/react";

type Props = {};

const walletManagerMenuItems = [
  {
    id: "settings",
    text: "Settings",
    icon: <Settings className="mr-2 h-5 w-5" />,
  },
  {
    id: "logout",
    text: "Logout",
    icon: <LogOut className="mr-2 h-5 w-5" />,
  },
];

export const Navbar = (props: Props) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const { open } = useWeb3Modal();

  const handleWalletConnectButtonClick = () => {
    // setIsWalletConnected(!isWalletConnected);
    open();
  };

  const handleWalletManagerMenuItemClick = (id: string) => {
    if (id === "logout") {
      setIsWalletConnected(false);
    }
  };

  return (
    <nav className="h-16 border-b-[1px] border-gray-700">
      <div className="h-full flex items-center px-4 max-w-7xl mx-auto justify-between">
        <div className="w-48">
          <Logo />
        </div>
        <div className="items-center hidden md:flex">
          <NavigationLinks />
        </div>
        <div className="w-48 flex items-center justify-end">
          <div className="flex items-center">
            {isWalletConnected ? (
              <WalletManager
                menuItems={walletManagerMenuItems}
                onMenuItemClick={handleWalletManagerMenuItemClick}
              />
            ) : (
              <ConnectButton
                onWalletConnectButtonClick={handleWalletConnectButtonClick}
              />
            )}
          </div>
          <button className="flex items-center justify-center md:hidden h-8 w-8 ml-3">
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};
