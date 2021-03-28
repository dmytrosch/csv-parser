import React, { useState } from "react";
import Papa from "papaparse";
import Table from "./components/Table/Table";

function App() {
    const [file, setFile] = useState(null);
    const uploadFileHandler = (e) => {
        const cvs = e.target.files[0];
        Papa.parse(cvs, {
            dynamicTyping: true,
            complete: (result) => setFile(result.data),
        });
    };
    return (
        <div>
            <input type="file" onChange={uploadFileHandler} />
            <div>{JSON.stringify(file)}</div>
            {file && <Table data={file} />}
        </div>
    );
}

export default App;
