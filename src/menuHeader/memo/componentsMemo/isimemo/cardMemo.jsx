import React from "react";

export default function CardMemo(props) {
  return (
    <div>
      <div className="card" name={props.name}>
        <div className="card-header">
          <h3 className="card-title">{props.title}</h3>
          <div className="card-tools">{props.tools}</div>
        </div>
        <div className="card-body">{props.body}</div>
        <div className="card-footer">{props.footer}</div>
      </div>
    </div>
  );
}
