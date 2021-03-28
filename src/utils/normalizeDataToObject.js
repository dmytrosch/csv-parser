export default function normalizeDataToObject(index, array) {
    const obj = {};
    obj.id = index + 1;
    obj.fullName = array[0];
    obj.phone = array[1];
    obj.email = array[2];
    obj.age = array[3];
    obj.experience = array[4];
    obj.yearlyIncome = array[5];
    obj.hasChildren = array[6].toString().toUpperCase();
    obj.licenseStates = array[7];
    obj.expirationDate = array[8];
    obj.licenseNumber = array[9];
    return obj;
}
