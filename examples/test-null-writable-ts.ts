#!/usr/bin/env ts-node

import * as fs from 'fs'
import { Readable } from 'stream'

import { NullWritable } from '../lib/null-writable'

function main () {
  const filename = process.argv[1] || '/etc/hosts'
  const readableStream = fs.createReadStream(filename)

  const writableStream = new NullWritable()

  readableStream.on('end', () => {
    console.info('readable stream ended')
  })

  writableStream.on('finish', () => {
    console.info('writable stream finished')
  })

  readableStream.pipe(writableStream)
}

main()
