'use strict'

const { AsyncObject } = require('@cuties/cutie')

class JWTOfRequest extends AsyncObject {
  constructor (request, tokenName) {
    super(request, tokenName || 'Bearer')
  }

  syncCall () {
    return (request, tokenName) => {
      return request.headers['authorization'].split(`${tokenName} `)[1]
    }
  }
}

module.exports = JWTOfRequest
