import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('First Test, ', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('H1 should say Users', () => {
    const index = fs.readFileSync('./src/index.html', 'utf8');
    const {JSDOM} = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.querySelector('h1');
    expect(h1.innerHTML).to.equal('Users');
    dom.window.close();
  });
});
