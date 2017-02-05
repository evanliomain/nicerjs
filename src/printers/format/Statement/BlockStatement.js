import { formaters } from '../../helpers';

import * as Literal    from '../Literal';
import * as Expression from '../Expression';

import { format as BlockStatement } from './BlockStatement';
import { format as ExpressionStatement } from './ExpressionStatement';


const f = formaters({
  ...Literal,
  ...Expression,
  IfStatement,
  ExpressionStatement,
  BlockStatement
});

export const BlockStatement = (opts, level, init) => {
  return f(opts, level, init.body);
}
