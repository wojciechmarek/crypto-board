import {
  ConnectedButton,
  ConnectedMenuItem,
} from "@cb/components/atoms/navbar";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

type Props = {
  address: string;
  onMenuItemClick: (id: string) => void;
  menuItems: {
    id: string;
    text: string;
    icon: React.ReactNode;
  }[];
};

export const WalletManager = (props: Props) => {
  const { onMenuItemClick, menuItems, address } = props;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <ConnectedButton address={address} />
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#1B292B] shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="p-1">
            <div className="px-1 py-1 ">
              {menuItems.map((menuItem) => (
                <ConnectedMenuItem
                  {...menuItem}
                  key={menuItem.id}
                  onMenuItemClick={onMenuItemClick}
                />
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
