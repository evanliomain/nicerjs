import { print } from './printer';

import babylonOptions from '../babylonOptions';

const babylon = require('babylon');

const opts = {
  indent : 2
};

export const format = (text) => {
  let ast;
  try {
    ast = babylon.parse(text, babylonOptions).program.body;
  } catch(e) {
    console.log(e.message);
    return text;
  }
  return print(opts, ast);
}
