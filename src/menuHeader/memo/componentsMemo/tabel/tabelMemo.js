import React from "react";
import DataMemo from "../../dataMemo";
import { useEffect } from "react";
import { useState } from "react";
export default function TabelMemo(props) {
  const [DataMemoList, setDataMemoList] = useState([]);
  useEffect(() => {
    if (!props.status) {
      setDataMemoList(DataMemo);
    } else {
      const dataFilter = DataMemo?.filter(
        (item) => item.status == props.status
      );
      setDataMemoList(dataFilter);
    }
  }, []);
  return (
    <>
      <div className="table-responsive mailbox-messages">
        <table className="table table-hover table-striped" name={props.name}>
          <tbody>
            {props.name == "sampah" && (
              <tr key="">
                <td
                  colSpan={4}
                  className="mailbox-name text-sm"
                  style={{ backgroundColor: "#D8E6CF" }}
                >
                  <p>
                    Memo yang ada di sampah selama lebih dari 30 hari akan di
                    hapus secara otomatis
                  </p>
                </td>
                <td
                  colSpan={2}
                  className="mailbox-name px-1 w-25"
                  style={{ backgroundColor: "#D8E6CF" }}
                >
                  <button className="btn btn-block btn-primary btn-xs">
                    <i className="fa fa-trash-alt" /> kosongkan Sampah
                  </button>
                </td>
              </tr>
            )}
            {DataMemoList.map((DataMemo, idx) => (
              <tr key={idx} onClick={props.onClickRow}>
                <td>
                  <div className="icheck-primary">
                    <input type="checkbox" defaultValue id={props.name} />
                    <label htmlFor={props.name} />
                  </div>
                </td>
                <td className="mailbox-star">
                  <a href="#">
                    <i
                      className={`fas fa-star ${
                        props.name == "berbintang" ? "text-warning" : ""
                      }`}
                    />
                  </a>
                </td>
                {props.name == "berbintang" || props.name == "pengajuan" ? (
                  <td className="mailbox-star">
                    {DataMemo.status === "1" ? (
                      <button
                        id={DataMemoList.id}
                        className="btn btn-success btn-block mb-3"
                        onClick={props.onClickDisetujui}
                      >
                        Disetujui
                      </button>
                    ) : DataMemo.status === "2" ? (
                      <button
                        className="btn btn-danger btn-block mb-3"
                        onClick={props.onClickRevisi}
                      >
                        Revisi
                      </button>
                    ) : DataMemo.status === "3" ? (
                      <button
                        className="btn btn-warning btn-block mb-3"
                        onClick={props.onClickPending}
                      >
                        Pending
                      </button>
                    ) : (
                      <button
                        className="btn btn-light btn-block mb-3"
                        onClick={props.onClickDraft}
                      >
                        Draft
                      </button>
                    )}
                  </td>
                ) : (
                  ""
                )}
                <td
                  className={`mailbox-name ${
                    props.name == "terkirim" ? "w-25" : ""
                  }`}
                >
                  <a href="#" className="nama">
                    {props.name == "terkirim" ? "Kepada : " : ""}
                    {DataMemo.nama}
                  </a>
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
      </div>
    </>
  );
}
