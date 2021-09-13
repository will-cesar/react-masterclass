import React from "react";

import './Card.css';

export default props => {
  return (
    <div className="Card" style={{ borderColor: props.color || '#000' }}>
      <div className="Content">
        {props.children}
      </div>

      <div className="Footer" style={{ backgroundColor: props.color || '#000' }}>
        {props.titulo}
      </div>
    </div>
  )
}