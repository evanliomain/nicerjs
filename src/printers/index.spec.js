import { format } from './index';

const fs = require('fs');
const encoding = 'utf8';

const tests =
[...new Set(fs
  .readdirSync('./data-test')
  .map(file => file.replace(/([^-])-.*/, '$1')))
].forEach(testFile =>
  it(testFile, () => {
    const fileIn        = `./data-test/${testFile}-in.js`,
          fileOut       = `./data-test/${testFile}-out.js`,
          formattedCode = format(fs.readFileSync(fileIn, { encoding })),
          expectedCode  = fs.readFileSync(fileOut, { encoding });

    expect(formattedCode).toBe(expectedCode);
  })
);
