'use strict'

const { AsyncObject } = require('@cuties/cutie')
const crypto = require('crypto')

class IsRS256JWTValid extends AsyncObject {
  constructor (token, publicKey) {
    super(token, publicKey)
  }

  syncCall () {
    return (token, publicKey) => {
      const parts = token.split('.')
      const header = this.base64UrlDecodeToJSON(parts[0])
      if (header.alg !== 'RS256' || header.typ !== 'JWT') {
        return false
      }
      const payload = this.base64UrlDecodeToJSON(parts[1])
      const signature = this.unescape(parts[2])
      const exp = payload.exp
      if (exp) {
        if (exp < new Date().getTime()) {
          return false
        }
      }
      return this.verifySignature(publicKey, `${parts[0]}.${parts[1]}`, signature)
    }
  }

  base64UrlDecodeToJSON (str) {
    return JSON.parse(
      Buffer.from(
        this.unescape(str), 'base64'
      ).toString('utf8')
    )
  }

  unescape (str) {
    return str.replace(/-/g, '+').replace(/_/g, '/')
  }

  verifySignature (publicKey, data, signature) {
    const verify = crypto.createVerify('RSA-SHA256')
    verify.update(data)
    return verify.verify(publicKey, signature, 'base64')
  }
}

module.exports = IsRS256JWTValid
