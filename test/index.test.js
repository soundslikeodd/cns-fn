import { describe, it } from 'mocha';
import sinon from 'sinon';
import assert from 'assert';
import cnsFn from '../src/index.js';

describe('cnsFn', () => {
  it('happy path', () => {
    const output = cnsFn('string', 'another');
    assert.equal(output, 'string another');
  });
  it('with null', () => {
    const output = cnsFn('string', null);
    assert.equal(output, 'string');
  });
  it('nothing', () => {
    const output = cnsFn();
    assert.equal(output, '');
  });
  it('with only null', () => {
    const output = cnsFn(null);
    assert.equal(output, '');
  });
  it('with number', () => {
    const output = cnsFn('not number', 4);
    assert.equal(output, 'not number 4');
  });
  it('with array', () => {
    const output = cnsFn('not number', [1, 2]);
    assert.equal(output, 'not number 1,2');
  });
  it('with object, print skipping', () => {
    const consoleSpy = sinon.spy(console, 'error'); // eslint-disable-line no-undef
    const output = cnsFn('string', {k1: 'value1', k2: 'value2'});
    assert(consoleSpy.calledOnce, true);
    assert.equal(output, 'string');
    consoleSpy.restore();
  });
});
