import React, { useState } from "react";
import BoxControl from "./boxControl";
import TabelMemo from "./tabel/tabelMemo";
import MemoIsi from "./isimemo/memoIsi";

export default function MemoTerkirim() {
  const [showState, setShowState] = useState({
    showTerkirim: true,
    showBacaMemoTerkirim: false,
  });

  const toggleState = (stateKey) => {
    setShowState((nameState) => ({
      ...nameState,
      showTerkirim: false,
      showBacaMemoTerkirim: false,
      [stateKey]: true,
    }));
  };

  const toggleTerkirim = () => toggleState("showTerkirim");
  const toggleshowBacaMemoTerkirim = () => toggleState("showBacaMemoTerkirim");

  return (
    <>
      {showState.showTerkirim && (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fa fa-paper-plane" />
              Terkirim
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
              name={"terkirim"}
              onClickRow={toggleshowBacaMemoTerkirim}
            />
          </div>
          <div className="card-footer p-0">
            <BoxControl />
          </div>
        </div>
      )}
      {showState.showBacaMemoTerkirim && (
        <MemoIsi
          onClick={toggleTerkirim}
          textMemo={"terkirim"}
          button1={"print"}
          name={"terkirim"}
        />
      )}
    </>
  );
}
