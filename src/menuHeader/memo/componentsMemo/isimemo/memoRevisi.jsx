import React from "react";
import CardMemo from "./cardMemo";
import Select from "react-select";
export default function MemoRevisi(props) {
  const optionsKomunikasi = [
    { value: "PIC", label: "PIC" },
    { value: "Editor", label: "Editor" },
    { value: "Pelihat", label: "Pelihat" },
    { value: "Hapus Member", label: "Hapus Member" },
  ];
  return (
    <>
      <CardMemo
        title={
          <>
            <i className="fas fa-arrow-left mr-2" onClick={props.onClick} />
            <i className="far fa-comments" /> Revisi Memo
          </>
        }
        tools={
          <>
            <span className="badge bg-danger">revisi</span>
          </>
        }
        body={
          <>
            <p className="nama">Catatan Revisi</p>
            <p className="border border-2 p-2 rounded">
              Produk Randon adalah inovasi terbaru dalam industri teknologi,
              yang dirancang untuk memenuhi kebutuhan dan keinginan konsumen
              modern. Dengan desain yang elegan dan fitur-fitur canggih, Randon
              menawarkan pengalaman yang luar biasa kepada pengguna.
            </p>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <Select
                  name="Komunikasi"
                  placeholder="Komunikasi"
                  options={optionsKomunikasi}
                  className="basic-multi-select input-xs"
                  classNamePrefix="select"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="FM-01-0"
                />
              </div>
              <div className="col-md-3">
                <input type="date" className="form-control form-control" />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="0"
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
