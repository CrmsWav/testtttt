import React, { useState, useEffect } from "react";
import RadioSectionChoice from "./RadioSectionChoice";
import SelectDateChoice from "./SelectDateChoice";
import TextFields from "./TextFields.js";
import validator from "validator";

const FormStep1 = ({ api }) => {
  // Declaration of state components
  const [sectionChoice, setSectionChoice] = useState("");
  const [dateChoice, setdateChoice] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobilePhone: "",
  });

  const [disable, setDisable] = useState(true);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    checkErrors();
  }, [errors]);

  useEffect(() => {
    if (
      sectionChoice === "" ||
      dateChoice === "" ||
      firstName === "" ||
      lastName === "" ||
      mail === "" ||
      phone === ""
    ) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [sectionChoice, dateChoice, firstName, lastName, mail, phone]);

  useEffect(() => {
    console.log(disable || empty);
    console.log("disable :", disable);
    console.log("empty :", empty);
  }, [disable, empty]);

  // On submit :
  const handleSubmit = (event) => {
    event.preventDefault();

    const lead = {
      trainingPath: sectionChoice,
      groupInfoSession: "2021-09-01",
      firstName: firstName,
      lastName: lastName,
      emailAddress: mail,
      mobilePhone: phone,
    };

    //
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
    console.log(lastName);
    console.log(firstName);
    console.log(mail);
    console.log(phone);

    // if (errors !== "") {
    //   setDisable(true);
    //   return;
    // }
  };

  {
    /************************* handleFirstName LastName Mail Phone **********************************/
  }

  function handleFirstName(e) {
    if (e.target.value.length < 2) {
      setErrors({
        ...errors,
        firstName: "Minimum 2 caractères pour le prénom",
      });
    } else {
      setErrors({
        ...errors,
        firstName: "",
      });
    }
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    if (e.target.value.length < 2) {
      setErrors({
        ...errors,
        lastName: "Minimum 2 caractères pour le nom",
      });
    } else {
      setErrors({
        ...errors,
        lastName: "",
      });
    }
    setLastName(e.target.value);
  }

  function handleMail(e) {
    const gmailErrors = [
      "gmail.fr",
      "gmail.cpm",
      "gmail.cim",
      "gmail.col",
      "gmail.cop",
    ];
    const email = e.target.value.split("@");
    console.log(email);

    if (!validator.isEmail(e.target.value)) {
      setErrors({
        ...errors,
        emailAddress: "Mauvais mail",
      });
    } else if (email.length === 2 && gmailErrors.includes(email[1])) {
      setErrors({
        ...errors,
        emailAddress: `Vous êtes vraiment sûr(e) de ${email[1]} ?`,
      });
    } else {
      setErrors({ ...errors, emailAddress: "" });
    }
    setMail(e.target.value);
  }

  function handlePhone(e) {
    if (e.target.value.length > 0 && e.target.value.charAt(0) !== "0") {
      setErrors({
        ...errors,
        mobilePhone: "Le numero doit commencer par 06 ou 07",
      });
    } else if (!validator.isMobilePhone(e.target.value, "fr-FR")) {
      setErrors({ ...errors, mobilePhone: "Mauvais téléphone" });
    } else {
      setErrors({ ...errors, mobilePhone: "" });
    }
    setPhone(e.target.value);
  }

  {
    /************************************************************************************************/
  }

  const checkErrors = () => {
    for (const [key, value] of Object.entries(errors)) {
      // console.log(`${key}: ${value}`);
      if (value !== "") {
        setDisable(true);
        return;
      }
    }
    setDisable(false);
  };

  return (
    <div className="App">
      <RadioSectionChoice
        sectionChoice={sectionChoice}
        setSectionChoice={setSectionChoice}
      />
      <SelectDateChoice setdateChoice={setdateChoice} />
      <br />
      <TextFields
        label="Nom"
        error={errors.lastName}
        onChange={handleLastName}
        value={lastName}
      />
      <TextFields
        label="Prénom"
        error={errors.firstName}
        onChange={handleFirstName}
        value={firstName}
      />
      <TextFields
        label="Email"
        type="email"
        error={errors.emailAddress}
        onChange={handleMail}
        value={mail}
      />
      <TextFields
        label="Téléphone"
        type="tel"
        error={errors.mobilePhone}
        onChange={handlePhone}
        value={phone}
      />
      <br />
      <button type="submit" onClick={handleSubmit} disabled={disable || empty}>
        C'est good
      </button>
    </div>
  );
};

export default FormStep1;
