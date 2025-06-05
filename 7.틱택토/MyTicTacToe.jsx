import React, {useState, useReducer, useCallback ,useEffect} from 'react';
import MyTable from "./MyTable";

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
    recentCell: [-1, -1],
}
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {// 첫번째 인자 : prevState, 두번째 인자 : action 객체
    switch (action.type) {
        case SET_WINNER:
            //state.winner = action.winner; 이렇게 하면 안됨. -> react의 불변성 생각!
            return {
                ...state, // 기존객체 복사
                winner: action.winner, //바뀌는 부분만 덮어씌워줌.
            }; // 새로운 객체 반환 -> state 변경 시 반드시 새로운 것을 반환해줘야함.
        case CLICK_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;

            return {
                ...state,
                tableData,
                recentCell: [action.row, action.cell],
            }
        }

        case CHANGE_TURN: {
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O',
            }
        }

        case RESET_GAME: {
            return {
                ...initialState,
                winner: state.winner,
            }
        }

        default:
            return state;
    }
};

const MyTicTacToe = () => {
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('');
    // const [tableData, setTableData] = useState([['','',''], ['','',''], ['','','']]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, winner, recentCell } = state;

    const onClickTable = useCallback(() => {
        dispatch({type: SET_WINNER, winner: 'O'});
    }, []);

    useEffect(() => {
        const [row, cell] = recentCell;

        if (row < 0) { // 초기 마운트 시에는 우승, 무승부 여부 체크 x
            return;
        }

        let win = false;
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        }
        if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
            win = true;
        }
        console.log('useEffect 실행 => ', win, row, cell, tableData, turn);

        if (win) {
            dispatch({ type: SET_WINNER, winner: turn})
            dispatch({ type: RESET_GAME})
        } else {
            let all = true; //all이 true면 무승부
            tableData.forEach((row) => {
                row.forEach((cell) => {
                    if (!cell) {
                        all = false;
                    }
                });
            });

            if (all) {//무승부
                dispatch({ type: SET_WINNER, winner: '무승부' });
                dispatch({ type: RESET_GAME });
            } else {// 게임진행
                dispatch({ type: CHANGE_TURN });
            }
        }

    }, [recentCell]);


    return (
        <>
            <MyTable onClick={onClickTable} tableData={tableData} dispatch={dispatch}/>
            {winner && <div>{winner == '무승부' ? '무승부' : winner + '님의 승리'}</div>}
            {/*{winner && <div>{winner}님의 승리</div>}*/}
        </>
    )
}

export default MyTicTacToe;