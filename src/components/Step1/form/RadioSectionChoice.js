import React from "react";

function RadioChoixSection({trainingPath, setTrainingPath}) {
    return (
        <div>
            <div
                onClick={() => {
                    setTrainingPath("Digital UI / UX Design");
                }}
            >
                <p
                    className={
                        trainingPath === "Digital UI / UX Design" ? "selected" : ""
                    }
                >
                    Design
                </p>
            </div>
            <div
                onClick={() => {
                    setTrainingPath("Développement Web et Web Mobile");
                }}
            >
                <p
                    className={
                        trainingPath === "Développement Web et Web Mobile"
                            ? "selected"
                            : ""
                    }
                >
                    Développement Web et Web Mobile
                </p>
            </div>
            <br/>
        </div>
    );
}

export default RadioChoixSection;
