'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { JWTPayload } = require('./../index')

new DeepStrictEqualAssertion(
  new JWTPayload(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1bmlxdWVJZCJ9.tYgT0dZ28m8cLJqX2hnCNmO48twxcLAqiXFkTIHOhio='
  ),
  { sub: 'uniqueId' }
).call()
