import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function MonthlyShippingChart(props: any) {
    const { data } = props;

    // Get the last 6 months as labels
    const getLastSixMonths = () => {
        const months = [];
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        const today = new Date();
        let currentMonth = today.getMonth();
        
        for (let i = 5; i >= 0; i--) {
            // Calculate the month index (handling wrapping around to previous year)
            const monthIndex = (currentMonth - i + 12) % 12;
            months.push(monthNames[monthIndex]);
        }
        
        return months;
    };

    const monthLabels = getLastSixMonths();

    // Default data if none provided
    const defaultData = {
        labels: monthLabels,
        datasets: [
            {
                label: 'Número de envíos',
                data: monthLabels.map(() => Math.floor(Math.random() * 500) + 100), // Random data between 100-600
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                borderRadius: 8,
            },
            {
                label: 'Precio total (MXN)',
                data: monthLabels.map(() => Math.floor(Math.random() * 50000) + 10000), // Random data between 10000-60000
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                borderRadius: 8,
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
                    text: 'Cantidad/Precio'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Mes'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
            tooltip: {
                mode: 'index' as const,
                intersect: false,
            },
        },
    };

    return (
        <div className='dashboard_card'>
            <h2 className='dashboard_card_title'>Envíos por mes</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
}
