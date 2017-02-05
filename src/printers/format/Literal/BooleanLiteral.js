import { indent } from '../../helpers';

export const format = (opts, level, expression) => {
  return indent(opts, level) + expression.value;
}
