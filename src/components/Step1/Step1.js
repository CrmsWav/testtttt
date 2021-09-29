import React from "react";
import FormStep1 from "./form/FormStep1";
import Step1Done from "./Step1Done";

const Step1 = ({ api, lead }) => {
  if (lead) {
    return <Step1Done lead={lead} />;
  } else {
    return <FormStep1 api={api} />;
  }
};

export default Step1;
