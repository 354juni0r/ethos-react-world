import React from "react";
import HeaderTabelPengajuan from "./tabel/headerTabelPengajuan";
import BoxControl from "./boxControl";
import TabelMemo from "./tabel/tabelMemo";

export default function MemoPengajuan() {
  return (
    <>
      <div className="card card-outline card-tabs">
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
              <TabelMemo id={"pengajuan"} />
            </div>
            <div
              className="tab-pane fade"
              id="custom-tabs-one-semua"
              role="tabpanel"
              aria-labelledby="custom-tabs-one-semua-tab"
            >
              <TabelMemo id={"pengajuan"} />
            </div>
            <div
              className="tab-pane fade"
              id="custom-tabs-one-draft"
              role="tabpanel"
              aria-labelledby="custom-tabs-one-draft-tab"
            >
              <TabelMemo id={"pengajuan"} status={"4"} />
            </div>
            <div
              className="tab-pane fade"
              id="custom-tabs-one-pending"
              role="tabpanel"
              aria-labelledby="custom-tabs-one-pending-tab"
            >
              <TabelMemo id={"pengajuan"} status={"3"} />
            </div>
            <div
              className="tab-pane fade"
              id="custom-tabs-one-revisi"
              role="tabpanel"
              aria-labelledby="custom-tabs-one-revisi-tab"
            >
              <TabelMemo id={"pengajuan"} status={"2"} />
            </div>
            <div
              className="tab-pane fade"
              id="custom-tabs-one-disetujui"
              role="tabpanel"
              aria-labelledby="custom-tabs-one-disetujui-tab"
            >
              <TabelMemo id={"pengajuan"} status={"1"} />
            </div>
          </div>
        </div>
        {/* /.card-body */}
        <div className="card-footer p-0">
          <BoxControl />
        </div>
      </div>
    </>
  );
}
