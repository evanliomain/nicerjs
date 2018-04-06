import React, { PropTypes } from 'react';

import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import './Code.less';

import 'codemirror/mode/javascript/javascript';

const SrcCode = ({ onChange, srcCode, error }) => (
  <div className="code">
    <span className="code-error">{ !error ? ' ' : error }</span>
    <CodeMirror
      value={srcCode}
      onChange={onChange}
      options={{
        mode        : 'javascript',
        lineNumbers : true,
        tabSize     : 2
      }} />
  </div>
)

SrcCode.propTypes = {
  onChange : PropTypes.func.isRequired,
  srcCode  : PropTypes.string.isRequired
};

export default SrcCode;
