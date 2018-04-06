import { formaters, indentLines } from '../../helpers';

import * as Literal    from '../Literal';
import * as Expression from '../Expression';

import { format as Identifier } from '../Identifier';
import { format as VariableDeclaration } from '../VariableDeclaration';

import { format as BreakStatement } from './BreakStatement';

const f = formaters({
  ...Literal,
  ...Expression,
  BreakStatement,
  Identifier,
  VariableDeclaration
});

export const format = (opts, level, init) => {

  const discriminant = f(opts, level, init.discriminant);
  let cases = [];


  init.cases.forEach(caseStatement => {
    if (null === caseStatement.test) {
      cases = [
        ...cases,
        'default:'
      ];
    } else {
      const test = f(opts, level, caseStatement.test);
      cases = [
        ...cases,
        `case ${test}`
      ];
    }

      cases = [
        ...cases,
        ...caseStatement.consequent.map(consequent => {
          return f(opts, 1, consequent);
        })
      ];
  });

  return indentLines(opts, level, [
    `switch(${discriminant}) {`,
    ...cases,
    '}'
  ]).join('\n');
}
