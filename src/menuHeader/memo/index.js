import React from "react";
import LinkMemo from "./componentsMemo/linkMemo";
import MemoBerbintang from "./componentsMemo/memoBerbintang";
import { useState } from "react";
import MemoPengajuan from "./componentsMemo/memoPengajuan";
import MemoTerkirim from "./componentsMemo/memoTerkirim";
import MemoArsip from "./componentsMemo/memoArsip";
import MemoSampah from "./componentsMemo/memoSampah";
import MemoIsi from "./componentsMemo/isimemo/memoIsi";
import MemoRevisi from "./componentsMemo/isimemo/memoRevisi";
const Index = () => {
  const [showState, setShowState] = useState({
    showPengajuan: true,
    showBerbintang: false,
    showTerkirim: false,
    showArsip: false,
    showSampah: false,
    showMemoDisetujui: false,
    showMemoPending: false,
    showMemoRevisi: false,
  });

  const toggleState = (stateKey) => {
    setShowState((nameState) => ({
      ...nameState,
      showPengajuan: false,
      showBerbintang: false,
      showTerkirim: false,
      showArsip: false,
      showSampah: false,
      showMemoDisetujui: false,
      showMemoPending: false,
      showMemoRevisi: false,
      [stateKey]: true,
    }));
  };

  const togglePengajuan = () => toggleState("showPengajuan");
  const toggleBerbintang = () => toggleState("showBerbintang");
  const toggleTerkirim = () => toggleState("showTerkirim");
  const toggleArsip = () => toggleState("showArsip");
  const toggleSampah = () => toggleState("showSampah");
  const toggleOpenMemoDisetujui = (id) => toggleState("showMemoDisetujui");
  const toggleOpenMemoPending = () => toggleState("showMemoPending");
  const toggleOpenMemoRevisi = () => toggleState("showMemoRevisi");

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Memo</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <LinkMemo
                onClickPengajuan={togglePengajuan}
                onClickBerbintang={toggleBerbintang}
                onClickTerkirim={toggleTerkirim}
                onClickArsip={toggleArsip}
                onClickSampah={toggleSampah}
              />
            </div>
            <div className="col-md-9">
              {showState.showPengajuan && <MemoPengajuan />}

              {showState.showBerbintang && (
                <MemoBerbintang
                  onClickMemoDisetujui={toggleOpenMemoDisetujui}
                  onClickMemoPending={toggleOpenMemoPending}
                  onClickMemoRevisi={toggleOpenMemoRevisi}
                />
              )}
              {showState.showTerkirim && <MemoTerkirim />}
              {showState.showArsip && <MemoArsip />}
              {showState.showSampah && <MemoSampah />}
              {showState.showMemoDisetujui && (
                <MemoIsi onClick={toggleBerbintang} textMemo={"disetujui"} />
              )}
              {showState.showMemoPending && (
                <MemoIsi onClick={toggleBerbintang} textMemo={"pending"} />
              )}
              {showState.showMemoRevisi && (
                <MemoRevisi onClick={toggleBerbintang} />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
