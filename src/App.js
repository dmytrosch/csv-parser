import React, { useState } from "react";
import Papa from "papaparse";
import Table from "./components/Table/Table";

function App() {
    const [file, setFile] = useState(null);
    const [alert, setAlert] = useState(false);
    const uploadFileHandler = (e) => {
        const cvs = e.target.files[0];
        console.log(cvs.type);
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
    return (
        <div>
            <input type="file" onChange={uploadFileHandler} />
            <div>{JSON.stringify(file)}</div>
            {!alert && file && <Table data={file} setAlert={setAlert} />}
            {alert && <p>Wrong file</p>}
        </div>
    );
}

export default App;
