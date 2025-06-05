import React, {memo, useMemo} from 'react';
import Td from './MyTd'

const MyTr = memo(({ rowData, rowIndex, dispatch}) => {

    return (
        <tr>
            <Td></Td>
        </tr>
    )
});

MyTr.displayName = 'Tr';

export default MyTr;