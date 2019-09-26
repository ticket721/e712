[@ticket721/e712](../README.md) › [Globals](../globals.md) › ["ERC2280Signer"](../modules/_erc2280signer_.md) › [ERC2280Signer](_erc2280signer_.erc2280signer.md)

# Class: ERC2280Signer

**`description`** Helper class to generate ERC2280 signatures

## Hierarchy

* [EIP712Signer](_eip712signer_.eip712signer.md)

  ↳ **ERC2280Signer**

## Index

### Constructors

* [constructor](_erc2280signer_.erc2280signer.md#constructor)

### Methods

* [approve](_erc2280signer_.erc2280signer.md#approve)
* [encode](_erc2280signer_.erc2280signer.md#encode)
* [generatePayload](_erc2280signer_.erc2280signer.md#generatepayload)
* [sign](_erc2280signer_.erc2280signer.md#sign)
* [transfer](_erc2280signer_.erc2280signer.md#transfer)
* [transferFrom](_erc2280signer_.erc2280signer.md#transferfrom)
* [verify](_erc2280signer_.erc2280signer.md#verify)
* [verifyApprove](_erc2280signer_.erc2280signer.md#verifyapprove)
* [verifyPayload](_erc2280signer_.erc2280signer.md#verifypayload)
* [verifyTransfer](_erc2280signer_.erc2280signer.md#verifytransfer)
* [verifyTransferFrom](_erc2280signer_.erc2280signer.md#verifytransferfrom)

## Constructors

###  constructor

\+ **new ERC2280Signer**(`domain_name`: string, `domain_version`: string, `domain_chain_id`: number, `domain_contract`: string): *[ERC2280Signer](_erc2280signer_.erc2280signer.md)*

*Overrides [EIP712Signer](_eip712signer_.eip712signer.md).[constructor](_eip712signer_.eip712signer.md#constructor)*

*Defined in [ERC2280Signer.ts:124](https://github.com/ticket721/e712/blob/8005f8c/sources/ERC2280Signer.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`domain_name` | string |
`domain_version` | string |
`domain_chain_id` | number |
`domain_contract` | string |

**Returns:** *[ERC2280Signer](_erc2280signer_.erc2280signer.md)*

## Methods

###  approve

▸ **approve**(`spender`: string, `amount`: number | BN, `actors`: [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md), `txparams`: [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md), `private_key?`: string): *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

*Defined in [ERC2280Signer.ts:203](https://github.com/ticket721/e712/blob/8005f8c/sources/ERC2280Signer.ts#L203)*

**`description`** Generates `approve` signature or payload.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`spender` | string | - |
`amount` | number &#124; BN | - |
`actors` | [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md) | - |
`txparams` | [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md) | - |
`private_key?` | string | If provided, generates signature, otherwise generates payload  |

**Returns:** *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

___

###  encode

▸ **encode**(`payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md), `verify`: boolean): *string*

*Inherited from [EIP712Signer](_eip712signer_.eip712signer.md).[encode](_eip712signer_.eip712signer.md#encode)*

*Defined in [EIP712Signer.ts:431](https://github.com/ticket721/e712/blob/8005f8c/sources/EIP712Signer.ts#L431)*

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

*Defined in [EIP712Signer.ts:502](https://github.com/ticket721/e712/blob/8005f8c/sources/EIP712Signer.ts#L502)*

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

*Defined in [EIP712Signer.ts:461](https://github.com/ticket721/e712/blob/8005f8c/sources/EIP712Signer.ts#L461)*

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

▸ **transfer**(`recipient`: string, `amount`: number | BN, `actors`: [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md), `txparams`: [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md), `private_key?`: string): *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

*Defined in [ERC2280Signer.ts:149](https://github.com/ticket721/e712/blob/8005f8c/sources/ERC2280Signer.ts#L149)*

**`description`** Generates `transfer` signature or payload.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`recipient` | string | - |
`amount` | number &#124; BN | - |
`actors` | [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md) | - |
`txparams` | [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md) | - |
`private_key?` | string | If provided, generates signature, otherwise generates payload  |

**Returns:** *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

___

###  transferFrom

▸ **transferFrom**(`sender`: string, `recipient`: string, `amount`: number | BN, `actors`: [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md), `txparams`: [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md), `private_key?`: string): *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

*Defined in [ERC2280Signer.ts:258](https://github.com/ticket721/e712/blob/8005f8c/sources/ERC2280Signer.ts#L258)*

**`description`** Generates `transferFrom` signature or payload.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sender` | string | - |
`recipient` | string | - |
`amount` | number &#124; BN | - |
`actors` | [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md) | - |
`txparams` | [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md) | - |
`private_key?` | string | If provided, generates signature, otherwise generates payload  |

**Returns:** *Promise‹[EIP712Signature](../interfaces/_eip712signer_.eip712signature.md) | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)›*

___

###  verify

▸ **verify**(`payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md), `signature`: string, `verify`: boolean): *Promise‹string›*

*Inherited from [EIP712Signer](_eip712signer_.eip712signer.md).[verify](_eip712signer_.eip712signer.md#verify)*

*Defined in [EIP712Signer.ts:490](https://github.com/ticket721/e712/blob/8005f8c/sources/EIP712Signer.ts#L490)*

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

▸ **verifyApprove**(`spender`: string, `amount`: number | BN, `actors`: [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md), `txparams`: [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md), `signature`: string): *Promise‹boolean›*

*Defined in [ERC2280Signer.ts:234](https://github.com/ticket721/e712/blob/8005f8c/sources/ERC2280Signer.ts#L234)*

**`description`** Verifies `approve` signature

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`spender` | string | - |
`amount` | number &#124; BN | - |
`actors` | [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md) | - |
`txparams` | [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md) | - |
`signature` | string |   |

**Returns:** *Promise‹boolean›*

___

###  verifyPayload

▸ **verifyPayload**(`payload`: [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)): *void*

*Inherited from [EIP712Signer](_eip712signer_.eip712signer.md).[verifyPayload](_eip712signer_.eip712signer.md#verifypayload)*

*Defined in [EIP712Signer.ts:417](https://github.com/ticket721/e712/blob/8005f8c/sources/EIP712Signer.ts#L417)*

Throws if provided payload does not match current settings

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md) | Payload to verify  |

**Returns:** *void*

___

###  verifyTransfer

▸ **verifyTransfer**(`recipient`: string, `amount`: number | BN, `actors`: [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md), `txparams`: [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md), `signature`: string): *Promise‹boolean›*

*Defined in [ERC2280Signer.ts:180](https://github.com/ticket721/e712/blob/8005f8c/sources/ERC2280Signer.ts#L180)*

**`description`** Verifies `transfer` signature

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`recipient` | string | - |
`amount` | number &#124; BN | - |
`actors` | [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md) | - |
`txparams` | [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md) | - |
`signature` | string |   |

**Returns:** *Promise‹boolean›*

___

###  verifyTransferFrom

▸ **verifyTransferFrom**(`sender`: string, `recipient`: string, `amount`: number | BN, `actors`: [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md), `txparams`: [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md), `signature`: string): *Promise‹boolean›*

*Defined in [ERC2280Signer.ts:292](https://github.com/ticket721/e712/blob/8005f8c/sources/ERC2280Signer.ts#L292)*

**`description`** Verifies `transferFrom` signature

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sender` | string | - |
`recipient` | string | - |
`amount` | number &#124; BN | - |
`actors` | [ERC2280Actors](../interfaces/_erc2280signer_.erc2280actors.md) | - |
`txparams` | [ERC2280TxParams](../interfaces/_erc2280signer_.erc2280txparams.md) | - |
`signature` | string |   |

**Returns:** *Promise‹boolean›*
