import React from "react";
import CardMemo from "./cardMemo";

export default function TambahMemo(props) {
  return (
    <>
      <CardMemo
        title={
          <>
            <i
              className="fas fa-arrow-left mr-2 nama"
              onClick={props.onClick}
            />
            <i className="fas fa-envelope-open nama"> Memo Baru</i>
          </>
        }
        body={
          <>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <select className="form-control">
                    <option value="" key="">
                      Jenis Memo
                    </option>
                  </select>
                  {/* <input className="form-control" placeholder="To:" /> */}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="No. Dokumen:"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Subject:"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="No. Revisi:"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kepada:"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CC:"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Perihal:"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Tgl Memo:"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="No. Memo:"
                  />
                </div>
              </div>
            </div>
            <div className="card card-light">
              <div className="card-header">
                <h3 className="card-title nama">Isi Memo</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <textarea className="form-control" style={{ height: 300 }} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="btn btn-primary btn-file">
                <i className="fas fa-paperclip" /> Attachment
                <input type="file" name="attachment" />
              </div>
              <p className="help-block">Max. 32MB</p>
            </div>
          </>
        }
        footer={
          <>
            <div className="float-right">
              <button type="button" className="btn btn-default">
                <i className="fas fa-pencil-alt" /> Draft
              </button>
              <button type="submit" className="btn btn-success">
                <i className="far fa-envelope" /> Ajukan
              </button>
            </div>
          </>
        }
      />
    </>
  );
}
