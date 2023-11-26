"use client";
import { useEffect, useState } from "react";

type Props = {
  chartType: "Line" | "Area" | "Candle";
};

import {
  Chart as ChartJs,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  registerables as registerablesjs,
} from "chart.js";
ChartJs.register(...registerablesjs);

ChartJs.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export const ChartView = (props: Props) => {
  const { chartType } = props;

  useEffect(() => {
    const element = document.getElementById("myChart") as HTMLCanvasElement;
    const ctx = element.getContext("2d");

    if (!ctx) {
      return;
    }

    // https://blog.vanila.io/chart-js-tutorial-how-to-make-gradient-line-chart-af145e5c92f9
    const gradientFill = ctx.createLinearGradient(0, 10, 0, 300);
    gradientFill.addColorStop(0, "#7231c7b1");
    gradientFill.addColorStop(1, "#7231c730");

    const myChart = new ChartJs(ctx, {
      type: "line",
      options: {
        color: "#28304B",
        scales: {
          y: {
            grid: {
              color: "#28304B",
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
      data: {
        labels: Array.from({ length: 40 }, (_, i) => `Day ${i}`),
        datasets: [
          {
            data: [
              73,
              65,
              67,
              79,
              72,
              63,
              ...Array.from({ length: 28 }, () => (Math.random() + 10) * 2),
              42,
              37,
              21,
              19,
              13,
            ],
            label: "BTC/ETH",
            borderColor: "#7331C7",
            backgroundColor: gradientFill,
            tension: 0.5,
            fill: chartType === "Area",
          },
        ],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [chartType]);

  return <canvas id="myChart"></canvas>;
};
