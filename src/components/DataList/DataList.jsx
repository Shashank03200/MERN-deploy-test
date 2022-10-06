import React, { useState } from "react";
import useFile from "../../hooks/File/useFile";

import DataRow from "./components/DataRow";

import "./DataList.css";

const DataList = () => {
  const [userFiles, setUserFiles] = useState();
  const { files, filesLoading } = useFile();

  return (
    <div className="DataList">
      {filesLoading ? (
        <p>Loading..</p>
      ) : (
        <table>
          <>
            <thead>
              <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {files?.map((file) => {
                return <DataRow key={file._id} file={file} />;
              })}
            </tbody>
          </>
        </table>
      )}
    </div>
  );
};

export default DataList;
