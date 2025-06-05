import React, {memo, useMemo} from 'react';
import MyTd from './MyTd'

const MyTr = memo(({ rowData, rowIndex, dispatch}) => {
    console.log('tr rendered');

    return (
        <tr>
            {Array(rowData.length).fill().map((v, i) =>
                <MyTd key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</MyTd>
            )}
        </tr>
    )
});

MyTr.displayName = 'MyTr';

export default MyTr;