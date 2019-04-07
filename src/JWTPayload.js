
'use strict'

const { AsyncObject } = require('@cuties/cutie')

class JWTPayload extends AsyncObject {
  constructor (token) {
    super(token)
  }

  syncCall () {
    return (token) => {
      const parts = token.split('.')
      const payload = this.base64UrlDecodeToJSON(parts[1])
      return payload
    }
  }

  base64UrlDecodeToJSON (str) {
    return JSON.parse(
      Buffer.from(
        str.replace(/-/g, '+').replace(/_/g, '/'), 'base64'
      ).toString('utf8')
    )
  }
}

module.exports = JWTPayload
