import React, { useEffect, useState } from "react";
import validateFields from "../../utils/validateFields";

export default function TableCeil({ children, column, isDublicated }) {
    const [isInvalid, setIsInvalid] = useState(false);
    useEffect(() => {
        if (isDublicated) {
            setIsInvalid(true);
            return;
        }
        if (column && children) {
            const isValid = validateFields[column](children);
            !isValid && setIsInvalid(true);
        }
    }, [children, column, isDublicated]);
    return (
        <td style={isInvalid ? { backgroundColor: "red" } : {}}>{children}</td>
    );
}
