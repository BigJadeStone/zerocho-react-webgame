import React, { memo, useState, useRef } from 'react';

const ResponseCheckHooks = memo((props) =>  {
    const [state, setState] = useState('waiting');
    const[message,setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef(null);
    const endTime = useRef(null);

    const onClickScreen = () => {
        if (state === 'waiting') {
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');

                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤

            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
        } else if (state === 'now') { // 반응속도 체크
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult(prevResult => [...prevResult, endTime.current - startTime.current]);
        }
    };

    const onReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        return result.length === 0
            ? null
            : <>
                <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
                <button onClick={onReset}>리셋</button>
            </>
    };

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {renderAverage()}
            <div style={{marginTop: '20px', backgroundColor: 'blue', color:'white', minWidth: '300px', minHeight: '300px'}}>
                {(() => {
                    if (1 == 1) {
                        return <span style={{margin: '20px 0 20px 0', display: 'block'}}> if문 테스트 </span>
                    }
                })()}
                {(() => {
                    const array = [];
                    for (let i=0; i < 5; i++) {
                        array.push(<div key={i}>JSX내 for문 사용하는 법</div>);
                    }
                    array.push(<div style={{marginTop: '20px'}}>반복이 되는 tag 내에 반드시 key를 지정해줘야 함.</div>);
                    return array;
                })()}
            </div>
        </>
    )
});

ResponseCheckHooks.displayName = 'ResponseCheckHooks';

export default ResponseCheckHooks;
