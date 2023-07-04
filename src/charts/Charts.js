import React, {useState, useEffect} from 'react'
import getCharts from '../api/getCharts'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Target Pencapaian Total Revenue Online Sales',
      },
    },
  };

//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  

const Charts = () => {
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
        type : "bar",
        datasets: [
          {
            label: 'Internal',
            data: dataChart,
            backgroundColor: "#619A3F",
          },
          {
            label: 'Partner',
            data: dataChart,
            backgroundColor: "#FF9E1D",
          },
        ],
      };
  return (
    <div className='card'>
      <div className='card-header'>
        <div className=''>
          <div>
            <h4 className='m-0 nama'>Report Sales Monthly</h4>
            <p className='nama'>Last Update: <b>Saturday, 29 April 2023</b></p>
          </div>
          <ul>
            <li><button>Total</button></li>
          </ul>
        </div>
      </div>
      <div className='card-body'>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}

export default Charts
