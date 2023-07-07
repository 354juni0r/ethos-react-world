import React, {useState, useEffect} from 'react'
import getCharts from '../../../api/getCharts'
import { Bar } from 'react-chartjs-2';


const options = {
    responsive: true,
    staccked: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
  };

const Charts2 = () => {
    const [dataChart, setChart] = useState(null);
    useEffect(() => {
        if (sessionStorage.getItem("chart")) {
            // Restore the contents of the text field
            const data = JSON.parse(sessionStorage.getItem("chart"));
            setChart(data)
          }else{
            getCharts().then((data) => {
                setChart(data)
                // Save data to sessionStorage
                sessionStorage.setItem("chart", JSON.stringify(data));
              });
          }
        
      }, []);

      const data = {
        datasets: [
          {
            label: 'Internal',
            data: dataChart,
            backgroundColor: "#619A3F",
            type: "bar"
          },
          {
            label: 'Partner',
            data: dataChart,
            backgroundColor: "#FF9E1D",
            type: "bar"
          },
          {
            label: 'Target',
            data: dataChart ? dataChart.map((data)=>{return{x:data.x,y:data.y * 2}}) : null,
            backgroundColor: "#BABABA",
            borderColor: "#BABABA",
            type: "line",
          },
        ],
      };

      const selectOptions = [
        { value: 'mkahfi', label: 'M. Kahfi' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div className='card'>
      <div className='card-body d-flex flex-column align-items-center'>
        <div className='container form-group text-center'>
          <h3>Revenue Online Sales Internal vs Partner</h3>
          <i className='nama'>*Sales April menggunakan proyeksi total sales akhir bulan</i>
        </div>

        <div className='container form-group row'>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default Charts2
