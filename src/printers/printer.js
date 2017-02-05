import format from './format';

export const print = (opts, ast) => ast
  .map(instruction => {
    if (!format[instruction.type]) {
      throw new Error(`Unsupported node type: ${instruction.type}`)
    }
    return format[instruction.type](opts, 0, instruction);
  })
  .join('\n') + '\n';
