**[@ticket721/e712](../README.md)**

[Globals](../globals.md) › ["EIP712Signer"](_eip712signer_.md)

# External module: "EIP712Signer"

## Index

### Classes

* [EIP712Signer](../classes/_eip712signer_.eip712signer.md)

### Interfaces

* [EIP712Domain](../interfaces/_eip712signer_.eip712domain.md)
* [EIP712Payload](../interfaces/_eip712signer_.eip712payload.md)
* [EIP712Signature](../interfaces/_eip712signer_.eip712signature.md)
* [EIP712StructField](../interfaces/_eip712signer_.eip712structfield.md)

### Type aliases

* [EIP712Struct](_eip712signer_.md#eip712struct)

### Variables

* [B32Z](_eip712signer_.md#const-b32z)
* [EIP712DomainType](_eip712signer_.md#const-eip712domaintype)

## Type aliases

###  EIP712Struct

Ƭ **EIP712Struct**: *[EIP712StructField](../interfaces/_eip712signer_.eip712structfield.md)[]*

*Defined in [EIP712Signer.ts:15](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L15)*

User Defined Types are just an array of the fields they contain

## Variables

### `Const` B32Z

• **B32Z**: *"0x0000000000000000000000000000000000000000000000000000000000000000"* = "0x0000000000000000000000000000000000000000000000000000000000000000"

*Defined in [EIP712Signer.ts:71](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L71)*

Byte32 zero value

___

### `Const` EIP712DomainType

• **EIP712DomainType**: *object[]* =  [
    {
        'name': 'name',
        'type': 'string'
    },
    {
        'name': 'version',
        'type': 'string'
    },
    {
        'name': 'chainId',
        'type': 'uint256'
    },
    {
        'name': 'verifyingContract',
        'type': 'address'
    }
]

*Defined in [EIP712Signer.ts:49](https://github.com/ticket721/env/blob/f8a7220/packages/e712/sources/EIP712Signer.ts#L49)*

EIP712Domain Type, useful as it is always required inside the payload for the signature