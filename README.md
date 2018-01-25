## null-writable

[![Build Status](https://secure.travis-ci.org/dex4er/js-null-writable.svg)](http://travis-ci.org/dex4er/js-null-writable) [![Coverage Status](https://coveralls.io/repos/github/dex4er/js-null-writable/badge.svg)](https://coveralls.io/github/dex4er/js-null-writable) [![npm](https://img.shields.io/npm/v/null-writable.svg)](https://www.npmjs.com/package/null-writable)

This module provides a
[`Writable`](https://nodejs.org/api/stream.html#stream_writable_streams) which
accepts all data and do nothing. It is like `/dev/null` for Node.js streams.

It implements `_writev` method so it is fast enough for buffered operations.

### Requirements

This module requires Node >= 4.

### Installation

```shell
npm install null-writable
```

### Usage

```js
const { NullWritable } = require('null-writable')
```

_Typescript:_

```ts
import { NullWritable } from 'null-writable'
```

#### constructor

```js
const stream = new NullWritable(options)
```

Create new `NullWritable` instance.

Options are the same as for `Writable` constructor, like ie. `highWaterMark`.

### License

Copyright (c) 2016-2017 Piotr Roszatycki <piotr.roszatycki@gmail.com>

[MIT](https://opensource.org/licenses/MIT)
