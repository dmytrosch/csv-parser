import { HEAD } from "../variables";

export default function validateHead(headInCVS) {
    if (headInCVS.length !== HEAD.length) {
        return false;
    }
    return headInCVS.every(
        (el, inx) => el.toLowerCase() === HEAD[inx].toLowerCase()
    );
}
