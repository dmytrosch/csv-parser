import validator from "validator";

const object = {
    email: (string) => validator.isEmail(string),
    
};

export default object;
