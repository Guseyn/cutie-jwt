'use strict'

const { Assertion, StrictEqualAssertion } = require('@cuties/assert')
const { GeneratedRS256JWT, IsRS256JWTValid } = require('./../index')
const { ReadDataByPath } = require('@cuties/fs')

new Assertion(
  new IsRS256JWTValid(
    new GeneratedRS256JWT(
      { sub: 'uniqueId' },
      new ReadDataByPath('./test/keys/private.pem')
    ),
    new ReadDataByPath('./test/keys/public.pem')
  )
).call()

new Assertion(
  new IsRS256JWTValid(
    new GeneratedRS256JWT(
      { sub: 'uniqueId' },
      new ReadDataByPath('./test/keys/private.pem'),
      15
    ),
    new ReadDataByPath('./test/keys/public.pem')
  )
).call()

new StrictEqualAssertion(
  new IsRS256JWTValid(
    new GeneratedRS256JWT(
      { sub: 'uniqueId' },
      new ReadDataByPath('./test/keys/private.pem'),
      -1
    ),
    new ReadDataByPath('./test/keys/public.pem')
  ),
  false
).call()

new StrictEqualAssertion(
  new IsRS256JWTValid(
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IldUIn0.eyJzdWIiOiJ1bmlxdWVJZCJ9.1wUn0qTcpaV1k_Hg4RNXyPVaAvVDIxu5-aWOA5iAz3wzZfeO76TQntAC1DzEoa_dA6CCE4BdebYzkB0IYZfcKh1ojQ1pKGE4lvO3BV7QJGew429mhPlfxv8TdE5pXU00CzAahWvfrmpCU_P1odev3hy6-YS4pgmGFREa9U0QzzwJZLYL1RTYh6JpV0Tz72jBfH1gCy9fLJBpZmygLRCmX5IPxxxVTHc1d1Pj6Uj1mfPGt2WBCriHEKQFZ5qsCnnFZHsLPNooL-XDdIDDIVheo0m_lHDjLDtHKp2T0XYZgxRiiOC3kcP7R9L3klLZU0xfjTZyQiIiJcQK_qsO_S2dSQ',
    new ReadDataByPath('./test/keys/public.pem')
  ),
  false
).call()
