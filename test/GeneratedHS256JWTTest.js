'use strict'

const { Assertion, StrictEqualAssertion } = require('@cuties/assert')
const { GeneratedHS256JWT } = require('./../index')
const { Value } = require('@cuties/object')
const { IsNumber, IsString } = require('@cuties/is')

new StrictEqualAssertion(
  new GeneratedHS256JWT(
    { sub: 'uniqueId' },
    'secret'
  ),
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1bmlxdWVJZCJ9.tYgT0dZ28m8cLJqX2hnCNmO48twxcLAqiXFkTIHOhio='
).call()

new Assertion(
  new IsNumber(
    new Value(
      new GeneratedHS256JWT(
        { sub: 'uniqueId' },
        'secret',
        15
      ).payloadWithExpiration({ sub: 'uniqueId' }, 15),
      'exp'
    )
  )
).call()

new Assertion(
  new IsString(
    new GeneratedHS256JWT(
      { sub: 'uniqueId' },
      'secret',
      15
    )
  )
).call()
