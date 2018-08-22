# koa-verto

[![Package Quality][pq-image]][pq-link]
[![Build status][ci-image]][ci-url]
[![Coverage Status][coveralls-image]][coveralls-link]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![linted by sexy yo!][sexy-image]][sexy-url]
[![semantic-release][semantic-image]][semantic-url]
[![standard style][standard-image]][standard-url]
<!-- [![]] coverage -->


> Middleware that adds headers `X-Service-Name` & `X-Service-Version` to the response of [Koa][koalink]. Inspired by [koa-version-header][koa-version-header-link]

Tested with:
- Koa version `2.5.2`
- Node versions:
  - 10
  - 9
  - 8

## Installation

This is a [Node.js][nodejslink] module available through the
[npm registry][npmlink]. It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`][yarnlink]
command line tools.

```sh
npm install koa-verto --save
```

## Usage

```javascript
const Koa = require('koa');
const setVersionHeaders = require('koa-verto');

const app = new Koa();

app.use(setVersionHeaders());

app.listen(3000);

console.log('running on :3000, verify X-Service-Name, X-Service-Version headers')
```

If you want to specify custom service `name` or `version`:

```javascript
app.use(setVersionHeaders({
  name: 'my-cool-app',
  version: 'v11.1.2-alpha'
}));
```


## Tests

```sh
npm install
npm test
```

## License

MIT

Copyright 2018 &lt;kvl.olg@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[koalink]:https://github.com/koajs/koa
[nodejslink]:https://nodejs.org/
[npmlink]:https://www.npmjs.com/
[yarnlink]:https://yarnpkg.com/en/
[npm-icon]:https://nodei.co/npm/koa-verto.png?downloads=true
[npm-url]:https://npmjs.org/package/koa-verto
[ci-image]:https://travis-ci.org/oleg-koval/koa-verto.svg?branch=master
[ci-url]:https://travis-ci.org/oleg-koval/koa-verto
[greenkeeper-image]:https://badges.greenkeeper.io/oleg-koval/koa-verto.svg
[greenkeeper-url]:https://greenkeeper.io/
[sexy-image]:https://img.shields.io/badge/linted%20by-sexy%20yo!-brightgreen.svg
[sexy-url]:https://github.com/markelog/eslint-config-sexy
[semantic-image]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]:https://github.com/semantic-release/semantic-release
[standard-image]:https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]:http://standardjs.com/
[koa-version-header-link]:https://github.com/bahmutov/koa-version-header
[pq-image]:http://npm.packagequality.com/shield/koa-verto.svg
[pq-link]:http://packagequality.com/#?package=koa-verto
[coveralls-image]:https://coveralls.io/repos/github/oleg-koval/koa-verto/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/oleg-koval/koa-verto?branch=add-code-coverage
