import { indent } from '../../helpers';

export const format = (opts, level, expression) =>
  indent(opts, level) + 'null';
