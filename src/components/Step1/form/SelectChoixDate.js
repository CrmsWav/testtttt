import React from "react";

function SelectChoixDate({ setdateChoice }) {
  return (
    <div>
      <select
        name="DatesReunionsInformation"
        id="DatesReunionsInformation-select"
        onChange={(event) => {
          setdateChoice(event.target.value);
        }}
      >
        <option>--Dates--</option>
        <option value="une date">Une date</option>
        <option value="une autre date">Une autre date</option>
        <option value="et encore une">et encore une</option>
        <option value="et une autre">et une autre</option>
      </select>
      <br />
    </div>
  );
}

export default SelectChoixDate;
