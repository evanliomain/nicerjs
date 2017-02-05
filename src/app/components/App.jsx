import React from 'react';
import './App.less';


import AstCodePlayground  from '../containers/AstCodePlayground';
import DestCodePlayground from '../containers/DestCodePlayground';
import SrcCodePlayground  from '../containers/SrcCodePlayground';

export const App = () => (
  <div className="app">
    <span className="title">Playground (Work In Progress)</span>
    <div className="parts">
      <div className="part">
        <SrcCodePlayground />
      </div>
      <div className="part">
        <AstCodePlayground />
      </div>
      <div className="part">
        <DestCodePlayground />
      </div>
    </div>
  </div>
);
