import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}

const MyLottoHooks = (props) => {
    // const lottoNumbers  = useMemo(() => getWinNumbers(), []); // 빈 배열의 경우 최초에 한번만 실행.
    // const [winNumbers, setWinNumbers] = useState(lottoNumbers);

    const [winNumbers, setWinNumbers] = useState(() => getWinNumbers()); //Lazy Initialization -> setState에 함수전달 시 최초 마운트 시에 한번만 실행

    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    //useEffect에서 componentDidUpdate 구현하기
    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) { // 최초 마운트 시 실행
            mounted.current = true;
        } else { //update 시 실행

        }

        return () => {}; //클리어 메서드 -> 업데이트 직전에 실행
    }); //두번째 인자가 비어있으니 매번 실행 == componentDidMount, compomemtDidUpdate 모두 수행

    // 두번째인자의 빈배열 -> componentDidMount와 동일 -> 최초 mount시에만 실행
    // 두번째 배열에 의존성 추가 -> 배열의 각 인덱스에 표현식 추가 가능
    useEffect(() => {
        console.log('로또 숫자를 생성합니다.');
        runTimeouts();

        return () => { // clear 메서드 반환 -> update 직전에 앞전 내용 정리
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        }
    },[timeouts.current]);
    //↑ 배열에 의존성 요소가 있다면 componentDidMount, componentDidUpdate 둘 다 수행

    // useEffect((prevState) => {
    //     if (preState === undefined) { // 최초 mount 시
    //         console.log('didMount');
    //         runTimeouts();
    //         console.log('로또 숫자를 생성합니다.');
    //     } else if (prevState.winNumbers !== winNumbers) { //redo 실행 시
    //         console.log('didUpdate');
    //         if (winBalls.length === 0) {
    //             console.log('onClickRedo 실행!');
    //             runTimeouts();
    //             console.log('로또 숫자를 생성합니다.');
    //         }
    //     }
    //
    //     return () => { // clear 메서드 반환 -> update 직전에 앞전 내용 정리
    //         timeouts.current.forEach((v) => {
    //             clearTimeout(v);
    //         });
    //     }
    // }); //2번째 인자 비어있음 -> componentDidUpdate와 동일 -> 매 변경시 실행


    const runTimeouts = () => {
        console.log('runTimeouts');
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevState) => {
                    return [...prevState, winNumbers[i]];
                });
            }, (i + 1) * 1000);
        }

        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
    }

    const onClickRedo = useCallback(() => {
        console.log('onClickRedo');

        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers]);

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} redoEventHandler={onClickRedo}/>)}
            </div>
            {bonus && <div>보너스!</div>}
            {bonus && <Ball number={bonus}/>}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
}


export default MyLottoHooks;