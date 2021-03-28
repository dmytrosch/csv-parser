export default function checkIsDublicated(array, item) {
    const dublicated = array.filter(
        (el) =>
            el.id !== item.id &&
            (el.phone === item.phone ||
                el.email.toLowerCase() === item.email.toLowerCase())
    );
    return dublicated.length ? dublicated.map((el) => el.id).join(",") : null;
}
