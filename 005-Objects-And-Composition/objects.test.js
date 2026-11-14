const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const cityRecord = require('./01.cityRecord');
const townPopulation = require('./02.townPopulation');
const cityTaxes = require('./03.cityTaxes');
const factory = require('./04.objectFactory');
const createAssemblyLine = require('./05.assemblyLine');
const fromJSONToHTMLTable = require('./06.fromJSONToHTMLTable');

describe('Objects and Composition - Lab', () => {
    it('01. City Record', () => {
        expect(cityRecord('Tortuga', 7000, 15000)).to.deep.equal({ name: 'Tortuga', population: 7000, treasury: 15000 });
    });

    it('02. Town Population', () => {
        expect(captureLog(() => townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'Sofia <-> 20'])))
            .to.deep.equal(['Sofia : 1200020', 'Montana : 20000']);
    });

    it('03. City Taxes', () => {
        const city = cityTaxes('Tortuga', 7000, 15000);
        city.collectTaxes();
        expect(city.treasury).to.equal(85000);
        city.applyGrowth(5);
        expect(city.population).to.equal(7350);
        city.applyRecession(10);
        expect(city.treasury).to.equal(76500);
    });

    it('04. Object Factory', () => {
        const library = {
            print() { return `${this.name} is printing a page`; },
            scan() { return `${this.name} is scanning a document`; },
        };
        const [product] = factory(library, [{ template: { name: 'ACME Printer' }, parts: ['print'] }]);
        expect(product.name).to.equal('ACME Printer');
        expect(product.print()).to.equal('ACME Printer is printing a page');
        expect(product).to.not.have.property('scan');
    });

    it('05. Assembly Line', () => {
        const assemblyLine = createAssemblyLine();
        const car = { make: 'Toyota', model: 'Avensis' };
        assemblyLine.hasClima(car);
        assemblyLine.hasAudio(car);
        assemblyLine.hasParktronic(car);

        car.tempSettings = 18;
        car.adjustTemp();
        expect(car.temp).to.equal(20);

        car.currentTrack = { name: 'Never Gonna Give You Up', artist: 'Rick Astley' };
        expect(captureLog(() => car.nowPlaying())).to.deep.equal(["Now playing 'Never Gonna Give You Up' by Rick Astley"]);
        expect(captureLog(() => {
            car.checkDistance(0.4);
            car.checkDistance(0.2);
            car.checkDistance(0.05);
            car.checkDistance(1);
        })).to.deep.equal(['Beep!', 'Beep! Beep!', 'Beep! Beep! Beep!', '']);
    });

    it('06. From JSON to HTML Table (escapes values)', () => {
        const [html] = captureLog(() => fromJSONToHTMLTable('[{"Name":"Pesho <div>-a","Score":4}]'));
        expect(html).to.equal([
            '<table>',
            '   <tr><th>Name</th><th>Score</th></tr>',
            '   <tr><td>Pesho &lt;div&gt;-a</td><td>4</td></tr>',
            '</table>',
        ].join('\n'));
    });
});
