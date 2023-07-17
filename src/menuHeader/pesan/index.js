import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
const Index = () => {
  return (
    <>
      <div className="content-wrapper">
        {/* Content Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="nama">Pesan</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* End Content Header */}

        {/* Main Content */}
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <Link
                to="/pesan/buatpesan"
                className="btn btn-primary btn-block mb-3"
              >
                Buat Pesan
              </Link>
              <div className="card">
                <div className="card-header-green p-1">
                  <ul className="nav nav-pills2 flex-column">
                    <li className="nav-item active">
                      <Link to="/pesan" className="nav-link">
                        <i className="fas fa-inbox" /> Kotak Masuk
                        <span className="badge bg-primary float-right">12</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="card-body p-0">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link to="/pesan/berbintang" className="nav-link">
                        <i className="fas fa-star" /> Berbintang
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pesan/terkirim" className="nav-link">
                        <i className="fas fa-paper-plane" /> Terkirim
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pesan/draft" className="nav-link">
                        <i className="fas fa-file-alt" /> Draft
                        <span className="badge bg-primary float-right">14</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pesan/arsip" className="nav-link">
                        <i className="fas fa-archive" /> Arsip
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pesan/sampah" className="nav-link">
                        <i className="fas fa-trash-alt" /> Sampah
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </section>
        {/* End Main Content */}
      </div>
    </>
  );
};

export default Index;
