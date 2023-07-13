import React from "react";

export default function ImageIsiMemo() {
  return (
    <>
      <div className="card-footer bg-white">
        <ul className="mailbox-attachments d-flex align-items-stretch clearfix">
          <li>
            <span className="mailbox-attachment-icon">
              <i className="far fa-file-pdf"></i>
            </span>
            <div className="mailbox-attachment-info">
              <a href="#" className="mailbox-attachment-name">
                <i className="fas fa-paperclip"></i> Sep2014-report.pdf
              </a>
              <span className="mailbox-attachment-size clearfix mt-1">
                <span>1,245 KB</span>
                <a href="#" className="btn btn-default btn-sm float-right">
                  <i className="fas fa-cloud-download-alt"></i>
                </a>
              </span>
            </div>
          </li>
          <li>
            <span className="mailbox-attachment-icon">
              <i className="far fa-file-word"></i>
            </span>
            <div className="mailbox-attachment-info">
              <a href="#" className="mailbox-attachment-name">
                <i className="fas fa-paperclip"></i> App Description.docx
              </a>
              <span className="mailbox-attachment-size clearfix mt-1">
                <span>1,245 KB</span>
                <a href="#" className="btn btn-default btn-sm float-right">
                  <i className="fas fa-cloud-download-alt"></i>
                </a>
              </span>
            </div>
          </li>
          <li>
            <span className="mailbox-attachment-icon has-img">
              <img src="../../dist/img/photo1.png" alt="Attachment" />
            </span>
            <div className="mailbox-attachment-info">
              <a href="#" className="mailbox-attachment-name">
                <i className="fas fa-camera"></i> photo1.png
              </a>
              <span className="mailbox-attachment-size clearfix mt-1">
                <span>2.67 MB</span>
                <a href="#" className="btn btn-default btn-sm float-right">
                  <i className="fas fa-cloud-download-alt"></i>
                </a>
              </span>
            </div>
          </li>
          <li>
            <span className="mailbox-attachment-icon has-img">
              <img src="../../dist/img/photo2.png" alt="Attachment" />
            </span>
            <div className="mailbox-attachment-info">
              <a href="#" className="mailbox-attachment-name">
                <i className="fas fa-camera"></i> photo2.png
              </a>
              <span className="mailbox-attachment-size clearfix mt-1">
                <span>1.9 MB</span>
                <a href="#" className="btn btn-default btn-sm float-right">
                  <i className="fas fa-cloud-download-alt"></i>
                </a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
