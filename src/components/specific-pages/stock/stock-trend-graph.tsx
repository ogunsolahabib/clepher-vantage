import { formatDate } from '@/lib/utils';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};



export default function StockTrendGraph({ chartData }: { chartData: any }) {

    const dates = Object.keys(chartData).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    const labels = dates.map(formatDate);

    const openPrices = dates.map((item: any) => chartData[item]['1. open']);

    const closePrices = dates.map((item: any) => chartData[item]['4. close']);

    const data = {
        labels,
        datasets: [
            {
                label: 'Open Price',
                data: openPrices,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Close Price',
                data: closePrices,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ],
    }

    return <Line options={options} data={data} />
}
