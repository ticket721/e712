**[@ticket721/e712](../README.md)**

[Globals](../globals.md) › ["EIP712Signer"](../modules/_eip712signer_.md) › [EIP712Payload](_eip712signer_.eip712payload.md)

# Interface: EIP712Payload

Interface of the complete payload required for signing

## Hierarchy

* **EIP712Payload**

## Index

### Properties

* [domain](_eip712signer_.eip712payload.md#domain)
* [message](_eip712signer_.eip712payload.md#message)
* [primaryType](_eip712signer_.eip712payload.md#primarytype)
* [types](_eip712signer_.eip712payload.md#types)

## Properties

###  domain

• **domain**: *[EIP712Domain](_eip712signer_.eip712domain.md)*

*Defined in [EIP712Signer.ts:36](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L36)*

___

###  message

• **message**: *any*

*Defined in [EIP712Signer.ts:35](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L35)*

___

###  primaryType

• **primaryType**: *string*

*Defined in [EIP712Signer.ts:34](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L34)*

___

###  types

• **types**: *object*

*Defined in [EIP712Signer.ts:31](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L31)*

#### Type declaration:

* \[ **key**: *string*\]: [EIP712Struct](../modules/_eip712signer_.md#eip712struct)