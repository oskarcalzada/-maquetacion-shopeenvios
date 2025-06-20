import Box from "../../elements/Box";
import { useEffect, useState } from "react";
import ShippingPerState from "./components/ShippingPerState";
import MexicoSalesMap from "./components/MexicoSalesMap";
import Indicators from "./components/Indicators";
import MonthlyShippingChart from "./components/MonthlyShippingChart";
import ServiceTypeChart from "./components/ServiceTypeChart";
import CarrierComparisonChart from "./components/CarrierComparisonChart";

export default function Home(props: any) {

  const [ordersPerHour, setOrdersPerHour] = useState<any>({
    labels: [],
    values: []
  });
  
  // Updated to match the new ShippingPerState format
  const [shippingPerState, setShippingPerState] = useState<any>({});
  
  // New state for monthly shipping data
  const [monthlyShipping, setMonthlyShipping] = useState<any>({});

  const [topSellers, setTopSellers] = useState<any[]>([]);

  // Update geochart data to focus on Mexican cities/states
  const [geoChartData, setGeoChartData] = useState<any[]>([
    ['Estado', 'Envios'],
    ['MX-CMX', 500],    // Ciudad de México
    ['MX-JAL', 380],    // Jalisco (Guadalajara)
    ['MX-NLE', 420],    // Nuevo León (Monterrey)
    ['MX-PUE', 320],    // Puebla
    ['MX-MEX', 290],    // Estado de México
    ['MX-BCN', 270],    // Baja California Norte
    ['MX-QUE', 250],    // Querétaro
    ['MX-YUC', 210],    // Yucatán
    ['MX-GUA', 180],    // Guanajuato
    ['MX-CHH', 150]     // Chihuahua
  ]);

  // New state for service type data
  const [serviceTypeData, setServiceTypeData] = useState<any>({});

  // New state for carrier comparison data
  const [carrierData, setCarrierData] = useState<any>({});

  const loadData = async () => {
    // This is where you would fetch real data from your API
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div id="Dashboard" className="component_container">
        
        <div className="component_title">
            <h1>Panel de control</h1>
            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
                
        <MexicoSalesMap data={geoChartData} />
        
        <div className="dashboard_row">
          <Indicators />
          <MonthlyShippingChart data={monthlyShipping} />
          
        </div>
        
        <div className="dashboard_row">
          <CarrierComparisonChart data={carrierData} />
        </div>

        <div className="dashboard_row">
          <ShippingPerState data={shippingPerState} />
          <ServiceTypeChart data={serviceTypeData} />
        </div>
        
    </div>
  );
}
