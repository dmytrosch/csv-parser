import validator from 'validator';

function validatePhoneNumber(number){
   return validator.isMobilePhone(number)
}