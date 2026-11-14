const { expect } = require('chai');
const PaymentPackage = require('./12.paymentPackage');

describe('12. Payment Package', () => {
    it('is created with name, value and default VAT and active', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        expect([pack.name, pack.value, pack.VAT, pack.active]).to.deep.equal(['HR Services', 1500, 20, true]);
    });

    it('accepts zero as value and VAT', () => {
        const pack = new PaymentPackage('Free', 0);
        pack.VAT = 0;
        expect([pack.value, pack.VAT]).to.deep.equal([0, 0]);
    });

    it('rejects an empty or non-string name', () => {
        expect(() => new PaymentPackage('', 1)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(5, 1)).to.throw('Name must be a non-empty string');
        expect(() => { new PaymentPackage('A', 1).name = ''; }).to.throw(Error);
    });

    it('rejects a missing, negative or non-number value', () => {
        expect(() => new PaymentPackage('HR Services')).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('A', -1)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('A', '1')).to.throw('Value must be a non-negative number');
    });

    it('rejects a negative or non-number VAT', () => {
        const pack = new PaymentPackage('A', 1);
        expect(() => { pack.VAT = -1; }).to.throw('VAT must be a non-negative number');
        expect(() => { pack.VAT = '20'; }).to.throw('VAT must be a non-negative number');
    });

    it('rejects a non-boolean active', () => {
        const pack = new PaymentPackage('A', 1);
        expect(() => { pack.active = null; }).to.throw('Active status must be a boolean');
        expect(() => { pack.active = 1; }).to.throw('Active status must be a boolean');
    });

    it('prints an overview, marking inactive packages', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        expect(pack.toString()).to.equal(
            'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800',
        );
        pack.active = false;
        pack.VAT = 50;
        expect(pack.toString()).to.equal(
            'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 50%): 2250',
        );
    });
});
