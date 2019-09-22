**[@ticket721/e712](../README.md)**

[Globals](../globals.md) › ["MTKNSigner"](../modules/_mtknsigner_.md) › [MTKNSigner](_mtknsigner_.mtknsigner.md)

# Class: MTKNSigner

**`description`** Helper class to generate mTKN signatures

## Hierarchy

* [EIP712Signer](_eip712signer_.eip712signer.md)

  * **MTKNSigner**

## Index

### Constructors

* [constructor](_mtknsigner_.mtknsigner.md#constructor)

### Methods

* [approve](_mtknsigner_.mtknsigner.md#approve)
* [encode](_mtknsigner_.mtknsigner.md#encode)
* [generatePayload](_mtknsigner_.mtknsigner.md#generatepayload)
* [sign](_mtknsigner_.mtknsigner.md#sign)
* [transfer](_mtknsigner_.mtknsigner.md#transfer)
* [transferFrom](_mtknsigner_.mtknsigner.md#transferfrom)
* [verify](_mtknsigner_.mtknsigner.md#verify)
* [verifyApprove](_mtknsigner_.mtknsigner.md#verifyapprove)
* [verifyPayload](_mtknsigner_.mtknsigner.md#verifypayload)
* [verifyTransfer](_mtknsigner_.mtknsigner.md#verifytransfer)
* [verifyTransferFrom](_mtknsigner_.mtknsigner.md#verifytransferfrom)

## Constructors

###  constructor

\+ **new MTKNSigner**(`domain_name`: string, `domain_version`: string, `domain_chain_id`: number, `domain_contract`: string): *[MTKNSigner](_mtknsigner_.mtknsigner.md)*

*Overrides [EIP712Signer](_eip712signer_.eip712signer.md).[constructor](_eip712signer_.eip712signer.md#constructor)*

*Defined in [MTKNSigner.ts:124](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/MTKNSigner.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`domain_name` | string |
`domain_version` | string |
`domain_chain_id` | number |
`domain_contract` | string |

**Returns:** *[MTKNSigner](_mtknsigner_.mtknsigner.md)*

## Methods

###  approve

▸ **approve**(`spender`: string, `amount`: number | BN, `actors`: [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md), `txparams`: [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md), `private_key?`: string): *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

*Defined in [MTKNSigner.ts:203](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/MTKNSigner.ts#L203)*

**`description`** Generates `approve` signature or payload.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`spender` | string | - |
`amount` | number \| BN | - |
`actors` | [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md) | - |
`txparams` | [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md) | - |
`private_key?` | string | If provided, generates signature, otherwise generates payload  |

**Returns:** *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

___

###  encode

▸ **encode**(`payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md), `verify`: boolean): *string*

*Inherited from [EIP712Signer](_eip712signer_.eip712signer.md).[encode](_eip712signer_.eip712signer.md#encode)*

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

*Inherited from [EIP712Signer](_eip712signer_.eip712signer.md).[generatePayload](_eip712signer_.eip712signer.md#generatepayload)*

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

*Inherited from [EIP712Signer](_eip712signer_.eip712signer.md).[sign](_eip712signer_.eip712signer.md#sign)*

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

###  transfer

▸ **transfer**(`recipient`: string, `amount`: number | BN, `actors`: [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md), `txparams`: [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md), `private_key?`: string): *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

*Defined in [MTKNSigner.ts:149](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/MTKNSigner.ts#L149)*

**`description`** Generates `transfer` signature or payload.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`recipient` | string | - |
`amount` | number \| BN | - |
`actors` | [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md) | - |
`txparams` | [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md) | - |
`private_key?` | string | If provided, generates signature, otherwise generates payload  |

**Returns:** *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

___

###  transferFrom

▸ **transferFrom**(`sender`: string, `recipient`: string, `amount`: number | BN, `actors`: [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md), `txparams`: [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md), `private_key?`: string): *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

*Defined in [MTKNSigner.ts:258](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/MTKNSigner.ts#L258)*

**`description`** Generates `transferFrom` signature or payload.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sender` | string | - |
`recipient` | string | - |
`amount` | number \| BN | - |
`actors` | [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md) | - |
`txparams` | [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md) | - |
`private_key?` | string | If provided, generates signature, otherwise generates payload  |

**Returns:** *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

___

###  verify

▸ **verify**(`payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md), `signature`: string, `verify`: boolean): *Promise‹string›*

*Inherited from [EIP712Signer](_eip712signer_.eip712signer.md).[verify](_eip712signer_.eip712signer.md#verify)*

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

###  verifyApprove

▸ **verifyApprove**(`spender`: string, `amount`: number | BN, `actors`: [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md), `txparams`: [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md), `signature`: string): *Promise‹boolean›*

*Defined in [MTKNSigner.ts:234](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/MTKNSigner.ts#L234)*

**`description`** Verifies `approve` signature

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`spender` | string | - |
`amount` | number \| BN | - |
`actors` | [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md) | - |
`txparams` | [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md) | - |
`signature` | string |   |

**Returns:** *Promise‹boolean›*

___

###  verifyPayload

▸ **verifyPayload**(`payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)): *void*

*Inherited from [EIP712Signer](_eip712signer_.eip712signer.md).[verifyPayload](_eip712signer_.eip712signer.md#verifypayload)*

*Defined in [EIP712Signer.ts:417](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L417)*

Throws if provided payload does not match current settings

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md) | Payload to verify  |

**Returns:** *void*

___

###  verifyTransfer

▸ **verifyTransfer**(`recipient`: string, `amount`: number | BN, `actors`: [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md), `txparams`: [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md), `signature`: string): *Promise‹boolean›*

*Defined in [MTKNSigner.ts:180](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/MTKNSigner.ts#L180)*

**`description`** Verifies `transfer` signature

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`recipient` | string | - |
`amount` | number \| BN | - |
`actors` | [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md) | - |
`txparams` | [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md) | - |
`signature` | string |   |

**Returns:** *Promise‹boolean›*

___

###  verifyTransferFrom

▸ **verifyTransferFrom**(`sender`: string, `recipient`: string, `amount`: number | BN, `actors`: [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md), `txparams`: [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md), `signature`: string): *Promise‹boolean›*

*Defined in [MTKNSigner.ts:292](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/MTKNSigner.ts#L292)*

**`description`** Verifies `transferFrom` signature

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sender` | string | - |
`recipient` | string | - |
`amount` | number \| BN | - |
`actors` | [MTKNActors](../interfaces/_mtknsigner_.mtknactors.md) | - |
`txparams` | [MTKNTxParams](../interfaces/_mtknsigner_.mtkntxparams.md) | - |
`signature` | string |   |

**Returns:** *Promise‹boolean›*