'use strict'

const { AsyncObject } = require('@cuties/cutie')
const crypto = require('crypto')

class IsHS256JWTValid extends AsyncObject {
  constructor (token, secret) {
    super(token, secret)
  }

  syncCall () {
    return (token, secret) => {
      const parts = token.split('.')
      const header = this.base64UrlDecodeToJSON(parts[0])
      if (header.alg !== 'HS256' || header.typ !== 'JWT') {
        return false
      }
      const payload = this.base64UrlDecodeToJSON(parts[1])
      const signature = parts[2]
      const exp = payload.exp
      if (exp) {
        if (exp < new Date().getTime()) {
          return false
        }
      }
      return this.generateSignature(`${parts[0]}.${parts[1]}`, secret) === signature
    }
  }

  base64UrlDecodeToJSON (str) {
    return JSON.parse(
      Buffer.from(
        this.escape(str), 'base64'
      ).toString('utf8')
    )
  }

  escape (str) {
    return str.replace(/-/g, '+').replace(/_/g, '/')
  }

  generateSignature (str, secret) {
    return crypto
      .createHmac('sha256', secret)
      .update(str)
      .digest('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  }
}

module.exports = IsHS256JWTValid
