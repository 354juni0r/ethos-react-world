import React, { useEffect, useState } from "react";
import { getDataPesan } from "../../api/apiPesan";
import CheckBox from "./componentsPesan/checkbox";
import { deletePesan } from "../../api/axios";
export default function HalamanPesan() {
  const [dataMessage, setDataMessage] = useState([]);
  useEffect(() => {
    if (sessionStorage.getItem("dataPesan")) {
      setDataMessage(JSON.parse(atob(sessionStorage.getItem("dataPesan"))));
    } else {
      getDataPesan().then((res) => {
        sessionStorage.setItem("dataPesan", btoa(JSON.stringify(res)));
        setDataMessage(res);
      });
    }
  }, []);
  // data fake db
  const [dataApi, setDataAPi] = useState([]);

  const [selectedIdPesan, setSelectedIdPesan] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleCheckboxChange = (id, isChecked) => {
    if (isChecked) {
      setSelectedIdPesan([...selectedIdPesan, id]);
    } else {
      setSelectedIdPesan(
        selectedIdPesan.filter((selectedId) => selectedId !== id)
      );
    }
  };
  const handleSelectAll = () => {
    const allIds = dataApi.map((item) => item.id);

    if (isAllChecked) {
      setSelectedIdPesan([]);
    } else {
      setSelectedIdPesan(allIds);
    }

    setIsAllChecked(!isAllChecked);
  };
  const HandlerdeletePesan = async () => {
    await deletePesan(selectedIdPesan[0]);
    setSelectedIdPesan([]);
  };
  // useEffect(() => {
  //   getDataMemo().then((res) => {
  //     setDataAPi(res);
  //   });
  // }, [selectedIdPesan]);

  const confirmDeletePesan = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pesan ini?")) {
      HandlerdeletePesan();
    }
  };
  console.log("first", dataMessage);
  return (
    <div className="col-md-9">
      <div className="card card-success card-outline card-outline-tabs">
        <div className="card-header p-0 pt-0">
          <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="custom-tabs-one-pesan-tab"
                data-toggle="pill"
                href="#custom-tabs-one-pesan"
                role="tab"
                aria-controls="custom-tabs-one-pesan"
                aria-selected="true"
              >
                {" "}
                <i className="fas fa-envelope" />
                Pesan
                <span className="badge bg-primary float-right">12</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="custom-tabs-one-memo-tab"
                data-toggle="pill"
                href="#custom-tabs-one-memo"
                role="tab"
                aria-controls="custom-tabs-one-memo"
                aria-selected="false"
              >
                {" "}
                <i className="fas fa-book" />
                Memo
                <span className="badge bg-primary float-right">5</span>
              </a>
            </li>
            <li className="col-5" />
            <div className="card-tools">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Mail"
                />
                <div className="input-group-append">
                  <div className="btn btn-primary">
                    <i className="fas fa-search" />
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>

        <div className="card-body">
          <div className="tab-content" id="custom-tabs-one-tabContent">
            <div
              className="tab-pane fade show active"
              id="custom-tabs-one-pesan"
              role="tabpanel"
              aria-labelledby="custom-tabs-one-pesan-tab"
            >
              {/* Pesan */}
              <div className="mailbox-controls">
                {/* Check all button */}
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="btn btn-default btn-sm checkbox-toggle"
                >
                  <i className="far fa-square" />
                </button>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-default btn-sm"
                    onClick={confirmDeletePesan}
                  >
                    <i className="far fa-trash-alt" />
                  </button>
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-reply" />
                  </button>
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-share" />
                  </button>
                </div>
                {/* /.btn-group */}
                <button type="button" className="btn btn-default btn-sm">
                  <i className="fas fa-sync-alt" />
                </button>
                <div className="float-right">
                  1-50/200
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-chevron-left" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                  {/* /.btn-group */}
                </div>
                {/* /.float-right */}
              </div>

              <div className="table-responsive mailbox-messages">
                <table className="table table-hover">
                  <tbody>
                    {dataMessage.map((DataMemo, idx) => (
                      <tr
                        key={idx}
                        className={`${
                          DataMemo.baca == "true" ? "bg-light" : ""
                        }`}
                      >
                        <td>
                          <div className="">
                            <CheckBox
                              id={DataMemo.id}
                              onChange={handleCheckboxChange}
                              checkedAll={isAllChecked}
                            />
                            <label htmlFor="check1" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a
                            href="#"
                            className={`${
                              DataMemo.baca !== "true" ? "nama" : ""
                            }`}
                          >
                            {DataMemo.nama}
                          </a>
                        </td>
                        <td className="mailbox-subject">
                          <b
                            className={`${
                              DataMemo.baca == "true" ? "text" : ""
                            }`}
                          >
                            {DataMemo.subjek}
                          </b>{" "}
                          - {DataMemo.isi}
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">{DataMemo.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* /.table */}
              </div>
              {/* End Pesan */}
            </div>

            <div
              className="tab-pane fade"
              id="custom-tabs-one-memo"
              role="tabpanel"
              aria-labelledby="custom-tabs-one-memo-tab"
            >
              {/* Memo */}
              <div className="mailbox-controls">
                {/* Check all button */}
                <button
                  type="button"
                  className="btn btn-default btn-sm checkbox-toggle"
                >
                  <i className="far fa-square" />
                </button>
                <div className="btn-group">
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="far fa-trash-alt" />
                  </button>
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-reply" />
                  </button>
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-share" />
                  </button>
                </div>
                {/* /.btn-group */}
                <button type="button" className="btn btn-default btn-sm">
                  <i className="fas fa-sync-alt" />
                </button>
                <div className="float-right">
                  1-50/200
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-chevron-left" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                  {/* /.btn-group */}
                </div>
                {/* /.float-right */}
              </div>

              <div className="table-responsive mailbox-messages">
                <table className="table table-hover table-striped">
                  <tbody>
                    {dataApi.map((DataMemo, idx) => (
                      <tr key={idx}>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check1" />
                            <label htmlFor="check1" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="#">{DataMemo.nama}</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>{DataMemo.nama}</b> - {DataMemo.isipesan}
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">{DataMemo.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* /.table */}
              </div>
              {/* End Memo */}
            </div>
          </div>
        </div>

        {/* Footer content card */}
        <div className="card-footer p-0">
          <div className="mailbox-controls">
            {/* Check all button */}
            <button
              type="button"
              className="btn btn-default btn-sm checkbox-toggle"
            >
              <i className="far fa-square" />
            </button>
            <div className="btn-group">
              <button type="button" className="btn btn-default btn-sm">
                <i className="far fa-trash-alt" />
              </button>
              <button type="button" className="btn btn-default btn-sm">
                <i className="fas fa-reply" />
              </button>
              <button type="button" className="btn btn-default btn-sm">
                <i className="fas fa-share" />
              </button>
            </div>
            {/* /.btn-group */}
            <button type="button" className="btn btn-default btn-sm">
              <i className="fas fa-sync-alt" />
            </button>
            <div className="float-right">
              1-50/200
              <div className="btn-group">
                <button type="button" className="btn btn-default btn-sm">
                  <i className="fas fa-chevron-left" />
                </button>
                <button type="button" className="btn btn-default btn-sm">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
              {/* /.btn-group */}
            </div>
            {/* /.float-right */}
          </div>
        </div>
        {/* End Footer content card */}
      </div>
    </div>
  );
}
