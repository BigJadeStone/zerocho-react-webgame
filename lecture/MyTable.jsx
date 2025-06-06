import React, { useContext } from "react";
import { TableContext } from "./MyMineSearch";
import Tr from "./MyTr";

const MyTable = () => {
    const { tableData } = useContext(TableContext);

    return (
        <table>
            <tbody>
                {Array(tableData.length).fill().map((tr, i) => <Tr rowIndex={i} />)}
            </tbody>
        </table>
    )
}

export default MyTable;