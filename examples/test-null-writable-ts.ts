#!/usr/bin/env -S node --experimental-specifier-resolution=node --no-warnings --loader ts-node/esm

import * as fs from "node:fs"

import NullWritable from "../src/null-writable.js"

function main(): void {
  const filename = process.argv[1] || "/etc/hosts"
  const readableStream = fs.createReadStream(filename)

  const writableStream = new NullWritable()

  readableStream.on("end", () => {
    console.info("readable stream ended")
  })

  writableStream.on("finish", () => {
    console.info("writable stream finished")
  })

  readableStream.pipe(writableStream)
}

main()
