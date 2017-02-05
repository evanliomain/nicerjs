import { indent, indentLines, pad, spaceLines, endLine, endLines, formaters }
from '../../helpers';

import * as Literal    from '../Literal';
import * as Expression from '../Expression';
import { format as VariableDeclaration } from '../VariableDeclaration';
import { format as ExpressionStatement } from './ExpressionStatement';

const formatersLambda = {
  ...Literal,
  ...Expression,
  ExpressionStatement,
  VariableDeclaration
};

const f = formaters({
  ...formatersLambda,
  BlockStatement : (opts, level, init) => {
    return init.body
      .map(i => formaters(formatersLambda)(opts, level, i));
  }
});

export const format = (opts, level, init) => {
  const test = f(opts, level, init.test, true);
  const consequent = f(opts, 1, init.consequent, true);

  return indentLines(opts, level, [
    `if (${test}) {`,
    consequent,
    '}'
  ]).join('\n');
}
