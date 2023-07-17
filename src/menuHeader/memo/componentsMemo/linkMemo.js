import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function LinkMemo() {
  return (
    <>
      <Link to="/memo/buatMemo" className="btn btn-primary btn-block mb-3">
        Buat Memo
      </Link>
      <div className="card">
        <div className="card-header-green p-1">
          {/* <i className="fas fa-inbox" /> Pengajuan */}
          <ul className="nav nav-pills2 flex-column">
            <li className="nav-item active">
              <a href="/memo/pengajuan" className="nav-link">
                <i className="fas fa-inbox" /> Pengajuan
                <span className="badge bg-primary float-right">12</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body p-0">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a href="/memo/berbintang" className="nav-link">
                <i className="fa fa-star" style={{ color: "#619A3F" }} />
                Berbintang
              </a>
            </li>
            <li className="nav-item">
              <a href="/memo/terkirim" className="nav-link">
                <i className="fa fa-paper-plane" style={{ color: "#619A3F" }} />{" "}
                Terkirim
              </a>
            </li>
            <li className="nav-item">
              <a href="/memo/arsip" className="nav-link">
                <i className="far fa-file-alt" /> Arsip
              </a>
            </li>
            <li className="nav-item">
              <a href="/memo/sampah" className="nav-link">
                <i className="fa fa-trash-alt" /> Sampah
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
