import checkIsDublicated from "./checkIsDublicated";
import normalizePhoneNumber from "./normalizePhoneNumber";

export default function normalizeDataToObject(array) {
    const normalizedArr = array.map((el, index) => {
        const obj = {};
        obj.id = index + 1;
        obj.fullName = el[0] && el[0].trim();
        const phone = el[1];
        obj.phone = normalizePhoneNumber(phone);
        obj.email = el[2] && el[2].trim();
        obj.age = el[3];
        obj.experience = el[4];
        obj.yearlyIncome = el[5];
        obj.hasChildren = el[6] ? el[6].toString().toUpperCase() : "FALSE";
        obj.licenseStates = el[7] && el[7].trim();
        obj.expirationDate = el[8] && el[8].trim();
        obj.licenseNumber = el[9] && el[9].trim();
        // const dublicated = checkIsDublicated(arr, el);
        // if (dublicated) obj.dublicatedWith = dublicated;
        return obj;
    });
    return normalizedArr;
}
