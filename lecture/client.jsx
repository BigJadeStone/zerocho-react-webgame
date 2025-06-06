// const React = require('react');
// const ReactDom = require('react-dom/client'); // 경로 변경
//
// // const WordRelay = require('./WordRelay');
// const NumberBaseball = require('./NumberBaseball');
//
// // React 18+ 방식: createRoot 사용
// ReactDom.createRoot(document.querySelector('#root')).render(<WordRelay />);

//아래는 require에서 import 방식으로 변경한 것.
import React from 'react';
import ReactDom from 'react-dom/client';

import NumberBaseball from './NumberBaseball';
import RenderTest from './RenderTest';
import MyNumberBaseballClass from "./MyNumberBaseballClass";
import ResponseCheckHooks from "./ResponseCheckHooks";
import MyRSPClass from "./MyRSPClass";
import MyRSPHooks from "./MyRSPHooks";
import MyLottoClass from "./MyLottoClass";
import MyLottoHooks from "./MyLottoHooks";
import MyMineSearch from "./MyMineSearch";

ReactDom.createRoot(document.querySelector('#root')).render(<MyMineSearch />);