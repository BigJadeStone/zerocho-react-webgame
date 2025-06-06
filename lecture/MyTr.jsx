import React, {memo, useMemo, useContext} from 'react';
import Td from './MyTd'
import { TableContext } from './MyMineSearch'

const MyTr = memo(({ rowData, rowIndex, dispatch}) => {
    const {tableData} = useContext(TableContext);

    return (
        <tr>
            {tableData[0] && Array(tableData[0].length)
                                .fill()
                                .map((td, i) => <Td rowIndex={rowIndex} cellIndex={i} />)}
        </tr>
    )
});

MyTr.displayName = 'Tr';

export default MyTr;