**[@ticket721/e712](../README.md)**

[Globals](../globals.md) › ["EIP712Signer"](../modules/_eip712signer_.md) › [EIP712Signer](_eip712signer_.eip712signer.md)

# Class: EIP712Signer

Helper class that takes types, domain and primary when built and is able to verify provided arguments, sign payload and verify signatures
This class should be extended by a custom class.

## Hierarchy

* **EIP712Signer**

  * [MTKNSigner](_mtknsigner_.mtknsigner.md)

## Index

### Constructors

* [constructor](_eip712signer_.eip712signer.md#constructor)

### Methods

* [encode](_eip712signer_.eip712signer.md#encode)
* [generatePayload](_eip712signer_.eip712signer.md#generatepayload)
* [sign](_eip712signer_.eip712signer.md#sign)
* [verify](_eip712signer_.eip712signer.md#verify)
* [verifyPayload](_eip712signer_.eip712signer.md#verifypayload)

## Constructors

###  constructor

\+ **new EIP712Signer**(`domain`: [EIP712Domain](../interfaces/_eip712signer_.eip712domain.md), ...`types`: [string, [EIP712Struct](../modules/_eip712signer_.md#eip712struct)][]): *[EIP712Signer](_eip712signer_.eip712signer.md)*

*Defined in [EIP712Signer.ts:389](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L389)*

Sets all information related to the signatures that will be generated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domain` | [EIP712Domain](../interfaces/_eip712signer_.eip712domain.md) | Domain structure |
`...types` | [string, [EIP712Struct](../modules/_eip712signer_.md#eip712struct)][] | Arrays containing name and fields  |

**Returns:** *[EIP712Signer](_eip712signer_.eip712signer.md)*

## Methods

###  encode

▸ **encode**(`payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md), `verify`: boolean): *string*

*Defined in [EIP712Signer.ts:431](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L431)*

Encode the given payload

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`payload` | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md) | - | Payload to encode |
`verify` | boolean | false | True if verifications should be made  |

**Returns:** *string*

___

###  generatePayload

▸ **generatePayload**(`data`: any, `primaryType`: string): *[EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)*

*Defined in [EIP712Signer.ts:502](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L502)*

Helper that generates a complete payload, ready for signature (should work with web3, metamask etc)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | any | Message field in the generated payload |
`primaryType` | string | Main type of given data  |

**Returns:** *[EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)*

___

###  sign

▸ **sign**(`privateKey`: string, `payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md), `verify`: boolean): *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md)›*

*Defined in [EIP712Signer.ts:461](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L461)*

Sign the given payload

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`privateKey` | string | - | Private key to use |
`payload` | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md) | - | Payload to sign |
`verify` | boolean | false | True if verifications should be made  |

**Returns:** *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md)›*

___

###  verify

▸ **verify**(`payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md), `signature`: string, `verify`: boolean): *Promise‹string›*

*Defined in [EIP712Signer.ts:490](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L490)*

Verifies the given signature

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`payload` | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md) | - | Payload used to generate the signature |
`signature` | string | - | Signature to verify |
`verify` | boolean | false | True if payload verifications should be made  |

**Returns:** *Promise‹string›*

___

###  verifyPayload

▸ **verifyPayload**(`payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)): *void*

*Defined in [EIP712Signer.ts:417](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L417)*

Throws if provided payload does not match current settings

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md) | Payload to verify  |

**Returns:** *void*