const { retrieveStateInformation } = require("usa-state-validator");

export default function normalizeStates(string) {
    if (string.includes(",")) {
        const arr = string.split(",");
        const normalized = arr.map((el) => {
            if (el.length > 2) {
                const stateObject = retrieveStateInformation(el);
                return stateObject ? stateObject.abbreviation : el;
            }
            return el;
        });
        return normalized.join("|");
    }
    return string;
}
