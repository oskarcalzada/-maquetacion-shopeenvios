import React from "react";
import { Chart } from "react-google-charts";
import Box from "../../../elements/Box";

interface MexicoSalesMapProps {
  data: any[];
}

const MexicoSalesMap: React.FC<MexicoSalesMapProps> = ({ data }) => {
  return (
    <>
    <div id='heat_map'>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          region: 'MX',
          resolution: 'provinces',
          colorAxis: { 
            colors: ['#E6F0FF', '#B3D1FF', '#80B3FF', '#4D94FF', '#1A75FF', '#0052CC', '#003580'], // Blue shades from light to dark
            minValue: 0
          },
          backgroundColor: '#fff',
          defaultColor: '#f5f5f5',
          legend: {
            textStyle: { color: '#333', fontSize: 12 }
          },
          datalessRegionColor: '#F5F5F5',
          tooltip: { showColorCode: true }
        }}
      />
    </div>
    </>
  );
};

export default MexicoSalesMap;
