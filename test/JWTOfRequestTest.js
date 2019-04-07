'use strict'

const { StrictEqualAssertion } = require('@cuties/assert')
const { JWTOfRequest } = require('./../index')

new StrictEqualAssertion(
  new JWTOfRequest(
    { headers: { authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1bmlxdWVJZCJ9.tYgT0dZ28m8cLJqX2hnCNmO48twxcLAqiXFkTIHOhio=' } }
  ),
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1bmlxdWVJZCJ9.tYgT0dZ28m8cLJqX2hnCNmO48twxcLAqiXFkTIHOhio='
).call()
