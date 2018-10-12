# rollup-plugin-cpy

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT License](https://img.shields.io/npm/l/rollup-plugin-cpy.svg?style=flat-square)](https://github.com/shrynx/rollup-plugin-cpy/blob/master/LICENSE)
![rollup-plugin-cpy-status](https://david-dm.org/shrynx/rollup-plugin-cpy.svg?path=packages/rollup-plugin-cpy)
[![npm version](https://badge.fury.io/js/rollup-plugin-cpy.svg)](https://badge.fury.io/js/rollup-plugin-cpy)

> rollup plugin to easily copy files and folders.

## Installation

* yarn

```sh
yarn add -D rollup-plugin-cpy
```

* npm

```sh
npm i -D rollup-plugin-cpy
```

## Usage

This plugin uses [cpy](https://github.com/sindresorhus/cpy) by [@sindresorhus](https://github.com/sindresorhus).

All the options map to the `cpy` package apart from `verbose`.

It takes a config object

```js
{
  files: string | glob | Array<string & glob>
  dest: string,
  options: {
    verbose: boolean,
    ...restOptions
  }
}
```

The verbose option if set to true print out each file copying log on console.

`restOptions` are same as [options passed to cpy](https://github.com/sindresorhus/cpy#options)

```js
import copy from 'rollup-plugin-cpy'

...

plugins: [
  ...
  copy({
    files: ['src/*.png', '!src/goat.png'],
    dest: 'dist',
    options: {
      verbose: true,
      ...
    }
  })
]

...
```

It can also take an array of [above mentioned config object](#usage)

```js
import copy from 'rollup-plugin-cpy'

...

plugins: [
  ...
  copy([
        { files: 'src/**/*.png', dest: './dist/images' },
        { files: 'src/**/*.mp3', dest: './dist/audio' },
        { files: 'src/**/*.webm', dest: './dist/video' },
      ]),
]

...
```
