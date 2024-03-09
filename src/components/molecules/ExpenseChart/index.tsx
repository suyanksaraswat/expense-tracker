'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define your data
const data = {
  'Mar 01': 1232424,
  'Mar 02': 12343,
  'Mar 03': 1234543,
  'Mar 04': 12343,
  'Mar 05': 123,
  'Mar 06': 123,
  'Mar 07': 123,
  'Mar 08': 123543,
  'Mar 09': 123,
  'Mar 10': 123,
  'Mar 11': 543123,
  'Mar 12': 123,
  'Mar 13': 123
};

const ExpenseChart = () => {
  return (
    <>
      <div className="w-full h-64">
        <Bar
          options={{
            maintainAspectRatio: false,
            responsive: true,

            scales: {
              x: {
                border: { display: false },
                grid: {
                  display: false,
                  drawTicks: false
                },
                beginAtZero: true,
                ticks: {
                  maxTicksLimit: 6,
                  minRotation: 360
                }
              },
              y: {
                border: { display: false, dash: [5] },
                grid: {
                  display: true,
                  color: (context: { tick: { value: number } }) => {
                    if (context.tick.value === 50 || context.tick.value === 110) {
                      return 'rgb(0,0,0)';
                    }
                  },
                  drawTicks: false
                },
                ticks: {
                  stepSize: 50,
                  color: (ctx: { tick: { value: number } }) => {
                    if (ctx.tick.value === 50) {
                      return 'rgb(0,0,0)';
                    } else {
                      return 'rgb(107,114,128)';
                    }
                  }
                },
                position: 'right',
                beginAtZero: true
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }}
          data={{
            labels: Object.keys(data).map((key) => {
              return key;
            }),
            datasets: [
              {
                data: Object.keys(data).map((key) => data[key as keyof typeof data]),
                borderRadius: 100,
                backgroundColor: (ctx) => {
                  if (ctx.raw === 0) {
                    return 'rgb(191,219,254)';
                  } else {
                    return 'rgb(248,113,113)';
                  }
                },
                minBarLength: 5
              }
            ]
          }}
        />
      </div>
      <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 py-3 px-2 rounded-md mt-16">
        <div className="flex items-center gap-5 ">
          <div className="h-9 w-9 bg-yellow-200 rounded-full grid place-content-center">
            <HiOutlineArrowTrendingUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <div>
            <h1 className="font-semibold">Highest Spent</h1>
            <p className="text-sm text-gray-500">321</p>
          </div>
        </div>
        <h1 className="text-lg text-red-400">-454535$</h1>
      </div>
    </>
  );
};

export default ExpenseChart;
