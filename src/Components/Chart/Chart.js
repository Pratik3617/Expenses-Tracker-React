import React from 'react';
import "./Chart.css"
import ChartBar from "./ChartBar"
export default function Chart(props) {

  const dataPointsValues=props.dataPoints.map((dataPoint)=>{
    return dataPoint.value;                                   // convert dataPoints values from object to numbers
  });

  const Maximum = Math.max(...dataPointsValues)   // to pull out numbers in array

  return (
    <div className='chart'>
            {   props.dataPoints.map((dataPoint)=>{ return <ChartBar value={dataPoint.value} 
                maxValue={Maximum} label={dataPoint.label} key={dataPoint.label}/>})    }
    </div>
  );
}
