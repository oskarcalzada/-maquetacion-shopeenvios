import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CarrierComparisonChart(props: any) {
    const { data } = props;

    // Default data if none provided
    const defaultData = {
        labels: ['Estafeta', 'FedEx', 'DHL', 'Redpack', '99minutos'],
        datasets: [
            {
                label: 'Envíos',
                data: [320, 280, 180, 150, 90], // Default values
                backgroundColor: [
                    '#3b97d3b5',
                    '#d44141b5',
                    '#FFD700b5',
                    '#33BA62b5',
                    '#9C27B0b5'
                ],
                borderColor: [
                    '#3b97d3',
                    '#d44141',
                    '#FFD700',
                    '#33BA62',
                    '#9C27B0'
                ],
                borderWidth: 2,
                borderRadius: 6, // Move borderRadius to the dataset
            }
        ]
    };

    // Use provided data or default data
    const chartData = data?.datasets ? {
        ...data,
        datasets: data.datasets.map((dataset: any) => ({
            ...dataset,
            borderRadius: 6 // Add rounded corners to the dataset
        }))
    } : defaultData;

    const options = {
        indexAxis: 'y' as const, // Horizontal bar chart
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide legend since we only have one dataset
            },
            title: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(context: any) {
                        return `${context.dataset.label}: ${context.raw} envíos`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de envíos'
                }
            },
            y: {
                ticks: {
                    font: {
                        weight: 'bold' as const // Use 'as const' to specify this is a literal type
                    }
                }
            }
        },
        // Better values for spacing
        barPercentage: 0.9,  // Smaller value gives more space between category groups
        categoryPercentage: 0.5, // Smaller value gives more space between bars
    };

    return (
        <div className='dashboard_card dashboard_graph'>
            <h2 className='dashboard_card_title'>Comparación de Paqueterías</h2>
            <div style={{ width: '100%', height: '250px', position: 'relative' }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
}
