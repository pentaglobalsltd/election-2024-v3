import React from 'react';
import Chart from 'react-apexcharts';
import { toBN } from 'react-en-bn';

export const BarChart = ({ data }) => {
  const options = {
    xaxis: {
      categories: ['পুরুষ ভোটার', 'মহিলা ভোটার', 'হিজড়া ভোটার'],
    },
    yaxis: {
      labels: {
        formatter: (value) => toBN(value || 0),
      },
    },
    title: {
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return toBN(val || 0);
      },
    },
    fill: {
      colors: '#42b883',
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [data.male_count, data.female_count, data.hijra_count],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};
