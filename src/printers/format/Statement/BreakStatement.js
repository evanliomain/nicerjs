import { indent } from '../../helpers';

export const format = (opts, level, init) => {
  return indent(opts, level) + 'break;'
}
