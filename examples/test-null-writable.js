#!/usr/bin/env node

import * as fs from "node:fs"

import NullWritable from "../lib/null-writable.js"

function main() {
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
