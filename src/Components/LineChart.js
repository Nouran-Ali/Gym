import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

const LineChart = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug' , 'Sep', 'Oct', 'Nov' , 'Dec'],
        datasets: [
            {
                label: 'تقييم شهري (عدد المشتركين)',
                data: [40, 60, 50, 72, 60, 73, 60, 40 , 60, 50 , 72, 60],
                fill: true,
                backgroundColor: context => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
          
                    if (!chartArea) {
                      return null;
                    }
          
                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'white');
                    gradient.addColorStop(1, '#D9ED4A');
                    return gradient;
                  },
                borderColor: '#D9ED4A',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y + '%';
                        }
                        return label;
                    }
                }
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: false,
                    text: 'Months',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                display: true,
                title: {
                    display: false,
                    text: 'Percentage',
                },
                min: 0,
                max: 100,
                ticks: {
                    callback: function (value) {
                        return value + '%';
                    }
                },
                grid: {
                    display: false,
                }
            },
            
        },
    };

    return <Line ref={chartRef} data={data} options={options} />;
};

export default LineChart;
