import React, {useState, useEffect} from 'react'
import getCharts from '../../src/api/getCharts'
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
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}

export default Charts
