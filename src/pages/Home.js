import React from 'react';
import Charts from '../charts/chartsTotal/charts';
import Charts2 from '../charts/chartsTotal/charts2';
import Charts3 from '../charts/chartsTotal/charts3';
import Charts4 from '../charts/chartsTotal/charts4';
import Charts5 from '../charts/chartsTotal/charts5';
import Charts6 from '../charts/chartsTotal/charts6';
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
import ChartsInternal from '../charts/chartsInternal/charts';
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
                    <li className='nav-item'><button className='btn bg-light btn-xs active' id="custom-tabs-four-total-tab" data-toggle="pill" href="#custom-tabs-four-total" role="tab" aria-controls="custom-tabs-four-total" aria-selected="true"><span className='nama'>Total</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-internal-tab" data-toggle="pill" href="#custom-tabs-four-internal" role="tab" aria-controls="custom-tabs-four-internal" aria-selected="false"><span className='nama'>Internal</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-partner-tab" data-toggle="pill" href="#custom-tabs-four-partner" role="tab" aria-controls="custom-tabs-four-partner" aria-selected="false"><span className='nama'>Partner</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-offline-tab" data-toggle="pill" href="#custom-tabs-four-offline" role="tab" aria-controls="custom-tabs-four-offline" aria-selected="false"><span className='nama'>Offline</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-costiklan-tab" data-toggle="pill" href="#custom-tabs-four-costiklan" role="tab" aria-controls="custom-tabs-four-costiklan" aria-selected="false"><span className='nama'>Cost Iklan</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-manpower-tab" data-toggle="pill" href="#custom-tabs-four-manpower" role="tab" aria-controls="custom-tabs-four-manpower" aria-selected="false"><span className='nama'>Manpower</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-stock-tab" data-toggle="pill" href="#custom-tabs-four-stock" role="tab" aria-controls="custom-tabs-four-stock" aria-selected="false"><span className='nama'>Stock</span></button></li>
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
                  <div className="tab-pane fade show active" id="custom-tabs-four-total" role="tabpanel" aria-labelledby="custom-tabs-four-total-tab">
                    <Charts />
                    <Charts2 />
                    <Charts3 />
                    <Charts4 />
                    <Charts5 />
                    <Charts6 />
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-internal" role="tabpanel" aria-labelledby="custom-tabs-four-internal-tab">
                    <ChartsInternal />
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-partner" role="tabpanel" aria-labelledby="custom-tabs-four-partner-tab">
                    Partner
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-offline" role="tabpanel" aria-labelledby="custom-tabs-four-offline-tab">
                    Offline
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-costiklan" role="tabpanel" aria-labelledby="custom-tabs-four-costiklan-tab">
                    Cost Iklan
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-manpower" role="tabpanel" aria-labelledby="custom-tabs-four-manpower-tab">
                    Manpower
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-stock" role="tabpanel" aria-labelledby="custom-tabs-four-stock-tab">
                    Stock
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
