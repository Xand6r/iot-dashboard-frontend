import React, { useState } from "react";
import moment from "moment";
import ReactApexChart from "react-apexcharts";

const SENSOR_COUNT = 3; //the number of sensors there are;

function ApexChart({ data, dataKey }) {
  const state = {
    theme: {
      palette: "palette10", // upto palette10
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    series: [...Array(SENSOR_COUNT).keys()].map((index) => ({
      name: `Pressure Sensor ${index + 1}`,
      data: data.map((data) => data[dataKey.toLowerCase()][index]).flat(),
    })),
    options: {
      chart: {
        height: 700,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: `A graph of ${dataKey} vs Time`,
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        title: {
          text: "Date",
        },
        type: "datetime",
      },
      labels: data.map(({ date }) => date),
      yaxis: {
        title: {
          text: `${dataKey}`,
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default ApexChart;
