import { Readable, ReadableOptions } from 'stream'

interface MyReadableOptions extends ReadableOptions {
  lines?: number
  name?: string
  withError?: boolean
}

export default class MyReadable extends Readable {
  private n = 0

  constructor (private options: MyReadableOptions = {}) {
    // options.highWaterMark = 5
    super(options)
  }

  _read (_size: number): void {
    const lines = this.options.lines || 0

    if (this.n >= lines) {
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
