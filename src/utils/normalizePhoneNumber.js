export default function normalizePhoneNumber(number) {
    const stringNumber = number.toString();
    if (stringNumber.length === 10) {
        return "+1" + number;
    }
    if (stringNumber.length === 11) {
        return "+" + number;
    }
    return stringNumber;
}
