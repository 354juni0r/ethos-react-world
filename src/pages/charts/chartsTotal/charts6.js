import React, {useState, useEffect} from 'react'
import getCharts from '../../../api/getCharts'
import { Bar } from 'react-chartjs-2';
import Loading from '../loading';

const options = {
    responsive: true,
    staccked: true,
    plugins: {
      legend: {
        position: 'right',
        display: false,
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

const Charts6= () => {
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
            <h3>Sales Total (Internal, Partner, Offline, Distributor)</h3>
            <i className='nama'>*Sales Maret (Internal & Partner) menggunakan perkiraan omset sampai akhir bulan, Distributor & Offline data real</i>
        </div>

        <div className='container form-group '>
            <div className=''>
              {isLoading && <Loading />}
              <Bar options={options} data={data} />
            </div>
            <div className=' text-xs'>
                <table className="table table-bordered table-sm">
                <thead className='bg-success'>
                    <tr>
                    <th></th>
                    <th>Jan-12</th>
                    <th>Feb-12</th>
                    <th>Mar-12</th>
                    <th>Apr-12</th>
                    <th>Mei-12</th>
                    <th>Jun-12</th>
                    <th>Jul-12</th>
                    <th>Agu-12</th>
                    <th>Sep-12</th>
                    <th>Okt-12</th>
                    </tr>
                </thead>
                {dataChart && dataChart.length > 0 &&
                <tbody>
                    <tr>
                    <td><button className="btn btn-xs" style={{backgroundColor: "#619A3F",}}/> ETA01</td>
                    {dataChart.map((menuItem,idx) =>(
                      <td key={idx}>
                        {menuItem.y}
                      </td>
                    ))}
                    </tr>
                    <tr>
                    <td><button className="btn btn-xs" style={{backgroundColor: "#FF9E1D",}}/> LIN01</td>
                    {dataChart.map((menuItem,idx) =>(
                      <td key={idx}>
                        {menuItem.y}
                      </td>
                    ))}
                    </tr>
                    <tr>
                    <td><button className="btn btn-xs" style={{backgroundColor: "#D9E021",}}/> FRE01</td>
                    {dataChart.map((menuItem,idx) =>(
                      <td key={idx}>
                        {menuItem.y}
                      </td>
                    ))}
                    </tr>
                    <tr>
                    <td><button className="btn btn-xs" style={{backgroundColor: "#06AAFF",}}/> NUT01</td>
                    {dataChart.map((menuItem,idx) =>(
                      <td key={idx}>
                        {menuItem.y}
                      </td>
                    ))}
                    </tr>
                </tbody>
                }
                </table>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Charts6
