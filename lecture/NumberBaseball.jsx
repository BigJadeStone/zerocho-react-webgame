// const React = require('react');
// const { Component } = React;
import React, { Component } from 'react';

function getNumbers() { // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = (e) => {

    };

    onChangeInput = (e) => {

    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {[1234,43123,431243,123124,2313].map((val, idx, arr) => {
                        return <li>{val}</li>;
                    })}
                </ul>
            </>
        )
    }
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