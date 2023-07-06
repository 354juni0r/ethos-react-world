import React, {useState, useEffect} from 'react'
import getCharts from '../api/getCharts'
import Select from 'react-select'
import { Pie } from 'react-chartjs-2';

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

const Charts5 = () => {
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
        labels:[
            'ETA01',
            'LIN01',
            'FRE01',
            'NUT01',
            'WEH01',
            'GIZ01',
            'ZYM01',
            'BIO02',
            'RUB01',
            'VIS01',
        ],
        datasets: [
          {
            data: dataChart ? dataChart.map((data)=>{return data.y}) : null,
            backgroundColor: [
                "#619A3F",
                "#FF9E1D",
                "#D9E021",
                "#06AAFF",
                "#FB9A99",
                "#E31A1C",
                "#FDBF6F",
                "#FF7F00",
                "#CAB2D6",
                "#6A3D9A",
            ],
          },
        ],
      };

      const selectOptions = [
        { value: 'mkahfi', label: 'M. Kahfi' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div className="card" style={{width: '30rem'}}>
      <div className='card-body d-flex flex-column align-items-center'>
        <div className='container form-group text-center'>
            <h3>Persentase Kontribusi Sales Per SKU Berdasarkan Quantity</h3>
        </div>
        
        <div className='container row form-group'>
            <div className='col-md-12'>
                <h6 className='nama'>JK1</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
            <div className='col-md-12'>
                <h6 className='nama'>Bulan</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
        </div>

        <Pie options={options} data={data} />
      </div>
    </div>
  )
}

export default Charts5
