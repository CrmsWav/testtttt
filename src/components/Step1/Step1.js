import React, { useState } from "react";
import InputMail from "./form/InputMail";
import InputNom from "./form/InputNom";
import InputPrenom from "./form/InputPrenom";
import InputTelephone from "./form/InputTelephone";
import RadioChoixSection from "./form/RadioChoixSection";
import SelectChoixDate from "./form/SelectChoixDate";

const Step1 = ({ api }) => {
  const [sectionChoice, setSectionChoice] = useState("");
  const [dateChoice, setdateChoice] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const lead = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: mail,
      mobilePhone: phone,
      trainingPath: sectionChoice,
      groupInfoSession: "2021-09-01",
    };

    api
      .post("/v1/leads", lead)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err?.response?.data.message);
      });

    console.log(sectionChoice);
    console.log(dateChoice);
    console.log(firstName);
    console.log(lastName);
    console.log(mail);
    console.log(phone);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <RadioChoixSection
          sectionChoice={sectionChoice}
          setSectionChoice={setSectionChoice}
        />
        <SelectChoixDate setdateChoice={setdateChoice} />
        <InputNom setLastName={setLastName} />
        <InputPrenom setFirstName={setFirstName} />
        <InputMail setMail={setMail} />
        <InputTelephone setPhone={setPhone} />
        <button type="submit">C'est good</button>
      </form>
    </div>
  );
};

export default Step1;
