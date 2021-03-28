import React, { useCallback } from "react";

import { HEAD } from "../../variables";
import TableRow from "./TableRow";

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
                    data.map((item, _, arr) => (
                        <TableRow key={item.id} row={item} arr={arr} />
                    ))}
            </tbody>
        </table>
    );
}
