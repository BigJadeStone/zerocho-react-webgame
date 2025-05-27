// const React = require('react');
// const ReactDom = require('react-dom');
//
// const WordRelay = require('./WordRelay');
//
// ReactDom.render(<WordRelay />, document.querySelector('#root'));


const React = require('react');
const ReactDom = require('react-dom/client'); // 경로 변경

const WordRelay = require('./WordRelay');

// React 18+ 방식: createRoot 사용
const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(<WordRelay />);