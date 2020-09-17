# @iamnapo/get

> Get the value at a specific object (or string) path, without caring if it exists

[![build](https://img.shields.io/github/workflow/status/iamnapo/get/ci?style=for-the-badge&logo=github&label=)](https://github.com/iamnapo/get/actions) [![npm](https://img.shields.io/npm/v/@iamnapo/get.svg?style=for-the-badge&logo=npm&label=)](https://www.npmjs.com/package/@iamnapo/get) [![size](https://img.shields.io/bundlephobia/min/@iamnapo/get.svg?style=for-the-badge&label=size)](https://bundlephobia.com/result?p=@iamnapo/get) [![license](https://img.shields.io/github/license/iamnapo/get.svg?style=for-the-badge)](./LICENSE)

## Install

```sh
$ npm i @iamnapo/get
```

## Usage

```js
const get = require("@iamnapo/get");

get([4, 5], "[0]"); // => 4
get({ a: { b: 1 } }, "a.b"); // => 1
get({ a: { b: 1 } }, "a.c", "blah"); // => "blah"
get("napo", "[1]"); // => "a"
```

## API

### get(object, path, defaultValue?)

Get `path` of `object`, returning `defaultValue` if it doesn‘t exist.

#### object

Type: `object | Array | string`

Base object to get value from.

#### path

Type: `string`

Path to get value at.

#### defaultValue

Type: `string`\
Default: `undefined`

Return value if path doesn‘t exist.
