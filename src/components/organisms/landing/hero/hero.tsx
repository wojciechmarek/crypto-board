import React from "react";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Welcome to Cryptoboard</h1>
      <p className="mt-3 text-2xl">
        The best place to manage your crypto assets.
      </p>
      <a
        className="px-4 py-2 mt-6 text-white bg-purple-700 rounded-md"
        href="/wallet"
      >
        Run the application
      </a>
    </div>
  );
};
