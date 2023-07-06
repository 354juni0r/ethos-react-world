import React from 'react';
import Charts from '../charts/Charts';
import Charts2 from '../charts/Charts2';
import Charts3 from '../charts/Charts3';
import Charts4 from '../charts/Charts4';
import Charts5 from '../charts/Charts5';
import Select from 'react-select'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Charts6 from '../charts/Charts6';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const Home = () => {
  const selectOptions = [
    { value: 'mkahfi', label: 'M. Kahfi' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-header">
                <h1 className="m-0 text-center nama">Ethos Today</h1>
                <div className="row">
                  <div className="col-md-6">
                    <img src="logo/melompat.png" className="card-img" alt="User Image" />
                  </div>
                  <div className="col-md-6">
                    <img src="logo/Mask group.png" className="card-img" alt="User Image" />
                    <img src="logo/Group 14045.png" className="card-img" alt="User Image" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className='card-header'>
                <div className='row'>
                  <div className='col-md-6'>
                    <h4 className='m-0 nama'>Report Sales Monthly</h4>
                    <p className='nama'>Last Update: <b>Saturday, 29 April 2023</b></p>
                  </div>
                  <div className='col-md-6'>
                  <ul className='nav' role='tablist' id="custom-tabs-four-tab">
                    <li><button className='btn bg-light btn-xs' id="custom-tabs-four-home-tab" data-toggle="pill" href="#custom-tabs-four-home" role="tab" aria-controls="custom-tabs-four-home" aria-selected="true"><span className='nama'>Total</span></button></li>
                    <li><button className='btn bg-light btn-xs' id="custom-tabs-four-profile-tab" data-toggle="pill" href="#custom-tabs-four-profile" role="tab" aria-controls="custom-tabs-four-profile" aria-selected="false"><span className='nama'>Internal</span></button></li>
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

              <div className='card-body'>
                <div className='tab-content' id="custom-tabs-four-tabContent">
                  <div id="custom-tabs-four-home" role="tabpanel" aria-labelledby="custom-tabs-four-home-tab">
                    <Charts />
                    <Charts2 />
                    <Charts3 />
                    <Charts4 />
                    <Charts5 />
                    <Charts6 />
                  </div>

                  <div id="custom-tabs-four-profile" role="tabpanel" aria-labelledby="custom-tabs-four-profile-tab">
                    <Charts />
                    <Charts2 />
                    <Charts3 />
                    <Charts4 />
                    <Charts5 />
                    <Charts6 />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section >
        {/* /.content */}
      </div >
    </>
  )
}
