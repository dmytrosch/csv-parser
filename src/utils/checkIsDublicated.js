export default function checkIsDublicated(array, item) {
    let dublicatedField;
    const dublicated = array.filter((el) => {
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
    return dublicated.length
        ? [dublicated.map((el) => el.id).join(","), dublicatedField]
        : null;
}
