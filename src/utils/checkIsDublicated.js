export default function checkIsDublicated(array, item) {
    let dublicatedField;
    const dublicated = array.find((el) => {
        if (el.id === item.id) {
            return false;
        }
        if (el.phone === item.phone) {
            dublicatedField = "phone";
            return true;
        }
        if (el.email === item.email) {
            dublicatedField = "email";
            return true;
        }
        return false;
    });
    return dublicated ? [dublicated.id, dublicatedField] : null;
}
