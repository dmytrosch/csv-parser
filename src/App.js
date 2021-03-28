import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Table from "./components/Table/Table";
import normalizeDataToObject from "./utils/normalizeDataToObject";
import validateHead from "./utils/validateHead";

function App() {
    const [file, setFile] = useState(null);
    const [alert, setAlert] = useState(false);
    const [content, setContent] = useState(null);
    const uploadFileHandler = (e) => {
        const cvs = e.target.files[0];
        if (cvs.type !== "text/csv" || !cvs) {
            setAlert(true);
            return;
        }
        alert && setAlert(false);
        Papa.parse(cvs, {
            dynamicTyping: true,
            complete: (result) => setFile(result.data),
        });
    };
    useEffect(() => {
        if (!file) return;
        const isValidHead = validateHead(file[0]);
        if (!isValidHead) {
            setAlert(true);
            return;
        }
        const newArray = [...file];
        if (newArray[newArray.length - 1][0] === null) {
            newArray.pop();
        }
        newArray.shift();
        const normalizedData = normalizeDataToObject(newArray, setAlert);
        setContent(normalizedData);
    }, [file, setAlert]);
    return (
        <div>
            <input type="file" onChange={uploadFileHandler} />
            <div>{JSON.stringify(file)}</div>
            {!alert && file && <Table data={content} />}
            {alert && <p>Wrong file</p>}
        </div>
    );
}

export default App;
