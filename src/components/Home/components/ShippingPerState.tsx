import Box from "../../../elements/Box";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function ShippingPerState(props: any) {
    const { data } = props;

    // Get current day of month and generate days array until today
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const daysArray = Array.from({ length: currentDay }, (_, i) => i + 1);

    // Default data if none provided
    const defaultData = {
        labels: daysArray, // Changed from daysArray.map(day => `Día ${day}`) to just numbers
        datasets: [
            {
                label: 'Envíos',
                data: daysArray.map(() => Math.floor(Math.random() * 150) + 50), // Random data between 50-200
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.4,
            }
        ]
    };

    // Use provided data or default data
    const chartData = data?.datasets ? data : defaultData;

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Cantidad'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Días del mes actual'
                }
            }
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            tooltip: {
                mode: 'index' as const,
                intersect: false,
            },
        },
    };

    return (
        <div className='dashboard_card dashboard_graph'>
            <h2 className='dashboard_card_title'>Envíos por día</h2>
            <Line data={chartData} options={options} />
        </div>
    )
}