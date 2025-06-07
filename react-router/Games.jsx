import React from 'react';
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';
import GameMatcher from './GameMatcher';

const Games = () => {

  return (
    <BrowserRouter>
      <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '600px', listStyle: 'none'}}>
          <li>
              <Link to="/game/number-baseball">숫자야구</Link>
          </li>
          <li>
              <Link to="/game/rock-scissors-paper">가위바위보</Link>
          </li>
          <li>
              <Link to="/game/lotto-generator">로또생성기</Link>
          </li>
          <li>
              <Link to="/game/index">게임 매쳐</Link>
          </li>
      </ul>
      <div>
        <Routes>
          <Route path="/" element={<GameMatcher />} />
          <Route path="/game/*" element={<GameMatcher />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Games;
