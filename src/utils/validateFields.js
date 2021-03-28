import validator from "validator";

const object = {
    currentAge: null,
    email: (string) => validator.isEmail(string),
    age: function (number) {
        this.currentAge = number;
        return number >= 21 && validator.isInt(number.toString());
    },
    phone: (string) => validator.isMobilePhone(string),
    experience: function (string) {
        const number = Number(string);
        return number >= 0 && number <= this.currentAge;
    },
    yearlyIncome: (decimalString) =>
        Number(decimalString) >= 0 &&
        Number(decimalString) <= 1000000 &&
        validator.isDecimal(decimalString),
    expirationDate: (date) => {
        const isDateValid =
            validator.isDate(date, { format: "YYYY/MM/DD" }) ||
            validator.isDate(date, { format: "MM/DD/YYYY" });
        const isDateMoreThanCurrent = new Date(date) > new Date();
        return isDateValid && isDateMoreThanCurrent;
    },
    licenseStates: (string) => {
        
    }
};

export default object;
