// import isEmail from "validator/lib/isEmail.js";
import validator from "validator";

export const checkEmail = (email) => {
    const gmailErrors = ['gmail.cpm', 'gmail.cim', 'gmail.fr'];
    if (!validator.isEmail(email))
        return "ERROR MAIL MOTHER FUCKER";
    const emailSplit = email.split('@');
    if (emailSplit.length === 2 && gmailErrors.includes(emailSplit[1]))
        return "YOU SURE MOFO?";
    return "";
};

export const checkMobilePhone = (phone) => {
    return validator.isMobilePhone(phone, "fr-FR") ? "" : "ERROR PHONE MF!";
};

export const checkName = (name) => {
    return name.length < 2 ? "ERROR NAME MOFO" : "";
};