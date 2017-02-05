import { formaters } from '../../helpers';

import * as Literal    from '../Literal';
import * as Expression from '../Expression';

const f = formaters({
  ...Literal,
  ...Expression
});

export const format = (opts, level, init) => {
  return f(opts, level, init.expression);
}
