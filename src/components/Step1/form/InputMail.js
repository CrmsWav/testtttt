import React from "react";

function InputMail({ setMail }) {
  return (
    <div>
      <label>Mail</label>
      <br />
      <input
        type="email"
        onChange={(event) => {
          setMail(event.target.value);
        }}
      />
      <br />
    </div>
  );
}

export default InputMail;
