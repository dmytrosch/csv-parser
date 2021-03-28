import React from "react";

export default function TableCeil({ children, column, isDublicated = false }) {
    return <td style={isDublicated ? { color: "red" } : {}}>{children}</td>;
}
