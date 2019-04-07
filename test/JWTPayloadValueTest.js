'use strict'

const { StrictEqualAssertion } = require('@cuties/assert')
const { JWTPayloadValue } = require('./../index')

new StrictEqualAssertion(
  new JWTPayloadValue(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1bmlxdWVJZCJ9.tYgT0dZ28m8cLJqX2hnCNmO48twxcLAqiXFkTIHOhio=',
    'sub'
  ),
  'uniqueId'
).call()
