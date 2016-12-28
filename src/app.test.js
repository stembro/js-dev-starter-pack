import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('index.html heading', () => {
  it('should have the correct heading', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('JS Dev Starter Pack');
      done();
      window.close();
    });
  });
});