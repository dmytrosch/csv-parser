import React, { useEffect, useState } from "react";
import checkDublicated from "../../utils/checkIsDublicated";

import { HEAD } from "../../variables";

export default function Table({ data }) {
    
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
                {data &&
                    data.map((item) => (
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
                            <td>{checkDublicated(data, item)}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}
