import React from 'react';
import Charts from '../charts/Charts';
import Charts2 from '../charts/Charts2';
import Charts3 from '../charts/Charts3';
import Charts4 from '../charts/Charts4';

export const Home = () => {
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
              <Charts />
              <Charts2 />
              <Charts3 />
              <Charts4 />
            </div>
          </div>
        </section >
        {/* /.content */}
      </div >
    </>
  )
}
