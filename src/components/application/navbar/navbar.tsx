"use client";

import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LogOut, Settings, Sun } from "lucide-react";

type Props = {};

export const Navbar = (props: Props) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnectButtonClick = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <nav className="h-16 border-b-[1px] border-gray-700">
      <div className="h-full flex items-center px-4 max-w-7xl mx-auto justify-between">
        <div className="w-48">
          <p>
            <span className="font-black text-2xl">CRYPTO</span>board
          </p>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-4">
            <li className="">Home</li>
            <li className="">News</li>
            <li className="">Swap</li>
            <li className="">Explore</li>
          </ul>
        </div>
        <div className="w-48">
          <div className="flex items-center justify-end">
            {isWalletConnected ? (
              <div className="flex items-center space-x-4">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-gray-950 px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                      <p className="font-bold">0xsefgt...23fgdtr</p>
                      <div className="h-6 w-6 bg-red-800 rounded-full ml-3"></div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-950 shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="p-1">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? "bg-violet-500" : ""
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <Settings
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <Settings
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                Setting
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? "bg-violet-500 " : ""
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                onClick={handleWalletConnectButtonClick}
                              >
                                {active ? (
                                  <LogOut
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <LogOut
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                Logout
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <button
                className="px-4 py-2 bg-purple-700 text-sm font-bold rounded-lg"
                onClick={handleWalletConnectButtonClick}
              >
                Connect wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
