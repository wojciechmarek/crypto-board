"use client";

import React from "react";

import {
  BasicDetails,
  ChartSettings,
  ChartView,
} from "@cb/components/molecules/swap";

type Props = {};

export const Chart = (props: Props) => {
  return (
    <section className="flex flex-col gap-6 w-4/6">
      <BasicDetails />
      <div className="mt-6 flex flex-col gap-4">
        <ChartSettings />
        <ChartView />
      </div>
    </section>
  );
};
