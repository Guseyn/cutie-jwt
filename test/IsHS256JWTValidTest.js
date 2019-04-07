'use strict'

const { Assertion, StrictEqualAssertion } = require('@cuties/assert')
const { GeneratedHS256JWT, IsHS256JWTValid } = require('./../index')

new Assertion(
  new IsHS256JWTValid(
    new GeneratedHS256JWT(
      { sub: 'uniqueId' },
      'secret'
    ),
    'secret'
  )
).call()

new Assertion(
  new IsHS256JWTValid(
    new GeneratedHS256JWT(
      { sub: 'uniqueId' },
      'secret',
      15
    ),
    'secret'
  )
).call()

new StrictEqualAssertion(
  new IsHS256JWTValid(
    new GeneratedHS256JWT(
      { sub: 'uniqueId' },
      'secret',
      -1
    ),
    'secret'
  ),
  false
).call()

new StrictEqualAssertion(
  new IsHS256JWTValid(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.WjuQmL3rbYrh1k_rfUQo206pNKIKh2p9W7fyjunOiC0',
    'secret'
  ),
  false
).call()
