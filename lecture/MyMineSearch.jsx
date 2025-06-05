import React, {useEffect, useReducer, createContext, useMemo} from 'react';
import Table from './MyTable';

export const TableContext = createContext({
    tableData: [],
    halted: true,
    dispatch: () => {},
});

const MyMineSearch = props => {



    return (
        <Table>

        </Table>
    )
}

export default MyMineSearch;