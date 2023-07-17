import React, { useState } from "react";
import HeaderTabelPengajuan from "./tabel/headerTabelPengajuan";
import BoxControl from "./boxControl";
import TabelMemo from "./tabel/tabelMemo";
import MemoIsi from "./isimemo/memoIsi";
import MemoRevisi from "./isimemo/memoRevisi";
import DrafMemo from "./isimemo/drafMemo";

export default function MemoPengajuan() {
  const [showState, setShowState] = useState({
    showPengajuan: true,
    showMemoDisetujui: false,
    showMemoPending: false,
    showMemoRevisi: false,
    showMemoDraft: false,
  });

  const toggleState = (stateKey) => {
    setShowState((nameState) => ({
      ...nameState,
      showPengajuan: false,
      showMemoDisetujui: false,
      showMemoPending: false,
      showMemoRevisi: false,
      showMemoDraft: false,
      [stateKey]: true,
    }));
  };
  const togglePengajuan = () => toggleState("showPengajuan");
  const toggleOpenMemoDisetujui = () => toggleState("showMemoDisetujui");
  const toggleOpenMemoPending = () => toggleState("showMemoPending");
  const toggleOpenMemoRevisi = () => toggleState("showMemoRevisi");
  const toggleOpenMemoDraft = () => toggleState("showMemoDraft");

  return (
    <>
      {showState.showPengajuan && (
        <div className="card card-success card-outline card-outline-tabs">
          <div className="card-header p-0 pt-1">
            <HeaderTabelPengajuan />
          </div>
          <div className="card-body">
            <div className="tab-content" id="custom-tabs-one-tabContent">
              <div
                className="tab-pane fade show active"
                id="custom-tabs-one-pengajuan"
                role="tabpanel"
                aria-labelledby="custom-tabs-one-pengajuan-tab"
              >
                <BoxControl />
                <TabelMemo
                  name={"pengajuan"}
                  onClickDisetujui={toggleOpenMemoDisetujui}
                  onClickPending={toggleOpenMemoPending}
                  onClickRevisi={toggleOpenMemoRevisi}
                  onClickDraft={toggleOpenMemoDraft}
                />
              </div>
              <div
                className="tab-pane fade"
                id="custom-tabs-one-draft"
                role="tabpanel"
                aria-labelledby="custom-tabs-one-draft-tab"
              >
                <BoxControl />
                <TabelMemo
                  name={"pengajuan"}
                  status={"4"}
                  onClickDraft={toggleOpenMemoDraft}
                />
              </div>
              <div
                className="tab-pane fade"
                id="custom-tabs-one-pending"
                role="tabpanel"
                aria-labelledby="custom-tabs-one-pending-tab"
              >
                <BoxControl />
                <TabelMemo
                  name={"pengajuan"}
                  status={"3"}
                  onClickPending={toggleOpenMemoPending}
                />
              </div>
              <div
                className="tab-pane fade"
                id="custom-tabs-one-revisi"
                role="tabpanel"
                aria-labelledby="custom-tabs-one-revisi-tab"
              >
                <BoxControl />
                <TabelMemo
                  name={"pengajuan"}
                  status={"2"}
                  onClickRevisi={toggleOpenMemoRevisi}
                />
              </div>
              <div
                className="tab-pane fade"
                id="custom-tabs-one-disetujui"
                role="tabpanel"
                aria-labelledby="custom-tabs-one-disetujui-tab"
              >
                <BoxControl />
                <TabelMemo
                  name={"pengajuan"}
                  status={"1"}
                  onClickDisetujui={toggleOpenMemoDisetujui}
                />
              </div>
            </div>
          </div>
          {/* /.card-body */}
          <div className="card-footer p-0">
            <BoxControl />
          </div>
        </div>
      )}
      {showState.showMemoDisetujui && (
        <MemoIsi
          onClick={togglePengajuan}
          textMemo={"disetujui"}
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
      {showState.showMemoRevisi && <MemoRevisi onClick={togglePengajuan} />}
      {showState.showMemoDraft && <DrafMemo onClick={togglePengajuan} />}
    </>
  );
}
