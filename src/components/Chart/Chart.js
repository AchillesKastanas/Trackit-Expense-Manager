import React from "react";
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    return <div className="chart">
        {props.dataPoints.map(datapoint => 
            <ChartBar 
                key={dataPoints.label} 
                value={datapoint.value} 
                maxValue={null} 
                label={datapoint.label}
            />
        )}
    </div>
}

export default Chart;