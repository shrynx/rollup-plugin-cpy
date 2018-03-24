import cpy from 'cpy'
import isObject from 'lodash.isobject'
import chalk from 'chalk'
import mkdirp from 'mkdirp'
import { name } from '../package.json'

const successMessage = (files, dest) =>
  console.log(`${chalk.green('Successfully copied')} ${files}  ->  ${dest}`)

const errorMessage = (files, dest, err) =>
  console.log(`${chalk.red('Error copying')} ${files}  ->  ${dest}
${err}
`)

const copyFiles = params => {
  const { files, dest, options } = params
  if (options && !isObject(options)) {
    throw new Error('options param (3rd param after files and dest) should be an object.')
  }

  const { verbose = false, ...restOptions } = options || {}

  mkdirp.sync(dest)
  cpy(files, dest, restOptions)
    .then(() => {
      if (verbose) {
        successMessage(files, dest)
      }
    })
    .catch(err => {
      throw new Error(errorMessage(files, dest, err))
    })
}

export default function(options) {
  return {
    name,
    onwrite: () => {
      if (Array.isArray(options)) {
        options.forEach(option => {
          copyFiles(option)
        })
      } else {
        copyFiles(options)
      }
    },
  }
}
