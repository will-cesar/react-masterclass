import React from "react";

export default (props) => {
  return (
    <div>
      <label>Passo: </label>
      <input 
        type="number" 
        value={props.passo}
        style={{ fontSize: '1.4rem', width: '60px' }}
        onChange={e => props.onPassoChange(+e.target.value)} />
    </div>
  );
}