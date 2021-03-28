import React, { useEffect, setState } from "react";
import validateFields from "../../utils/validateFields";

export default function TableCeil({ children, column, isDublicated = false }) {
    const [isInvalid, setIsInvalid] = setState(false);
    useEffect(() => {
        const isValid = validateFields[column];
        if (isDublicated || !isValid) setIsInvalid(true);
    }, []);
    return (
        <td style={isInvalid ? { backgroundColor: "red" } : {}}>{children}</td>
    );
}
