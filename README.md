# cutie-jwt

[![NPM Version](https://img.shields.io/npm/v/@cuties/jwt.svg)](https://npmjs.org/package/@cuties/jwt)
[![Build Status](https://travis-ci.org/Guseyn/cutie-jwt.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-jwt)
[![codecov](https://codecov.io/gh/Guseyn/cutie-jwt/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-jwt)

[Cutie](https://github.com/Guseyn/cutie) extension for generating and validating **JWT**. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-jwt/tree/master/test).

## Install

`npm install @cuties/jwt`

## Run test

`npm test`

## Run build

`npm run build`

## Async objects

**`GeneratedHS256JWT(payload, secret[, minutesFromNow])`**

Generates JWT using `HS256` algorithm. You can also use parameter `minutesFromNow` to set expiration time to `payload`(`payload` object will not be changed, it will be copied with set `exp` property).

**`IsHS256JWTValid(token, secret)`**

Validates `token` by `secret`. If it's valid this async object represents `true`, otherwise it represents `false`.

**`GeneratedRS256JWT(payload, privateKey[, minutesFromNow])`**

Generates JWT using `RS256` algorithm. You can also use parameter `minutesFromNow` to set expiration time to `payload`(`payload` object will not be changed, it will be copied with set `exp` property).

**`IsRS256JWTValid(token, publicKey)`**

Validates `token` by `publicKey`. If it's valid this async object represents `true`, otherwise it represents `false`.

**`JWTOfRequest(request[, tokenName])`**

Retrieves `JWT` from `Authorization` header of incoming request parsing by `tokenName`(by default it's `Bearer`).

**`JWTPayload(token)`**

Retrieves payload from `token`.

**`JWTPayloadValue(token, key)`**

Retrieves payload value from `token` by `key`.
