import React, {useState, useEffect} from 'react'
import getCharts from '../../api/getCharts'
import Select from 'react-select'
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

const ChartsInternal14 = () => {
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
            label: 'FB & GOOGLE',
            data: dataChart,
            backgroundColor: "#619A3F",
            type: "bar"
          },
          {
            label: 'RESELLER',
            data: dataChart,
            backgroundColor: "#FF9E1D",
            type: "bar"
          },
          {
            label: 'MP',
            data: dataChart,
            backgroundColor: "#D9E021",
            type: "bar"
          },
          {
            label: 'TIKTOK',
            data: dataChart,
            backgroundColor: "#06AAFF",
            type: "bar"
          },
          {
            label: 'DATA LAMA',
            data: dataChart,
            backgroundColor: "#87BD3D",
            type: "bar"
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
        <div className='container row form-group'>
            <div className='col-md-12 text-center'>
                <h3>Omset CRM Per Channel</h3>
                <i className='nama'>*Belum dikurangi return, sales bulan April menggunakan sales sampai tanggal update terakhir</i>
            </div>
        </div>

        <div className='container row form-group'>
            <div className='col-md-6'>
                <h6 className='nama'>CHANNEL AKUISISI 2</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
            <div className='col-md-6'>
                <h6 className='nama'>SKU 1</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
        </div>

        <div className='container row form-group'>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default ChartsInternal14
