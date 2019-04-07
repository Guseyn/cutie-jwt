
'use strict'

const { AsyncObject } = require('@cuties/cutie')

class JWTPayloadValue extends AsyncObject {
  constructor (token, key) {
    super(token, key)
  }

  syncCall () {
    return (token, key) => {
      const parts = token.split('.')
      const payload = this.base64UrlDecodeToJSON(parts[1])
      return payload[key]
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

module.exports = JWTPayloadValue
