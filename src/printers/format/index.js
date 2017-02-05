
import { format as Identifier } from './Identifier';
import { format as VariableDeclaration } from './VariableDeclaration';

import * as Literal    from './Literal';
import * as Statement  from './Statement';
import * as Expression from './Expression';

export default {
  Identifier,
  VariableDeclaration,
  ...Literal,
  ...Expression,
  ...Statement
};
