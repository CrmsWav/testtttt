import React from "react";

export default function Step1Done({ lead }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p>On vous attend !</p>
      <p>
        {lead.firstName} {lead.lastName}
      </p>
      <p>{lead.emailAddress}</p>
      <p>{lead.trainingPath}</p>
      <p>{lead.groupInfoSession}</p>
    </div>
  );
}
