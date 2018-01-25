'use strict'

const Writable = require('stream').Writable

class NullWritable extends Writable {
  _write (_chunk, _encoding, callback) {
    callback()
  }

  _writev (_chunks, callback) {
    callback()
  }
}

NullWritable.NullWritable = NullWritable
NullWritable.default = NullWritable

module.exports = NullWritable
