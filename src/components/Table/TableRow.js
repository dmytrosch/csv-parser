import React, { useEffect, useState } from "react";
import TableCeil from "./TableCeil";
import checkIsDublicated from "../../utils/checkIsDublicated";

export default function TableRow({ row: item, arr }) {
    const [dublicatedId, setDublicatedIds] = useState(null);
    const [dublicatedField, setDublicatedField] = useState(null);
    useEffect(() => {
        const dublicate = checkIsDublicated(arr, item);
        if (!dublicate) return;
        const [id, field] = dublicate;
        setDublicatedField(field);
        setDublicatedIds(id);
    }, [item, arr]);

    return (
        <tr>
            <TableCeil>{item.id}</TableCeil>
            <TableCeil>{item.fullName}</TableCeil>
            <TableCeil
                column="phone"
                isDublicated={dublicatedField === "phone"}
            >
                {item.phone}
            </TableCeil>
            <TableCeil
                column="email"
                isDublicated={dublicatedField === "email"}
            >
                {item.email}
            </TableCeil>
            <TableCeil column="age">{item.age}</TableCeil>
            <TableCeil column="experience">{item.experience}</TableCeil>
            <TableCeil column="yearlyIncome">{item.yearlyIncome}</TableCeil>
            <TableCeil column="hasChildren">{item.hasChildren}</TableCeil>
            <TableCeil column="licenseStates">{item.licenseStates}</TableCeil>
            <TableCeil column="expirationDate">{item.expirationDate}</TableCeil>
            <TableCeil column="licenseNumber">{item.licenseNumber}</TableCeil>
            <TableCeil>{dublicatedId}</TableCeil>
        </tr>
    );
}
