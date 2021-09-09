import React from "react";

function InputNom({ setLastName }) {
  return (
    <div>
      <label>Nom</label>
      <br />
      <input
        type="text"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <br />
    </div>
  );
}

export default InputNom;
