const inquirer = require('inquirer')
const moment = require('moment')
const fs = require('fs-extra')
const path = require('path')

const START_DATE = '10-05-19'
const INTERVAL_COUNT = 2
const INTERVAL_PERIOD = 'week'

inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))

const start = moment(START_DATE, 'DD-MM-YY').startOf('day')
const now = moment().startOf('day')

const intervalDiff = now.diff(start, INTERVAL_PERIOD, true)
const nextInterval = Math.ceil(intervalDiff / INTERVAL_COUNT) * INTERVAL_COUNT

const next = start.clone().add(nextInterval, INTERVAL_PERIOD)

inquirer
  .prompt([
    {
      type: 'datetime',
      name: 'date',
      message: 'Release date:',
      format: ['dd', '/', 'mm', '/', 'yyyy', ' (', 'dddd', ')'],
      initial: next.toDate(),
    },
  ])
  .then(answers => {
    const _date = moment(answers.date)
    const dateFormatted = `${_date.format('DD-MM-YYYY')}`
    const filePath = path.resolve(__dirname, `src/issues/${dateFormatted}.md`)
    const imageDir = path.resolve(
      __dirname,
      `src/images/issues/${dateFormatted}`
    )
    return fs
      .pathExists(filePath)
      .then(exists => {
        if (exists)
          return console.log(`Issue "${dateFormatted}" already exists`)
        return fs.ensureFile(filePath)
      })
      .then(() => fs.ensureDir(imageDir))
      .then(() => {
        console.log(`Created issue "${dateFormatted}"`)
      })
  })
