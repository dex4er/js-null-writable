const Readable = require('stream').Readable

class MyReadable extends Readable {
  constructor (options) {
    // options.highWaterMark = 5
    super(options)
    this.options = options || {}
    this.n = 0
  }
  _read () {
    if (this.n >= this.options.lines) {
      if (this.options.withError) {
        process.nextTick(() => this.emit('error', new Error(this.options.name)))
      } else {
        this.push(null)
      }
    } else {
      this.push(`line ${++this.n}\n`)
    }
  }
}

module.exports = MyReadable
