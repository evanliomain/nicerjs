import { formaters, indent } from '../../helpers';

import * as Literal from '../Literal';

import { format as Identifier } from '../Identifier';

const f = formaters({
  ...Literal,
  Identifier
});


export const format = (opts, level, expression) => {
  if (expression.operator) {
    const left  = f(opts, 0, expression.left),
          right = f(opts, 0, expression.right);
    return indent(opts, level) + `${left} ${expression.operator} ${right}`;
  }

  return 'TODO';
}
