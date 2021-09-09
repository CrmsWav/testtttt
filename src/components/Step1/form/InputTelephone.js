import React from "react";

function InputTelephone({ setPhone }) {
  return (
    <div>
      <label>Téléphone</label>
      <br />
      <input
        type="tel"
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />
      <br />
    </div>
  );
}

export default InputTelephone;
