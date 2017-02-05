import * as helpers from './helpers';

describe('helpers', () => {
  describe('indent', () => {
    describe('when just indent is provided', () => {
      it('return an empty string', () => {
        expect(helpers.indent({ indent : 4 })).toBe('');
      });
    });

    describe('when a level is provided', () => {
      it('returns the indentation for the given level', () => {
        expect(helpers.indent({ indent : 2 }, 4)).toBe('        ');
        expect(helpers.indent({ indent : 3 }, 2)).toBe('      ');
      });
    });

    describe('when adding is provided', () => {
      it('adds the adding space of the given indentation', () => {
        expect(helpers.indent({ indent : 2 }, 4, 2)).toBe('          ');
        expect(helpers.indent({ indent : 3 }, 2, 1)).toBe('       ');
      });
    });
  });

  describe('indentLines', () => {
    describe('when no lines are provided', () => {
      it('returns an empty array', () => {
        expect(helpers.indentLines({ indent : 2 }, 2)).toEqual([]);
      });
    });

    describe('when an empty array of lines are provided', () => {
      it('returns an empty array', () => {
        expect(helpers.indentLines({ indent : 2 }, 2, [])).toEqual([]);
      });
    });

    describe('when some lines are provided', () => {
      it('indent all lines', () => {
        expect(helpers.indentLines(
          { indent : 2 },
          2,
          ['test1', 'test2', 'test3', 'test4']
        ))
        .toEqual(['    test1', '    test2', '    test3', '    test4']);
      });
    });
  });

  describe('endLine', () => {
    describe('when no params are provided', () => {
      it('returns an empty string', () => {
        expect(helpers.endLine()).toBe('');
      });
    });
    describe('when a caracter and a line are provided', () => {
      it('end the line with the caracter', () => {
        expect(helpers.endLine('%', 'azerty')).toBe('azerty%');
        expect(helpers.endLine(';', 'test = 1')).toBe('test = 1;');
      });
    });
  });

  describe('endLines', () => {
    describe('when no lines are provided', () => {
      it('returns an empty array', () => {
        expect(helpers.endLines('%')).toEqual([]);
      });
    });

    describe('when an empty array of lines are provided', () => {
      it('returns an empty array', () => {
        expect(helpers.endLines('%', [])).toEqual([]);
      });
    });

    describe('when some lines are provided', () => {
      it('ends all lines with caracter', () => {
        expect(helpers.endLines('%', ['test1', 'test2', 'test3', 'test4']))
          .toEqual(['test1%', 'test2%', 'test3%', 'test4%']);
      });
    });
  });

  describe('pad', () => {
    it('gives the completion of space to the varName reach the len', () => {
      expect(helpers.pad('test', 7)).toBe('   ');
    });
  });

  describe('space', () => {
    describe('when no params are provided', () => {
      it('returns an empty string', () => {
        expect(helpers.space()).toBe('');
      });
    });
    describe('when a nb is provided', () => {
      it('generate a string of nb space', () => {
        expect(helpers.space(1)).toBe(' ');
        expect(helpers.space(2)).toBe('  ');
        expect(helpers.space(5)).toBe('     ');
        expect(helpers.space(10)).toBe('          ');
      });
    });
  });

  describe('spaceLines', () => {
    describe('when no lines are provided', () => {
      it('returns an empty array', () => {
        expect(helpers.spaceLines(4)).toEqual([]);
      });
    });

    describe('when an empty array of lines are provided', () => {
      it('returns an empty array', () => {
        expect(helpers.spaceLines(4, [])).toEqual([]);
      });
    });

    describe('when some lines are provided', () => {
      it('start all lines with nb space', () => {
        expect(helpers.spaceLines(4, ['test1', 'test2', 'test3', 'test4']))
          .toEqual(['    test1', '    test2', '    test3', '    test4']);
      });
    });
  });
});
