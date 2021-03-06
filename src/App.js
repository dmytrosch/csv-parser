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
        Papa.parse(cvs, {
            dynamicTyping: true,
            complete: (result) => setFile(result.data),
        });
    };
    useEffect(() => {
        if (!file) return;
        alert && setAlert(false);
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
        const normalizedData = normalizeDataToObject(newArray);
        const isRequiredFieldsExist = normalizedData.every(
            (el) => el.fullName && el.email && el.phone
        );
        if (!isRequiredFieldsExist) {
            setAlert(true);
            return;
        }
        setContent(normalizedData);
    }, [file, setAlert]);
    return (
        <div>
            <input
                type="file"
                onChange={uploadFileHandler}
                className="upload"
            />

            {!alert && file && <Table data={content} />}
            {alert && (
                <div className="alert">
                    <span className="alert-text">Wrong file</span>
                </div>
            )}
        </div>
    );
}

export default App;
