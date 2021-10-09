import React, { useState } from "react";
import moment from "moment";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

      series: [
        {
          name: "High - 2013",
          data: [28, 29, 12, 45, 67, 11, 43],
          labels: [
            "01 Jan 2001 16:20",
            "02 Jan 2001 16:20",
            "03 Jan 2001 16:20",
            "04 Jan 2001 16:20",
            "05 Jan 2001 16:20",
            "06 Jan 2001 16:20",
            "07 Jan 2001 16:29",
          ],
        },
        {
          name: "Low - 2013",
          data: [12, 11, 34, 23, 34, 45, 55],
        },
      ],
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
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Average High & Low Temperature",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          title: {
            text: "Month",
          },
          type: "datetime",
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
        }
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
