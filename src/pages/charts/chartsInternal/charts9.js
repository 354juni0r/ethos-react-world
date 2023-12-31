import React, {useState, useEffect} from 'react'
import getCharts from '../../../api/getCharts'
import Select from 'react-select'
import { Bar } from 'react-chartjs-2';
import Loading from '../loading';

const options = {
    responsive: true,
    staccked: true,
    plugins: {
      legend: {
        position: 'right',
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

const ChartsInternal9 = () => {
    const [dataChart, setChart] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true);
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
      setIsLoading(false)
      }, []);

      const data = {
        datasets: [
          {
            label: 'ETA01',
            data: dataChart,
            backgroundColor: "#619A3F",
            type: "bar"
          },
          {
            label: 'LIN01',
            data: dataChart,
            backgroundColor: "#FF9E1D",
            type: "bar"
          },
          {
            label: 'FRE01',
            data: dataChart,
            backgroundColor: "#D9E021",
            type: "bar"
          },
          {
            label: 'NUT01',
            data: dataChart,
            backgroundColor: "#06AAFF",
            type: "bar"
          },
          {
            label: 'WEH01',
            data: dataChart,
            backgroundColor: "#FB9A99",
            type: "bar"
          },
          {
            label: 'GIZ01',
            data: dataChart,
            backgroundColor: "#E31A1C",
            type: "bar"
          },
          {
            label: 'ZYM01',
            data: dataChart,
            backgroundColor: "#FDBF6F",
            type: "bar"
          },
          {
            label: 'BIO02',
            data: dataChart,
            backgroundColor: "#FF7F00",
            type: "bar"
          },
          {
            label: 'RUB01',
            data: dataChart,
            backgroundColor: "#CAB2D6",
            type: "bar"
          },
          {
            label: 'VIS01',
            data: dataChart,
            backgroundColor: "#6A3D9A",
            type: "bar"
          },
          {
            label: 'Lainnya',
            data: dataChart,
            backgroundColor: "#FFFF99",
            type: "bar"
          },
          {
            label: 'GEN01',
            data: dataChart,
            backgroundColor: "#B15928",
            type: "bar"
          },
          {
            label: 'BRI01',
            data: dataChart,
            backgroundColor: "#A6CEE3",
            type: "bar"
          },
          {
            label: 'KUT01',
            data: dataChart,
            backgroundColor: "#1F78B4",
            type: "bar"
          },
          {
            label: 'OPT01',
            data: dataChart,
            backgroundColor: "#C3DE9E",
            type: "bar"
          },
          {
            label: 'ROY03',
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
            <div className='col-md-2'></div>
            <div className='col-md-8 text-center'>
                <h3>Sales Internal By Omset SKU Per Channel</h3>
                <i className='nama'>*Belum dikurangi return, sales April menggunakan perkiraan sales akhir bulan</i>
            </div>
            <div className='col-md-2'>
                <select className="form-control">
                    <option>By Omset</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                </select>
            </div>
        </div>
        
        <div className='container row form-group'>
            <div className='col-md-6'>
                <h6 className='nama'>CHANNEL</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
            <div className='col-md-6'>
                <h6 className='nama'>SKU</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
        </div>

        <div className='container form-group row'>
            <div className='col-md-10 d-flex align-items-end'>
              {isLoading && <Loading />}
              <Bar options={options} data={data} />
            </div>
            <div className='col-md-2 text-xs'>
                <div className='col nama'>
                  <h6>Sales Bulan April</h6>
                  <p>Update: 29/04/2023</p>
                </div>
                <table className="table table-bordered table-sm">
                <thead className='bg-success'>
                    <tr>
                    <th>SKU</th>
                    <th>QTY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>ETA01</td>
                    <td>1600</td>
                    </tr>
                    <tr>
                    <td>LIN01</td>
                    <td>1500</td>
                    </tr>
                    <tr>
                    <td>FRE01</td>
                    <td>1400</td>
                    </tr>
                    <tr>
                    <td>NUT01</td>
                    <td>1300</td>
                    </tr>
                    <tr>
                    <td>WEH01</td>
                    <td>1200</td>
                    </tr>
                    <tr>
                    <td>GIZ01</td>
                    <td>1100</td>
                    </tr>
                    <tr>
                    <td>ZYM01</td>
                    <td>1000</td>
                    </tr>
                    <tr>
                    <td>BIO02</td>
                    <td>900</td>
                    </tr>
                    <tr>
                    <td>RUB01</td>
                    <td>800</td>
                    </tr>
                    <tr>
                    <td>VIS01</td>
                    <td>700</td>
                    </tr>
                    <tr>
                    <td>Lainnya</td>
                    <td>600</td>
                    </tr>
                    <tr>
                    <td>GEN01</td>
                    <td>500</td>
                    </tr>
                    <tr>
                    <td>BRI01</td>
                    <td>400</td>
                    </tr>
                    <tr>
                    <td>KUT01</td>
                    <td>300</td>
                    </tr>
                    <tr>
                    <td>OPT01</td>
                    <td>200</td>
                    </tr>
                    <tr>
                    <td>ROY03</td>
                    <td>100</td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>
      </div>
    </div>
  )
}

export default ChartsInternal9
