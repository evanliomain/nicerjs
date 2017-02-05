import { formaters } from '../../helpers';

import * as Literal from '../Literal';
import { format as BinaryExpression } from './BinaryExpression';

import { format as Identifier } from '../Identifier';

const f = formaters({
  ...Literal,
  BinaryExpression,
  Identifier
});


export const format = (opts, level, expression) => {
  const left  = _print(opts, level, expression.left),
        right = _print(opts, level, expression.right);

  return `${left} ${expression.operator} ${right}`;
}


function _print(opts, level, expression) {
  if ('LogicalExpression' === expression.type) {
    return format(opts, level, expression);
  }
  return f(opts, level, expression);
}
