'use strict'

const t = require('tap')
require('tap-given')(t)

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
chai.should()

const MyReadable = require('./lib/my-readable')
const NullWritable = require('../lib/null-writable')

Feature('Test null-writable module', () => {
  Scenario('Write a line to writable', () => {
    let canWrite = false
    let writable

    Given('writable stream', () => {
      writable = new NullWritable()
    })

    When('I write one line to writable', (done) => {
      canWrite = writable.write('line\n', done)
    })

    Then('still can write to stream', () => {
      return canWrite.should.be.true
    })
  })

  Scenario('Write more lines to writable', () => {
    let canWrite = false
    let writable

    Given('writable stream', () => {
      writable = new NullWritable()
    })

    When('I cork writable', () => {
      writable.cork()
    })

    And('I write one line to writable', () => {
      writable.write('line\n')
    })

    And('I write another line to writable', () => {
      canWrite = writable.write('line\n')
    })

    And('I uncork writable', () => {
      writable.uncork()
    })

    Then('still can write to stream', () => {
      return canWrite.should.be.true
    })
  })

  Scenario('Pipe readable to writable', () => {
    let ended = false
    let finished = false
    let readable
    let writable

    Given('readable stream', () => {
      readable = new MyReadable({ name: 'readable', lines: 10 })
    })

    And('writable stream', () => {
      writable = new NullWritable()
    })

    When('waiting for end event from readable', () => {
      readable.once('end', () => {
        ended = true
      })
    })

    And('waiting for finish event from writable', () => {
      writable.once('finish', () => {
        finished = true
      })
    })

    And('readable is piped to writable', (done) => {
      writable.once('finish', done)
      readable.pipe(writable)
    })

    Then('readable is ended', () => {
      return ended.should.be.true
    })

    And('writable is ended', () => {
      return finished.should.be.true
    })
  })

  Scenario('Pipe readable with error to writable', () => {
    let ended = false
    let errored = false
    let readable
    let writable

    Given('readable stream', () => {
      readable = new MyReadable({ name: 'readable', lines: 10, withError: true })
    })

    And('writable stream', () => {
      writable = new NullWritable()
    })

    When('waiting for end event from readable', () => {
      readable.once('end', () => {
        ended = true
      })
    })

    And('waiting for error event from readable', () => {
      readable.once('error', (err) => {
        errored = err
      })
    })

    And('readable is piped to writable', (done) => {
      readable.once('error', (_err) => done())
      readable.pipe(writable)
    })

    Then('readable is not ended', () => {
      return ended.should.be.false
    })

    And('writable is ended', () => {
      return errored.should.be.an.instanceof(Error)
    })
  })
})
