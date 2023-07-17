import React, { useState } from "react";
import BoxControl from "./boxControl";
import TabelMemo from "./tabel/tabelMemo";
import MemoIsi from "./isimemo/memoIsi";
import MemoRevisi from "./isimemo/memoRevisi";
import DrafMemo from "./isimemo/drafMemo";
export default function MemoBerbintang() {
  const [showState, setShowState] = useState({
    showBerbintang: true,
    showMemoRevisiBerbintang: false,
    showMemoDraftBerbintang: false,
    showMemoDisetujuiBerbintang: false,
    showMemoPendingBerbintang: false,
  });

  const toggleState = (stateKey) => {
    setShowState((nameState) => ({
      ...nameState,
      showBerbintang: false,
      showMemoDisetujuiBerbintang: false,
      showMemoPendingBerbintang: false,
      showMemoRevisiBerbintang: false,
      showMemoDraftBerbintang: false,
      [stateKey]: true,
    }));
  };
  const toggleBerbintang = () => toggleState("showBerbintang");
  const toggleOpenMemoDisetujuiBerbintang = () =>
    toggleState("showMemoDisetujuiBerbintang");
  const toggleOpenMemoPendingBerbintang = () =>
    toggleState("showMemoPendingBerbintang");
  const toggleOpenMemoRevisiBerbintang = () =>
    toggleState("showMemoRevisiBerbintang");
  const toggleOpenMemoDraftBerbintang = () =>
    toggleState("showMemoDraftBerbintang");

  return (
    <>
      {showState.showBerbintang && (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-star" />
              Berbintang
            </h3>

            <div className="card-tools">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Mail"
                />
                <div className="input-group-append">
                  <div className="btn btn-primary">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <BoxControl />
            <TabelMemo
              name={"berbintang"}
              onClickDisetujui={toggleOpenMemoDisetujuiBerbintang}
              onClickPending={toggleOpenMemoPendingBerbintang}
              onClickRevisi={toggleOpenMemoRevisiBerbintang}
              onClickDraft={toggleOpenMemoDraftBerbintang}
            />
          </div>
          <div className="card-footer p-0">
            <BoxControl />
          </div>
        </div>
      )}

      {showState.showMemoDisetujuiBerbintang && (
        <MemoIsi
          onClick={toggleBerbintang}
          textMemo={"disetujui"}
          name={"berbintang"}
          button1={"print"}
          button2={"kirim"}
        />
      )}
      {showState.showMemoPendingBerbintang && (
        <MemoIsi
          onClick={toggleBerbintang}
          textMemo={"pending"}
          name={"berbintang"}
          button1={"print"}
        />
      )}
      {showState.showMemoRevisiBerbintang && (
        <MemoRevisi onClick={toggleBerbintang} name={"berbintang"} />
      )}
      {showState.showMemoDraftBerbintang && (
        <DrafMemo onClick={toggleBerbintang} name={"berbintang"} />
      )}
    </>
  );
}
