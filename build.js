'use strict';

const { JSDOM } = require('jsdom');
const { writeFileSync } = require('fs');

const targets = process.argv.slice(2).map(target => target.split(':'));

const prefixes = {
  cjs: 'module.exports = ',
  es: 'export default '
};

const comment = `/**
 * This file was automatically generated from \`build.js\`.
 * Do not manually edit.
 */

`;

const url = 'https://html.spec.whatwg.org/multipage/syntax.html'

import('got').then(async ({ got }) => {
  const response = await got(url);
  const { window } = new JSDOM(response.body, { runScripts: 'dangerously' });
  const { document } = window;
  const codes = document.querySelector('dfn#void-elements')
    .parentNode
    .nextElementSibling
    .textContent
    .replace(/\s/gm,'')
    .split(",")
    .reduce((obj, code) => {
      obj[code] = true;
      return obj;
    }, {});
  for (const [file, format = 'cjs'] of targets) {
    writeFileSync(file, `${comment}${prefixes[format]}${JSON.stringify(codes, null, 2)};\n`);
    console.log('successfully created file: ', file);
  }
  window.close();
})
