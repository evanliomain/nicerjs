import { formaters, indent, indentLines, pad, spaceLines, endLine, endLines }
from '../helpers';

import { format as Identifier } from './Identifier';

import * as Literal    from './Literal';
import * as Expression from './Expression';


const f = formaters({
  Identifier,
  ...Literal,
  ...Expression
});


export const format = (opts, level, instruction) => {
  let result = '';

  const startKey = instruction.kind;

  result += `${indent(opts, level)}${instruction.kind} `;

  const maxVarName = Math.max(...instruction.declarations
  .map(({ id }) => id.name.length));

  const affectations = instruction.declarations
    .sort(compareDeclaration)
    .map(({ id, init }) => {
      if (!init) {
        return id.name;
      }

      return id.name
        + pad(id.name, maxVarName)
        + ' = '
        + f(opts, level, init);
    });

  const [firstAff, ...othersAff] = affectations;

  let lastAff = [
    `${startKey} ${firstAff}`,
    ...spaceLines(1 + startKey.length, othersAff)
  ];

  const firstsAff = lastAff.splice(0, lastAff.length - 1);

  const finalLines = [
    ...endLines(',', firstsAff),
    endLine(';', lastAff)
  ];

  return indentLines(opts, level, finalLines).join('\n');
}

function compareDeclaration(d1, d2) {
  if (null === d1.init && null === d2.init) {
    return d1.id.name < d2.id.name ? -1 : 1;
  }
  if (null === d1.init && null !== d2.init) {
    return -1;
  }
  if (null !== d1.init && null === d2.init) {
    return 1;
  }
  if (null !== d1.init && null !== d2.init) {
    return -1;
  }
}
