"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {};

const links = [
  {
    href: "/wallet",
    label: "Wallet",
  },
  {
    href: "/swap",
    label: "Swap",
  },
  {
    href: "/trends",
    label: "Trends",
  },
  {
    href: "/news",
    label: "News",
  },
];

export const NavigationLinks = (props: Props) => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center space-x-4">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={
              pathname == link.href ? "border-b-4 border-violet-700" : ""
            }
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
