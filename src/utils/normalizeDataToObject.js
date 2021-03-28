import checkIsDublicated from "./checkIsDublicated";

export default function normalizeDataToObject(array, setAlert) {
    const normalizedArr = [];
    array.forEach((el, index, arr) => {
        const fullName = el[0].trim();
        const phone = el[1];
        const email = el[2].trim();
        if (!fullName || !phone || !email) {
            setAlert(true);
            return;
        }
        const obj = {};
        obj.id = index + 1;
        obj.fullName = fullName;
        obj.phone = phone;
        obj.email = email;
        obj.age = el[3];
        obj.experience = el[4];
        obj.yearlyIncome = el[5];
        obj.hasChildren = el[6].toString().toUpperCase();
        obj.licenseStates = el[7].trim();
        obj.expirationDate = el[8].trim();
        obj.licenseNumber = el[9].trim();
        const dublicated = checkIsDublicated(arr, el);
        if (dublicated) obj.dublicatedWith = dublicated;
        normalizedArr.push(obj);
    });
    return normalizedArr;
}
