import React, {memo, useCallback, useEffect, useMemo, useRef} from "react";
import {CHANGE_TURN, CLICK_CELL} from "./MyTicTacToe";

const MyTd = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
    const ref = useRef({});

    console.log('td rendered');

    useEffect(() => {
        console.log(rowIndex === ref.current.rowIndex);
        console.log(cellIndex === ref.current.cellIndex);
        console.log(dispatch === ref.current.dispatch);
        console.log(cellData === ref.current.cellData);
        ref.current = {rowIndex, cellIndex, dispatch, cellData}
    }, [rowIndex, cellIndex, dispatch, cellData]);



    const onClickTd = useCallback(() => {
        console.log('onClickTd 실행 : ', rowIndex, cellIndex);
        if (cellData) {
            return;
        }

        //비동기로 처리됨
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex })
        // dispatch({ type: CHANGE_TURN }) //방금 턴의 승리, 무승부 체크가 끝나기 전에 턴이 넘어가므로 해당 부분 제거 -> 체크 이후 로직으로 추가
    },[cellData])

    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
});

MyTd.displayName = 'MyTd';

export default MyTd;