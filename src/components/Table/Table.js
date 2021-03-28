import React, { useEffect, useState } from "react";
import normalizeDataToObject from "../../utils/normalizeDataToObject";
import validateHead from "../../utils/validateHead";
import { HEAD } from "../../variables";

export default function Table({ data, setAlert }) {
    const [content, setContent] = useState(null);
    useEffect(() => {
        const isValidHead = validateHead(data[0]);
        if (!isValidHead) {
            setAlert(true);
            return;
        }
        const newArray = [...data];
        newArray.pop();
        newArray.shift();
        const normalizedData = newArray.map((el, index) =>
            normalizeDataToObject(index, el)
        );
        setContent(normalizedData);
    }, [data, setAlert]);
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    {HEAD.map((el) => (
                        <th key={el}>{el}</th>
                    ))}
                    <th>Dublicated with</th>
                </tr>
            </thead>
            <tbody>
                {content &&
                    content.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.fullName}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>{item.experience}</td>
                            <td>{item.yearlyIncome}</td>
                            <td>{item.hasChildren}</td>
                            <td>{item.licenseStates}</td>
                            <td>{item.expirationDate}</td>
                            <td>{item.licenseNumber}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}
