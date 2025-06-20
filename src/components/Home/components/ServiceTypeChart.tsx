import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ServiceTypeChart(props: any) {
    const { data } = props;

    // Default data if none provided
    const defaultData = {
        labels: ['Terrestre', 'Aéreo', 'Día Siguiente', 'Otro'],
        datasets: [
            {
                data: [45, 25, 20, 10], // Default distribution in percentages
                backgroundColor: [
                    '#3b97d3',
                    '#d44141',
                    '#23B7D9',
                    '#33BA62',
                ],
                borderColor: [
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                ],
                borderWidth: 2,
            },
        ],
    };

    // Use provided data or default data
    const chartData = data?.datasets ? data : defaultData;

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right' as const,
            },
            title: {
                display: false,
            },
        },
        cutout: '60%',
    };

    return (
        <div className='dashboard_card dashboard_graph'>
            <h2 className='dashboard_card_title'>Tipos de Servicio</h2>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Doughnut data={chartData} options={options} />
            </div>
        </div>
    );
}
