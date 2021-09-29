import React from "react";

function RadioChoixSection({ sectionChoice, setSectionChoice }) {
  return (
    <div>
      <div
        onClick={() => {
          setSectionChoice("Digital UI / UX Design");
        }}
      >
        <p
          className={
            sectionChoice === "Digital UI / UX Design" ? "selected" : ""
          }
        >
          Design
        </p>
      </div>
      <div
        onClick={() => {
          setSectionChoice("Développement Web et Web Mobile");
        }}
      >
        <p
          className={
            sectionChoice === "Développement Web et Web Mobile"
              ? "selected"
              : ""
          }
        >
          Développement Web et Web Mobile
        </p>
      </div>
      <br />
    </div>
  );
}

export default RadioChoixSection;
