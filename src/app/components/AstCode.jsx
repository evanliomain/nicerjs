import React, { PropTypes } from 'react';

import TreeView from './TreeView';

import './AstCode.less';

let i = 0;

const AstCode = ({ astCode }) => getValueRender(astCode)(astCode, 'Program');

const renderArray = (arrayAstCode, label) => {
  if (0 === arrayAstCode.length) {
    return (
      <div key={i++}>
        { !label ? '' : <span className="key">{label}</span> }
        <span className="value">{'[]'}</span>
      </div>
    );
  }
  return <div key={i++}>
    { !label ? '' : <span className="key">{label}</span> }
    <span>
      {
        arrayAstCode.map(astCode =>
          getValueRender(astCode)(astCode, astCode.type)
        )
      }
    </span>
  </div>;
}

const renderObject = (objectAstCode, label) => {
  if (!objectAstCode) {
    return <div key={i++}></div>;
  }

  let positions = '',
      key       = i++,
      type      = '';
  const entries          = Object.entries(objectAstCode),
        collapsed        = 'extra' === label,
        displayedEntries = entries
          .filter(([key, value]) => 'loc' !== key)
          .filter(([key, value]) => 'start' !== key)
          .filter(([key, value]) => 'end' !== key)
          .filter(([key, value]) => 'type' !== key),
        keys = entries
          .filter(([key, value]) => 'loc' !== key)
          .filter(([key, value]) => 'start' !== key)
          .filter(([key, value]) => 'end' !== key)
          .filter(([key, value]) => 'type' !== key)
          .map(([key, value]) => key);

  if (entries.length === 0) {
    return (
      <div key={i++}>
        <span className="key">{label}</span>
        <span className="value">{'{}'}</span>
      </div>
    );
  }

  if (undefined !== objectAstCode.start && undefined !== objectAstCode.end) {
    positions = `(${objectAstCode.start} - ${objectAstCode.end})`;
    key       = `${objectAstCode.start}-${objectAstCode.end}`;
  }
  if (undefined !== objectAstCode.type && label !== objectAstCode.type) {
    type = objectAstCode.type;
  }

          // defaultCollapsed={collapsed}
  return (
    <div key={i++}>
      <span
        className="value">
        <TreeView
          key={key}
          nodeLabel={
            <span>
              <span className="tokenName">{label}</span>
              <span className="type">{type}</span>
              <span className="positions">{positions}</span>
              <span className="preview">{`{${keys.join(', ')}}`}</span>
            </span>
          }>
          {
            displayedEntries
              .map(([key, value]) =>
                getValueRender(value)(value, key)
              )
          }
        </TreeView>
      </span>
    </div>
  );
}

const renderValue = (value, label) => (
  <div key={i++}>
    <span className="key">{label}</span>
    <span className="value">{String(value)}</span>
  </div>
);

const getValueRender = value => {
  if (Array.isArray(value)) {
    return renderArray;
  }
  if (typeof value === 'object') {
    return renderObject;
  }
  return renderValue;
}

export default AstCode;
