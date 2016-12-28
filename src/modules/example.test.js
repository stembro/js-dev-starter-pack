import {expect} from 'chai';
import {msg} from './example';

describe('import test', () => {
  it('should have the correct value for msg', () => {
    expect(msg).to.equal('example module');
  });
});