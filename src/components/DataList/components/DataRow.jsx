import React from "react";

const DataRow = ({ file }) => {
  return (
    <tr>
      <td>{file?.name}</td>
      <td>{file?.author}</td>
      <td>{file?.quantity}</td>
    </tr>
  );
};

export default DataRow;
