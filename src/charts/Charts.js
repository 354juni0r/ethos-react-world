import React, {useState, useEffect} from 'react'
import getCharts from '../api/getCharts'
import Select from 'react-select'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineController,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
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

      const selectOptions = [
        { value: 'mkahfi', label: 'M. Kahfi' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='row'>
          <div className='col-md-6'>
            <h4 className='m-0 nama'>Report Sales Monthly</h4>
            <p className='nama'>Last Update: <b>Saturday, 29 April 2023</b></p>
          </div>
          <div className='col-md-6'>
          <ul className='nav'>
            <li><button className='btn bg-light btn-xs'><span className='nama'>Total</span></button></li>
            <li><button className='btn bg-light btn-xs'><span className='nama'>Internal</span></button></li>
            <li><button className='btn bg-light btn-xs'><span className='nama'>Partner</span></button></li>
            <li><button className='btn bg-light btn-xs'><span className='nama'>Offline</span></button></li>
            <li><button className='btn bg-light btn-xs'><span className='nama'>Cost Iklan</span></button></li>
            <li><button className='btn bg-light btn-xs'><span className='nama'>Manpower</span></button></li>
            <li><button className='btn bg-light btn-xs'><span className='nama'>Stock</span></button></li>
          </ul>
          <div className=''>
          <Select 
          className='bg-light xs' 
          options={selectOptions} placeholder="Kepada:" 
          name="colors"
          classNamePrefix="select"  />
          </div>
          </div>
        </div>
        <div className='form-group'>
          <div className='row'>
            <div className='col-md-3'>
              <div className="card card-success">
                <div className="card-header">
                  <p className="card-title">Omset Sampai Last Update</p>
                </div>
                <div className="card-body">
                  The body of the card
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="card card-success">
                <div className="card-header">
                  <p className="card-title">Perkiraan Omset Akhir Bulan</p>
                </div>
                <div className="card-body">
                  The body of the card
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="card card-success">
                <div className="card-header">
                  <p className="card-title">Selisih Kumulatif Target & Omset</p>
                </div>
                <div className="card-body">
                  The body of the card
                </div>
              </div>
            </div>
            <div className='col-md-3'>            
              <div className="card card-success">
                <div className="card-header">
                  <p className="card-title">Kekurangan Target</p>
                </div>
                <div className="card-body">
                  The body of the card
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card-body d-flex flex-column align-items-center'>
        <h3>Target Pencapaian Total Revenue Online Sales</h3>
        <i className='nama'>*Sales April menggunakan proyeksi total sales akhir bulan</i>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}

export default Charts
