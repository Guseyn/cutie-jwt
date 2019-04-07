'use strict'

const { Assertion, StrictEqualAssertion } = require('@cuties/assert')
const { ReadDataByPath } = require('@cuties/fs')
const { GeneratedRS256JWT } = require('./../index')
const { Value } = require('@cuties/object')
const { IsNumber, IsString } = require('@cuties/is')

new StrictEqualAssertion(
  new GeneratedRS256JWT(
    { sub: 'uniqueId' },
    new ReadDataByPath('./test/keys/private.pem')
  ),
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1bmlxdWVJZCJ9.K-fEw11vWZu1Vl-rXC3ZB8YryC_15nNf3FFZvtMxm99_q6FSAscS0Cr0CGyUNsjBSN65aYv-UiK5qqNkY28Dt9Rvbu_oPJm1b_Wo-XfJx3qTJHc-etphn1AUAAtaY4D-Zk54vGSIA5-hgnfIBsP-zaoC-iJYk0z6-JFsJ6HbFGp6xrFX9sEV25aRHbkvJiCpbBoAvPWt35gM0NOFX5cDUPaHIyaviJO1LLqy2HVxs7xv0GLRpUBw1ZLpZIQmvUU3dXr5TBAHOR-iYhqf6TKiJU_gwFyicVO3ia2Rhqcqpu0fB_3DWGb-kzueY1wb09TxpxJV5k2MUTDiyq0RHccI5w=='
).call()

new Assertion(
  new IsNumber(
    new Value(
      new GeneratedRS256JWT(
        { sub: 'uniqueId' },
        new ReadDataByPath('./test/keys/private.pem'),
        15
      ).payloadWithExpiration({ sub: 'uniqueId' }, 15),
      'exp'
    )
  )
).call()

new Assertion(
  new IsString(
    new GeneratedRS256JWT(
      { sub: 'uniqueId' },
      new ReadDataByPath('./test/keys/private.pem'),
      15
    )
  )
).call()
