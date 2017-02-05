import babylonOptions from '../../babylonOptions';
import { print } from '../../printers/printer';

const babylon = require('babylon');

const opts = {
  indent : 2
};

export const srcCode = (
  state = { srcCode : '// Code', astCode : {},  destCode : '// Code' },
  action
) => {
  switch (action.type) {
  case 'SRC_CODE_CHANGE':
    return {
      srcCode : action.srcCode,
      ...codeToAst(action.srcCode, state.astCode, state.destCode)
    };

  case 'RELOAD':
    return {
      srcCode : state.srcCode,
      ...codeToAst(state.srcCode, state.astCode, state.destCode)
    };

  default:
    return state;
  }
}

const codeToAst = (code, oldAst, oldDestCode) => {
  let newAst, newCode;
  try {
    newAst = babylon.parse(code, babylonOptions).program.body;
  } catch(e) {
    return {
      astCode : oldAst,
      error   : e.message
    };
  }

  try {
    newCode = print(opts, newAst);
  } catch(e) {
    console.error(e);
    return {
      astCode   : newAst,
      errorDest : e.message,
      destCode  : oldDestCode
    };
  }

  return {
    astCode  : newAst,
    destCode : newCode
  };
}
