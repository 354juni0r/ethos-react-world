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
import DrafMemo from "./componentsMemo/isimemo/drafMemo";
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
    showMemoRevisiBerbintang: false,
    showMemoDraft: false,
    showMemoDraftBerbintang: false,
    showBacaMemoTerkirim: false,
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
      showMemoDisetujuiBerbintang: false,
      showMemoPending: false,
      showMemoPendingBerbintang: false,
      showMemoRevisi: false,
      showMemoRevisiBerbintang: false,
      showMemoDraft: false,
      showMemoDraftBerbintang: false,
      showBacaMemoTerkirim: false,
      [stateKey]: true,
    }));
  };

  const togglePengajuan = () => toggleState("showPengajuan");
  const toggleBerbintang = () => toggleState("showBerbintang");
  const toggleTerkirim = () => toggleState("showTerkirim");
  const toggleArsip = () => toggleState("showArsip");
  const toggleSampah = () => toggleState("showSampah");
  const toggleOpenMemoDisetujui = () => toggleState("showMemoDisetujui");
  const toggleOpenMemoDisetujuiBerbintang = () =>
    toggleState("showMemoDisetujuiBerbintang");
  const toggleOpenMemoPending = () => toggleState("showMemoPending");
  const toggleOpenMemoPendingBerbintang = () =>
    toggleState("showMemoPendingBerbintang");
  const toggleOpenMemoRevisi = () => toggleState("showMemoRevisi");
  const toggleOpenMemoRevisiBerbintang = () =>
    toggleState("showMemoRevisiBerbintang");
  const toggleOpenMemoDraft = () => toggleState("showMemoDraft");
  const toggleOpenMemoDraftBerbintang = () =>
    toggleState("showMemoDraftBerbintang");
  const toggleshowBacaMemoTerkirim = () => toggleState("showBacaMemoTerkirim");

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
              {showState.showPengajuan && (
                <MemoPengajuan
                  onClickMemoDisetujui={toggleOpenMemoDisetujui}
                  onClickMemoPending={toggleOpenMemoPending}
                  onClickMemoRevisi={toggleOpenMemoRevisi}
                  onClickMemoDraft={toggleOpenMemoDraft}
                />
              )}

              {showState.showBerbintang && (
                <MemoBerbintang
                  onClickMemoDisetujui={toggleOpenMemoDisetujuiBerbintang}
                  onClickMemoPending={toggleOpenMemoPendingBerbintang}
                  onClickMemoRevisi={toggleOpenMemoRevisiBerbintang}
                  onClickMemoDraft={toggleOpenMemoDraftBerbintang}
                />
              )}
              {showState.showTerkirim && (
                <MemoTerkirim onClickRow={toggleshowBacaMemoTerkirim} />
              )}
              {showState.showArsip && <MemoArsip />}
              {showState.showSampah && <MemoSampah />}
              {showState.showMemoDisetujui && (
                <MemoIsi
                  onClick={togglePengajuan}
                  textMemo={"disetujui"}
                  button1={"print"}
                  button2={"kirim"}
                />
              )}
              {showState.showMemoDisetujuiBerbintang && (
                <MemoIsi
                  onClick={togglePengajuan}
                  textMemo={"disetujui"}
                  name={"berbintang"}
                  button1={"print"}
                  button2={"kirim"}
                />
              )}
              {showState.showMemoPending && (
                <MemoIsi
                  onClick={togglePengajuan}
                  textMemo={"pending"}
                  button1={"print"}
                />
              )}
              {showState.showMemoPendingBerbintang && (
                <MemoIsi
                  onClick={togglePengajuan}
                  textMemo={"pending"}
                  name={"berbintang"}
                  button1={"print"}
                />
              )}
              {showState.showMemoRevisi && (
                <MemoRevisi onClick={togglePengajuan} />
              )}
              {showState.showMemoRevisiBerbintang && (
                <MemoRevisi onClick={togglePengajuan} name={"berbintang"} />
              )}
              {showState.showMemoDraft && (
                <DrafMemo onClick={togglePengajuan} />
              )}
              {showState.showMemoDraftBerbintang && (
                <DrafMemo onClick={togglePengajuan} name={"berbintang"} />
              )}
              {showState.showBacaMemoTerkirim && (
                <MemoIsi
                  onClick={togglePengajuan}
                  textMemo={"terkirim"}
                  button1={"print"}
                  name={"terkirim"}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
