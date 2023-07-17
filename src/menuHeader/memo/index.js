import React from "react";
import LinkMemo from "./componentsMemo/linkMemo";
import { Outlet } from "react-router-dom";
const Index = () => {
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
              <LinkMemo />
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
