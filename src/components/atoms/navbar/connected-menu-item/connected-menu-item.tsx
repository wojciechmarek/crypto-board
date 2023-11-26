"use client";

import { Menu } from "@headlessui/react";
import React from "react";

type Props = {
  id: string;
  text: string;
  icon: React.ReactNode;
  onMenuItemClick: (id: string) => void;
};

export const ConnectedMenuItem = (props: Props) => {
  const { text, icon, id, onMenuItemClick } = props;
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? "bg-purple-700" : ""
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          onClick={() => onMenuItemClick(id)}
        >
          {active ? (
            <div aria-hidden="true">{icon}</div>
          ) : (
            <div aria-hidden="true">{icon}</div>
          )}

          {text}
        </button>
      )}
    </Menu.Item>
  );
};
