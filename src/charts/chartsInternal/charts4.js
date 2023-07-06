import React, {useState, useEffect} from 'react'
import getCharts from '../../api/getCharts'
import { Bar } from 'react-chartjs-2';

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

const ChartsInternal4 = () => {
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
            label: 'Omset',
            data: dataChart,
            backgroundColor: "#619A3F",
            type: "bar"
          },
          {
            label: 'Target Omset',
            data: dataChart,
            backgroundColor: "#9C9C9C",
            borderColor: "#9C9C9C",
            type: "line",
          },
          {
            label: 'Daily Average Omset',
            data: dataChart,
            backgroundColor: "#FF9E1D",
            borderColor: "#FF9E1D",
            type: "line",
          },
        ],
      };
  return (
    <div className='card'>
      <div className='card-body d-flex flex-column align-items-center'>
        <div className='container form-group text-center'>
          <h3>Pencapaian Akuisisi Internal By Omset</h3>
          <i className='nama'>*Sales April menggunakan proyeksi total sales akhir bulan</i>
        </div>
        
        <div className='container form-group row'>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default ChartsInternal4
