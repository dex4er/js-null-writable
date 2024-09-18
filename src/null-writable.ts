/// <reference types="node" />

import {Writable} from "node:stream"

export class NullWritable extends Writable {
  _write(_chunk: any, _encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
    callback()
  }
  _writev?(_chunks: Array<{chunk: any; encoding: BufferEncoding}>, callback: (error?: Error | null) => void): void {
    callback()
  }
}

export default NullWritable
