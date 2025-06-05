import React from "react";
import MyTr from "./MyTr";

const MyTable = ({ tableData, dispatch }) => {

    return (
        <table>
            <tbody>
            {Array(tableData.length).fill().map((v, i) =>
                <MyTr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />)}
            </tbody>
        </table>
    )
}

export default MyTable;