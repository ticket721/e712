import { EIP712DomainType, EIP712Payload, EIP712Signature, EIP712Signer, EIP712StructField } from './EIP712Signer';
import { BN }                                                                                from 'bn.js';
import { utils }                                                                             from 'ethers';

/**
 * @ignore
 */
export const MTKNTypes: { [key: string]: EIP712StructField[] } = {
    EIP712Domain: EIP712DomainType,

    mActors: [
        {
            name: 'signer',
            type: 'address'
        },
        {
            name: 'relayer',
            type: 'address'
        }
    ],

    mTxParams: [
        {
            name: 'nonce',
            type: 'uint256'
        },
        {
            name: 'gasLimit',
            type: 'uint256'
        },
        {
            name: 'gasPrice',
            type: 'uint256'
        },
        {
            name: 'reward',
            type: 'uint256'
        }
    ],

    mTransfer: [
        {
            name: 'recipient',
            type: 'address'
        },
        {
            name: 'amount',
            type: 'uint256'
        },

        {
            name: 'actors',
            type: 'mActors'
        },

        {
            name: 'txparams',
            type: 'mTxParams'
        }
    ],

    mApprove: [
        {
            name: 'spender',
            type: 'address'
        },
        {
            name: 'amount',
            type: 'uint256'
        },

        {
            name: 'actors',
            type: 'mActors'
        },

        {
            name: 'txparams',
            type: 'mTxParams'
        }
    ],

    mTransferFrom: [
        {
            name: 'sender',
            type: 'address'
        },
        {
            name: 'recipient',
            type: 'address'
        },
        {
            name: 'amount',
            type: 'uint256'
        },

        {
            name: 'actors',
            type: 'mActors'
        },

        {
            name: 'txparams',
            type: 'mTxParams'
        }
    ]
};

export interface MTKNActors {
    signer: string;
    relayer: string;
}

export interface MTKNTxParams {
    nonce: number | BN;
    gasLimit: number | BN;
    gasPrice: number | BN;
    reward: number | BN;
}

/**
 * @description Helper class to generate mTKN signatures
 */
export class MTKNSigner extends EIP712Signer {
    constructor(domain_name: string, domain_version: string, domain_chain_id: number, domain_contract: string) {
        super({
                name: domain_name,
                version: domain_version,
                chainId: domain_chain_id,
                verifyingContract: domain_contract
            },
            ['mActors', MTKNTypes.mActors],
            ['mTxParams', MTKNTypes.mTxParams],
            ['mTransfer', MTKNTypes.mTransfer],
            ['mApprove', MTKNTypes.mApprove],
            ['mTransferFrom', MTKNTypes.mTransferFrom],
        );
    }

    /**
     * @description Generates `transfer` signature or payload.
     *
     * @param recipient
     * @param amount
     * @param actors
     * @param txparams
     * @param private_key If provided, generates signature, otherwise generates payload
     */
    public async transfer(recipient: string, amount: number | BN, actors: MTKNActors, txparams: MTKNTxParams, private_key?: string): Promise<EIP712Signature | EIP712Payload> {
        if (private_key) {

            return this.sign(private_key, this.generatePayload({
                recipient,
                amount,
                actors,
                txparams
            }, 'mTransfer')) as Promise<EIP712Signature>;

        } else {

            return this.generatePayload({
                recipient,
                amount,
                actors,
                txparams
            }, 'mTransfer') as EIP712Payload;

        }
    }

    /**
     * @description Verifies `transfer` signature
     *
     * @param recipient
     * @param amount
     * @param actors
     * @param txparams
     * @param signature
     */
    public async verifyTransfer(recipient: string, amount: number | BN, actors: MTKNActors, txparams: MTKNTxParams, signature: string): Promise<boolean> {

        const payload = this.generatePayload({
            recipient,
            amount,
            actors,
            txparams
        }, 'mTransfer') as EIP712Payload;

        const signer = utils.getAddress(await this.verify(payload, signature));

        return signer === utils.getAddress(actors.signer);
    }

    /**
     * @description Generates `approve` signature or payload.
     *
     * @param spender
     * @param amount
     * @param actors
     * @param txparams
     * @param private_key If provided, generates signature, otherwise generates payload
     */
    public async approve(spender: string, amount: number | BN, actors: MTKNActors, txparams: MTKNTxParams, private_key?: string): Promise<EIP712Signature | EIP712Payload> {
        if (private_key) {

            return this.sign(private_key, this.generatePayload({
                spender,
                amount,
                actors,
                txparams
            }, 'mApprove')) as Promise<EIP712Signature>;

        } else {

            return this.generatePayload({
                spender,
                amount,
                actors,
                txparams
            }, 'mApprove') as EIP712Payload;

        }
    }

    /**
     * @description Verifies `approve` signature
     *
     * @param spender
     * @param amount
     * @param actors
     * @param txparams
     * @param signature
     */
    public async verifyApprove(spender: string, amount: number | BN, actors: MTKNActors, txparams: MTKNTxParams, signature: string): Promise<boolean> {

        const payload = this.generatePayload({
            spender,
            amount,
            actors,
            txparams
        }, 'mApprove') as EIP712Payload;

        const signer = utils.getAddress(await this.verify(payload, signature));

        return signer === utils.getAddress(actors.signer);
    }

    /**
     * @description Generates `transferFrom` signature or payload.
     *
     * @param sender
     * @param recipient
     * @param amount
     * @param actors
     * @param txparams
     * @param private_key If provided, generates signature, otherwise generates payload
     */
    public async transferFrom(sender: string, recipient: string, amount: number | BN, actors: MTKNActors, txparams: MTKNTxParams, private_key?: string): Promise<EIP712Signature | EIP712Payload> {
        if (private_key) {

            return this.sign(private_key, this.generatePayload({
                sender,
                recipient,
                amount,
                actors,
                txparams
            }, 'mTransferFrom')) as Promise<EIP712Signature>;

        } else {

            return this.generatePayload({
                sender,
                recipient,
                amount,
                actors,
                txparams
            }, 'mTransferFrom') as EIP712Payload;

        }
    }

    /**
     * @description Verifies `transferFrom` signature
     *
     * @param sender
     * @param recipient
     * @param amount
     * @param actors
     * @param txparams
     * @param signature
     */
    public async verifyTransferFrom(sender: string, recipient: string, amount: number | BN, actors: MTKNActors, txparams: MTKNTxParams, signature: string): Promise<boolean> {

        const payload = this.generatePayload({
            sender,
            recipient,
            amount,
            actors,
            txparams
        }, 'mTransferFrom') as EIP712Payload;

        const signer = utils.getAddress(await this.verify(payload, signature));

        return signer === utils.getAddress(actors.signer);
    }
}
