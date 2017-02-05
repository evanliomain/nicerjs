
export const formaters = funcs => (opts, level, code, debug) => {
  if (debug) {
    console.log('formaters.code.type', code.type, funcs[code.type]);
  }
  if (!code.type) {
    return '';
  }
  if (undefined === funcs[code.type]) {
    throw new Error(`Undefined type ${code.type}`);
  }
  if ('function' !== typeof funcs[code.type]) {
    throw new Error(`${code.type} is not a function`);
  }
  return funcs[code.type](opts, level, code);
}


export const indent = ({ indent }, level = 0, adding = 0) =>
  space(indent * level + adding)

export const indentLines = (opts, level = 0, lines = []) =>
  lines.map(line => `${indent(opts, level)}${line}`)

export const space = (nb = 0) => {
  let result  = '';

  for (let i = 0; i < nb; i++) {
    result += ' ';
  }

  return result;
}

export const spaceLines = (nb, lines = []) =>
  lines.map(line => `${space(nb)}${line}`);

export const pad = (varName, len) =>
  space(len - varName.length);

export const endLine = (caracter = '', line = '') =>
  `${line}${caracter}`;

export const endLines = (caracter, lines = []) =>
  lines.map(line => endLine(caracter, line));
