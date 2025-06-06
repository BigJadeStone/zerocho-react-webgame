// const React = require('react');
// const { Component } = React;

import React, { useState } from 'react';
import Try from './Try';

function getNumbers() { // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    // const [answer, setAnswer] = useState(getNumbers());
    const [answer, setAnswer] = useState(getNumbers); //lazy init
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevState) => [...prevState, { try: value, result: '홈런!' }]);

            alert('게임을 다시 시작합니다!');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else { // 답 틀렸으면
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { // 10번 이상 틀렸을 때
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`)

                alert('게임을 다시 시작합니다!');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }

                setTries((prevState) => [...prevState, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}]);
                setValue('');
            }
        }
    };

    const onChangeInput = (e) => {
        console.log(answer);
        setValue(e.target.value);
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput} />
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
                    );
                })}
            </ul>
        </>
    )
}

export const hello = 'hello'; // import { hello }
export const bye = 'hello'; // import { hello, bye }

export default NumberBaseball; //module.exports = NumberBaseball; -> export default는 한번만 가능
// module.exports 엄밀히 말하면 export default랑은 서로 다른 것.
// 다만, react를 사용하는 정도에서는 위에 2가지가 호환이 되기 때문에 사용.

// 위에는 js의 es 2015 문법
// 아래는 Node의 모듈 문법 -> common js 라고 부른다고 함.

// const React = require('react');
// exports.hello = 'hello';
// module.exports = NunmberBaseball;
//