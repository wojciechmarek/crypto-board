"use client";

import React, { useState } from "react";

import {
  ChartBasicDetails,
  ChartSettings,
  ChartView,
} from "@cb/components/molecules/swap";

type Props = {};

export const Chart = (props: Props) => {
  const [chartType, setChartType] = useState<"Line" | "Area" | "Candle">(
    "Area"
  );

  const handleChartTypeChange = (chartType: "Line" | "Area" | "Candle") => {
    setChartType(chartType);
  };

  return (
    <section className="flex flex-col justify-between w-4/6">
      <ChartBasicDetails />
      <div className="flex flex-col gap-2">
        <ChartSettings
          chartType={chartType}
          onChartTypeChange={handleChartTypeChange}
        />
        <ChartView chartType={chartType} />
      </div>
    </section>
  );
};
