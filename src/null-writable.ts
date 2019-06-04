/// <reference types="node" />

import {Writable} from "stream"

export class NullWritable extends Writable {
  _write(_chunk: any, _encoding: string, callback: (err?: Error) => void): void {
    callback()
  }
  _writev(_chunks: Array<{chunk: any; encoding: string}>, callback: (err?: Error) => void): void {
    callback()
  }
}

export default NullWritable
