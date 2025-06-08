import React, {Component} from 'react';
import NumberBaseball from '../3.숫자야구/NumberBaseballClass';
import RSP from '../lecture/MyRSPClass';
import Lotto from '../lecture/MYLottoClass';
import {useLocation, useNavigate, Routes, Route} from 'react-router';

const GameMatcher = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    let urlSearchParams = new URLSearchParams(location.search.slice(1));
    console.log(urlSearchParams.get('hello'));
    console.log(urlSearchParams.get('page'));

    /* test */
    console.log('location: ', location);
    console.log('urlSearchParams type: ', typeof urlSearchParams);
    console.log('urlSearchParams: ', urlSearchParams);
    urlSearchParams.forEach((v, i) => console.log('urlSearchParams [' + i + ']: ' + v));

    return (
        <Routes>
            <Route path="number-baseball" element={<NumberBaseball/>}/>
            {/*<Route path="rock-scissors-paper" element={<RSP />} />*/}
            {/*<Route path="lotto-generator" element={<Lotto />} />*/}
            <Route
                path="*"
                element={<div>
                    일치하는 게임이 없습니다.
                </div>}
            />
        </Routes>
    );
}

export default GameMatcher;
