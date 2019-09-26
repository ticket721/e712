import { ERC2280Signer, ERC2280Types }    from './ERC2280Signer';
import { Wallet }                         from 'ethers';
import { BN }                             from 'bn.js';
import { expect }                         from 'chai';
import { EIP712Payload, EIP712Signature } from './EIP712Signer';

const domain_name = 'my ERC2280';
const domain_version = '1';
const domain_chain_id = 1;
const domain_contract = '0xd0a21D06befee2C5851EbafbcB1131d35B135e87';

const transfer_recipient = '0x19C8239E04ceA1B1C0342E6da5cF3a5Ca54874e1';
const approve_spender = '0x19C8239E04ceA1B1C0342E6da5cF3a5Ca54874e1';
const transfer_from_recipient = '0x19C8239E04ceA1B1C0342E6da5cF3a5Ca54874e1';
const transfer_from_sender = '0x19C8239E04ceA1B1C0342E6da5cF3a5Ca54874e1';
const address_zero = '0x0000000000000000000000000000000000000000';

const my_web3_browser_address = '0x19C8239E04ceA1B1C0342E6da5cF3a5Ca54874e1';

describe('ERC2280', function (): void {

    it('build the ERC2280Signer class', function (): void {
        const ERC2280 = new ERC2280Signer(domain_name, domain_version, domain_chain_id, domain_contract);
        expect(ERC2280).to.exist;
    });

    it('transfer (with pk) + verifyTransfer of result', async function (): Promise<void> {
        const ERC2280 = new ERC2280Signer(domain_name, domain_version, domain_chain_id, domain_contract);
        const wallet = Wallet.createRandom();

        const sig: EIP712Signature = await ERC2280.transfer(transfer_recipient, new BN(1000), {
            signer: wallet.address,
            relayer: address_zero
        }, {
            nonce: new BN(0),
            gasLimit: new BN(1000000),
            gasPrice: 1000000,
            reward: 500
        }, wallet.privateKey) as EIP712Signature;

        expect(sig.hex).to.exist;
        expect(sig.r).to.exist;
        expect(sig.v).to.exist;
        expect(sig.s).to.exist;

        const verification = await ERC2280.verifyTransfer(transfer_recipient, new BN(1000), {
            signer: wallet.address,
            relayer: address_zero
        }, {
            nonce: new BN(0),
            gasLimit: new BN(1000000),
            gasPrice: 1000000,
            reward: 500
        }, sig.hex);

        expect(verification).to.equal(true);

    });

    it('transfer (without pk)', async function (): Promise<void> {
        const ERC2280 = new ERC2280Signer(domain_name, domain_version, domain_chain_id, domain_contract);

        const payload: EIP712Payload = await ERC2280.transfer(transfer_recipient, new BN(1000), {
            signer: my_web3_browser_address,
            relayer: address_zero
        }, {
            nonce: new BN(0),
            gasLimit: new BN(1000000),
            gasPrice: 1000000,
            reward: 500
        }) as EIP712Payload;

        expect(payload.domain).to.deep.equal({ name: 'my ERC2280',
            version: '1',
            chainId: 1,
            verifyingContract: '0xd0a21D06befee2C5851EbafbcB1131d35B135e87' });
        expect(payload.primaryType).to.equal('mTransfer');

        const {
            mTransferFrom,
            mApprove,
            ...used_types
        } = ERC2280Types;

        expect(payload.types).to.deep.equal(used_types);

    });

    it('approve (with pk) + verifyApprove of result', async function (): Promise<void> {
        const ERC2280 = new ERC2280Signer(domain_name, domain_version, domain_chain_id, domain_contract);
        const wallet = Wallet.createRandom();

        const sig: EIP712Signature = await ERC2280.approve(approve_spender, new BN(1000), {
            signer: wallet.address,
            relayer: address_zero
        }, {
            nonce: new BN(0),
            gasLimit: new BN(1000000),
            gasPrice: 1000000,
            reward: 500
        }, wallet.privateKey) as EIP712Signature;

        expect(sig.hex).to.exist;
        expect(sig.r).to.exist;
        expect(sig.v).to.exist;
        expect(sig.s).to.exist;

        const verification = await ERC2280.verifyApprove(approve_spender, new BN(1000), {
            signer: wallet.address,
            relayer: address_zero
        }, {
            nonce: new BN(0),
            gasLimit: new BN(1000000),
            gasPrice: 1000000,
            reward: 500
        }, sig.hex);

        expect(verification).to.equal(true);

    });

    it('approve (without pk)', async function (): Promise<void> {
        const ERC2280 = new ERC2280Signer(domain_name, domain_version, domain_chain_id, domain_contract);

        const payload: EIP712Payload = await ERC2280.approve(approve_spender, new BN(1000), {
            signer: my_web3_browser_address,
            relayer: address_zero
        }, {
            nonce: new BN(0),
            gasLimit: new BN(1000000),
            gasPrice: 1000000,
            reward: 500
        }) as EIP712Payload;

        expect(payload.domain).to.deep.equal({ name: 'my ERC2280',
            version: '1',
            chainId: 1,
            verifyingContract: '0xd0a21D06befee2C5851EbafbcB1131d35B135e87' });
        expect(payload.primaryType).to.equal('mApprove');

        const {
            mTransferFrom,
            mTransfer,
            ...used_types
        } = ERC2280Types;

        expect(payload.types).to.deep.equal(used_types);

    });

    it('transferFrom (with pk) + verifyTransferFrom of result', async function (): Promise<void> {
        const ERC2280 = new ERC2280Signer(domain_name, domain_version, domain_chain_id, domain_contract);
        const wallet = Wallet.createRandom();

        const sig: EIP712Signature = await ERC2280.transferFrom(transfer_from_sender, transfer_from_recipient, new BN(1000), {
            signer: wallet.address,
            relayer: address_zero
        }, {
            nonce: new BN(0),
            gasLimit: new BN(1000000),
            gasPrice: 1000000,
            reward: 500
        }, wallet.privateKey) as EIP712Signature;

        expect(sig.hex).to.exist;
        expect(sig.r).to.exist;
        expect(sig.v).to.exist;
        expect(sig.s).to.exist;

        const verification = await ERC2280.verifyTransferFrom(transfer_from_sender, transfer_from_recipient, new BN(1000), {
            signer: wallet.address,
            relayer: address_zero
        }, {
            nonce: new BN(0),
            gasLimit: new BN(1000000),
            gasPrice: 1000000,
            reward: 500
        }, sig.hex);

        expect(verification).to.equal(true);

    });

    it('tranferFrom (without pk)', async function (): Promise<void> {
        const ERC2280 = new ERC2280Signer(domain_name, domain_version, domain_chain_id, domain_contract);

        const payload: EIP712Payload = await ERC2280.transferFrom(transfer_from_sender, transfer_from_recipient, new BN(1000), {
            signer: my_web3_browser_address,
            relayer: address_zero
        }, {
            nonce: new BN(0),
            gasLimit: new BN(1000000),
            gasPrice: 1000000,
            reward: 500
        }) as EIP712Payload;

        expect(payload.domain).to.deep.equal({ name: 'my ERC2280',
            version: '1',
            chainId: 1,
            verifyingContract: '0xd0a21D06befee2C5851EbafbcB1131d35B135e87' });
        expect(payload.primaryType).to.equal('mTransferFrom');

        const {
            mApprove,
            mTransfer,
            ...used_types
        } = ERC2280Types;

        expect(payload.types).to.deep.equal(used_types);

    });

});
