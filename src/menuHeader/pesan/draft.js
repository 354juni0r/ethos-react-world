import React from "react";
import { NavLink, Link } from "react-router-dom";
import DataMemo from "../memo/dataMemo";

const Draft = () => {
  return (
    <>
      <div className="col-md-9">
        <div className="card card-outline">
          <div className="card-header">
            <h3 class="card-title fas fa-file-alt"> Draft</h3>
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
                      {DataMemo.map((DataMemo, idx) => (
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
                      {DataMemo.map((DataMemo, idx) => (
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
    </>
  );
};

export default Draft;
