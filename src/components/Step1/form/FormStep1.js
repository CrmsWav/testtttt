import React, {useState, useEffect} from "react";
import RadioSectionChoice from "./RadioSectionChoice";
import SelectDateChoice from "./SelectDateChoice";
import TextFields from "./TextFields.js";
import validator from "validator";
import {checkEmail, checkMobilePhone, checkName} from "../../../helpers/CheckInputs.js";

const initialState = {
    trainingPath: "",
    groupInfoSession: "",
    lastName: "",
    firstName: "",
    emailAddress: "",
    mobilePhone: ""
};

const FormStep1 = ({api}) => {
    const [formData, setFormData] = useState(initialState);

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
        for (const [, value] of Object.entries(formData)) {
            if (value === "") {
                setEmpty(true);
                return;
            }
        }
        setEmpty(false);
    }, [formData]);

    useEffect(() => {
        console.log(disable || empty);
        console.log("disable :", disable);
        console.log("empty :", empty);
    }, [disable, empty]);

    // On submit :
    const handleSubmit = (event) => {
        event.preventDefault();

        //
        api
            .post("/v1/leads", formData)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err?.response?.data.message);
            });

        console.log(formData);
    };


    const handleInput = (e) => {
        checkInput(e.target.name, e.target.value);
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const checkInput = (input, value) => {
        if (input === 'emailAddress')
            setErrors({...errors, emailAddress: checkEmail(value)});
        else if (input === 'mobilePhone')
            setErrors({...errors, mobilePhone: checkMobilePhone(value)});
        else if (input === 'firstName' || input === 'lastName')
            setErrors({...errors, [input]: checkName(value)});
    };

    const setTrainingPath = (trainingPath) => {
        setFormData({...formData, trainingPath: trainingPath});
    };

    useEffect(() => {
        console.log("formData ->", formData);
    }, [formData]);


    const checkErrors = () => {
        for (const [, value] of Object.entries(errors)) {
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
                trainingPath={formData.trainingPath}
                setTrainingPath={setTrainingPath}
                name={"trainingPath"}
            />
            <SelectDateChoice onChange={handleInput} name={"groupInfoSession"}/>
            <br/>
            <TextFields
                label="Nom"
                error={errors.lastName}
                onChange={handleInput}
                value={formData.lastName}
                name={"lastName"}
            />
            <TextFields
                label="Prénom"
                error={errors.firstName}
                onChange={handleInput}
                value={formData.firstName}
                name={"firstName"}
            />
            <TextFields
                label="Email"
                type="email"
                error={errors.emailAddress}
                onChange={handleInput}
                value={formData.emailAddress}
                name={"emailAddress"}
            />
            <TextFields
                label="Téléphone"
                type="tel"
                error={errors.mobilePhone}
                onChange={handleInput}
                value={formData.mobilePhone}
                name={"mobilePhone"}
            />
            <br/>
            <button type="submit" onClick={handleSubmit} disabled={disable || empty}>
                C'est good
            </button>
        </div>
    );
};

export default FormStep1;
