import React, { useState, useReducer } from 'react';
import MyTable from "./MyTable";

const initialState = {
    winner: '',
    turn: 'o',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
}

const reducer = (state, action) => {

}

const MyTicTacToe = () => {
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('');
    // const [tableData, setTableData] = useState([['','',''], ['','',''], ['','','']]);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Table />
            {winner && <div>{winner}님의 승리</div>}
        </>
    )
}

export default MyTicTacToe;