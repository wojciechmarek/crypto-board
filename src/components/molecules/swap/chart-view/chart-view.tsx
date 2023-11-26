"use client";
import { useEffect, useRef } from "react";

type Props = {};

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
  useEffect(() => {
    const element = document.getElementById("myChart") as HTMLCanvasElement;
    const ctx = element.getContext("2d");

    if (!ctx) {
      return;
    }

    // https://blog.vanila.io/chart-js-tutorial-how-to-make-gradient-line-chart-af145e5c92f9
    var gradientFill = ctx.createLinearGradient(0, 10, 0, 300);
    gradientFill.addColorStop(0, "#7231c7b1");
    gradientFill.addColorStop(1, "#7231c730");

    var myChart = new ChartJs(ctx, {
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
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: Array.from({ length: 40 }, () => Math.random() * 100),
            // label: "Pending",
            label: undefined,
            borderColor: "#7331C7",
            backgroundColor: gradientFill,
            tension: 0.5,

            fill: true,
          },
        ],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas id="myChart"></canvas>;
};
