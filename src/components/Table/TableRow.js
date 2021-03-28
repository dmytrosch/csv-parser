import React, { useEffect, useState } from "react";
import TableCeil from "./TableCeil";
import checkIsDublicated from "../../utils/checkIsDublicated";

export default function TableRow({ row: item, arr }) {
    const [dublicatedIds, setDublicatedIds] = useState(null);
    const [dublicatedField, setDublicatedField] = useState(null);
    useEffect(() => {
        const dublicates = checkIsDublicated(arr, item);
        if (!dublicates) return;
        const [ids, field] = dublicates;
        setDublicatedField(field);
        setDublicatedIds(ids);
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
            <TableCeil column="">{item.experience}</TableCeil>
            <TableCeil column="">{item.yearlyIncome}</TableCeil>
            <TableCeil column="">{item.hasChildren}</TableCeil>
            <TableCeil column="">{item.licenseStates}</TableCeil>
            <TableCeil column="">{item.expirationDate}</TableCeil>
            <TableCeil column="">{item.licenseNumber}</TableCeil>
            <TableCeil>{dublicatedIds}</TableCeil>
        </tr>
    );
}
