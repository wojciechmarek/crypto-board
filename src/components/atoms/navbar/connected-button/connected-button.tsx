import { Menu } from "@headlessui/react";
import React from "react";

type Props = {};

export const ConnectedButton = (props: Props) => {
  return (
    <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-[#1B292B] px-4 h-8 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
      <p className="font-bold">0xsefgt...23fgdtr</p>
      <div className="h-6 w-6 bg-red-800 rounded-full ml-3"></div>
    </Menu.Button>
  );
};
