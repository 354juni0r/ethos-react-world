import React, {useState, useEffect} from 'react'
import getCharts from '../../../api/getCharts'
import { Bar } from 'react-chartjs-2';

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

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
        datasets: [
          {
            label: 'Target',
            data: dataChart,
            backgroundColor: "#619A3F",
            type: "bar"
          },
          {
            label: 'Omset',
            data: dataChart,
            backgroundColor: "#FF9E1D",
            type: "bar"
          },
          {
            label: 'Kumulatif Target',
            data: dataChart,
            backgroundColor: "#BABABA",
            borderColor: "#BABABA",
            type: "line",
          },
          {
            label: 'Kumulatif Omset',
            data: dataChart,
            backgroundColor: "#FFD59D",
            borderColor: "#FFD59D",
            type: "line",
          },
          {
            label: 'Selisih Kumulatif Target dan Omset',
            data: dataChart,
            backgroundColor: "#B0CD9F",
            borderColor: "#B0CD9F",
            type: "line",
          },
        ],
      };
  return (
    <div className='card'>
      <div className='card-body d-flex flex-column align-items-center'>
        <div className='container form-group text-center'>
          <h3>Target Pencapaian Total Revenue Online Sales</h3>
          <i className='nama'>*Sales April menggunakan proyeksi total sales akhir bulan</i>
        </div>
        
        <div className='container form-group row'>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default Charts
