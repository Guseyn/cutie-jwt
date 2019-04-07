'use strict'

const { AsyncObject } = require('@cuties/cutie')
const crypto = require('crypto')

class GeneratedRS256JWT extends AsyncObject {
  constructor (payload, privateKey, minutesFromNow) {
    super(payload, privateKey, minutesFromNow)
  }

  syncCall () {
    return (payload, privateKey, minutesFromNow) => {
      const header = {
        alg: 'RS256',
        typ: 'JWT'
      }
      const encodedHeaderInBase64 = this.base64UrlEncodeJSON(header)
      const encodedPayloadInBase64 = this.base64UrlEncodeJSON(
        minutesFromNow ? this.payloadWithExpiration(payload, minutesFromNow) : payload
      )
      const encodedSignatureInBase64 = this.generateSignature(
        `${encodedHeaderInBase64}.${encodedPayloadInBase64}`, privateKey
      )
      return `${encodedHeaderInBase64}.${encodedPayloadInBase64}.${encodedSignatureInBase64}`
    }
  }

  payloadWithExpiration (payload, minutesFromNow) {
    const payloadWithExpiration = Object.assign({}, payload)
    let date = new Date()
    date.setMinutes(date.getMinutes() + minutesFromNow)
    payloadWithExpiration.exp = date.getTime()
    return payloadWithExpiration
  }

  base64UrlEncodeJSON (json) {
    return Buffer.from(
      JSON.stringify(json)
    ).toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  }

  generateSignature (str, privateKey) {
    const sign = crypto.createSign('RSA-SHA256')
    sign.update(str)
    return sign.sign(privateKey, 'base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  }
}

module.exports = GeneratedRS256JWT
