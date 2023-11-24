import React from "react";

type Props = {};

export const NavigationLinks = (props: Props) => {
  return (
    <ul className="flex items-center space-x-4">
      <li className="">Wallet</li>
      <li className="">Swap</li>
      <li className="">News</li>
      <li className="">Explore</li>
    </ul>
  );
};
