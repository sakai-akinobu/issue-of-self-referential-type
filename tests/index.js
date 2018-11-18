const assert = require('assert');
const fs = require('fs');
const execSync = require('child_process').execSync;

describe('index.js', function() {
  it('check', function() {
    const value = execSync('npx flow check ./fixtures/input.js').toString();
    assert.strictEqual(value, 'Found 0 errors\n');
  });

  it('gen-flow-files', function() {
    const output = fs.readFileSync('./fixtures/output.js').toString();
    const value = execSync('npx flow gen-flow-files ./fixtures/input.js').toString();
    assert.strictEqual(value, output);
  });
});
