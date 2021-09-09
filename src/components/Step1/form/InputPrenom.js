import React from "react";

function InputPrenom({ setFirstName }) {
  return (
    <div>
      <label>Prénom</label>
      <br />
      <input
        type="text"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <br />
    </div>
  );
}

export default InputPrenom;
