import React, { useEffect, useState } from "react";
import normalizeDataToObject from "../../utils/normalizeDataToObject";

export default function Table({ data }) {
    const [head, setHead] = useState(null);
    const [content, setContent] = useState(null);
    const newArray = [...data];
    newArray.pop();
    newArray.shift().map((el, index) => [index + 1, ...el]);
    useEffect(() => {
        setHead(data[0]);
        const newArray = [...data];
        newArray.pop();
        newArray.shift();
        const normalizedData = newArray.map((el, index) =>
            normalizeDataToObject(index, el)
        );
        setContent(normalizedData);
    }, [data]);
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    {head && head.map((el) => <th key={el}>{el}</th>)}
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
