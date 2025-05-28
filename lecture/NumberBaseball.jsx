// const React = require('react');
// const { Component } = React;
import React, { Component } from 'react';

class NumberBaseball extends Component{

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