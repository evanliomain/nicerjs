import React, { PropTypes } from 'react';

import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

import './Code.less';

const DestCode = ({ destCode, errorDest }) => (
  <div className="code">
    <span className="code-error">{ !errorDest ? ' ' : errorDest }</span>
    <CodeMirror
      value={destCode}
      options={{
        mode        : 'javascript',
        lineNumbers : true,
        readOnly    : 'nocursor'
      }} />
  </div>
)

DestCode.propTypes = {
  destCode : PropTypes.string
};

export default DestCode;
