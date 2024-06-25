# null-writable

<!-- markdownlint-disable MD013 -->

[![GitHub](https://img.shields.io/github/v/release/dex4er/js-null-writable?display_name=tag&sort=semver)](https://github.com/dex4er/js-null-writable)
[![CI](https://github.com/dex4er/js-null-writable/actions/workflows/ci.yaml/badge.svg)](https://github.com/dex4er/js-null-writable/actions/workflows/ci.yaml)
[![Trunk Check](https://github.com/dex4er/js-null-writable/actions/workflows/trunk.yaml/badge.svg)](https://github.com/dex4er/js-null-writable/actions/workflows/trunk.yaml)
[![Coverage Status](https://coveralls.io/repos/github/dex4er/js-null-writable/badge.svg)](https://coveralls.io/github/dex4er/js-null-writable)
[![npm](https://img.shields.io/npm/v/null-writable.svg)](https://www.npmjs.com/package/null-writable)

<!-- markdownlint-enable MD013 -->

This module provides a
[`Writable`](https://nodejs.org/api/stream.html#stream_writable_streams) which
accepts all data and do nothing. It is like `/dev/null` for Node.js streams.

It implements `_writev` method so it is fast enough for buffered operations.

## Requirements

This module requires Node >= 16.

## Installation

```shell
npm install null-writable
```

_Additionally for Typescript:_

```shell
npm install -D @types/node
```

## Usage

```js
import NullWritable from "null-writable"
// or
import {NullWritable} from "null-writable"
```

### constructor

Create a new `NullWritable` instance.

Options are the same as for `Writable` constructor, like ie. `highWaterMark`.

## License

Copyright (c) 2018-2024 Piotr Roszatycki <mailto:piotr.roszatycki@gmail.com>

[MIT](https://opensource.org/licenses/MIT)
