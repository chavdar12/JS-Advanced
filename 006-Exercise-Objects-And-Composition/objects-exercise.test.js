const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const calorieObject = require('./01.calorieObject');
const constructionCrew = require('./02.constructionCrew');
const carFactory = require('./03.carFactory');
const heroicInventory = require('./04.heroicInventory');
const lowestPricesInCities = require('./05.lowestPricesInCities');
const storeCatalogue = require('./06.storeCatalogue');
const townsToJSON = require('./07.townsToJSON');
const rectangle = require('./08.rectangle');
const createSortedList = require('./09.sortedList');
const heroes = require('./10.heroes');
const jansNotation = require('./11.jansNotation');

describe('Objects and Composition - Exercise', () => {
    it('01. Calorie Object', () => {
        expect(captureLog(() => calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])))
            .to.deep.equal(['{ Yoghurt: 48, Rise: 138, Apple: 52 }']);
    });

    it('02. Construction Crew', () => {
        expect(constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }))
            .to.deep.equal({ weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false });
        const fine = { weight: 120, experience: 20, levelOfHydrated: 200, dizziness: false };
        expect(constructionCrew({ ...fine })).to.deep.equal(fine);
    });

    it('03. Car Factory', () => {
        expect(carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }))
            .to.deep.equal({
                model: 'VW Golf II',
                engine: { power: 90, volume: 1800 },
                carriage: { type: 'hatchback', color: 'blue' },
                wheels: [13, 13, 13, 13],
            });
        expect(carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 }).engine)
            .to.deep.equal({ power: 120, volume: 2400 });
    });

    it('04. Heroic Inventory', () => {
        const [json] = captureLog(() => heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12']));
        expect(JSON.parse(json)).to.deep.equal([
            { name: 'Isacc', level: 25, items: ['Apple', 'GravityGun'] },
            { name: 'Derek', level: 12, items: [] },
        ]);
    });

    it('05. Lowest Prices in Cities', () => {
        expect(captureLog(() => lowestPricesInCities([
            'Sample Town | Sample Product | 1000',
            'Sample Town | Orange | 2',
            'Sample Town | Peach | 1',
            'Sofia | Orange | 3',
            'Sofia | Peach | 2',
            'New York | Sample Product | 1000.1',
            'New York | Burger | 10',
        ]))).to.deep.equal([
            'Sample Product -> 1000 (Sample Town)',
            'Orange -> 2 (Sample Town)',
            'Peach -> 1 (Sample Town)',
            'Burger -> 10 (New York)',
        ]);
    });

    it('06. Store Catalogue', () => {
        expect(captureLog(() => storeCatalogue(['Banana : 2', 'Apple : 1.4', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])))
            .to.deep.equal(['A', '  Anti-Bug Spray: 15', '  Apple: 1.4', 'B', '  Banana: 2', 'T', '  T-Shirt: 10']);
    });

    it('07. Towns to JSON', () => {
        const [json] = captureLog(() => townsToJSON([
            '| Town | Latitude | Longitude |',
            '| Sofia | 42.696552 | 23.32601 |',
            '| Beijing | 39.913818 | 116.363625 |',
        ]));
        expect(json).to.equal(
            '[{"Town":"Sofia","Latitude":42.7,"Longitude":23.33},{"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]',
        );
    });

    it('08. Rectangle', () => {
        const rect = rectangle(4, 5, 'red');
        expect([rect.width, rect.height, rect.color, rect.calcArea()]).to.deep.equal([4, 5, 'Red', 20]);
    });

    it('09. Sorted List', () => {
        const list = createSortedList();
        list.add(5);
        list.add(6);
        list.add(7);
        list.add(1);
        expect(list.get(1)).to.equal(5);
        list.remove(1);
        expect(list.get(1)).to.equal(6);
        list.remove(10);
        expect(list.size).to.equal(3);
        expect(list.get(-1)).to.equal(undefined);
    });

    it('10. Heroes', () => {
        const create = heroes();
        const mage = create.mage('Gandalf');
        const fighter = create.fighter('Aragorn');
        expect(captureLog(() => {
            mage.cast('fireball');
            fighter.fight();
        })).to.deep.equal(['Gandalf cast fireball', 'Aragorn slashes at the foe!']);
        expect([mage.mana, fighter.stamina, mage.health]).to.deep.equal([99, 99, 100]);
    });

    it("11. Jan's Notation", () => {
        expect(captureLog(() => jansNotation([3, 4, '+']))).to.deep.equal(['7']);
        expect(captureLog(() => jansNotation([5, 3, 4, '*', '-']))).to.deep.equal(['-7']);
        expect(captureLog(() => jansNotation([7, 33, 8, '-']))).to.deep.equal(['Error: too many operands!']);
        expect(captureLog(() => jansNotation([15, '/']))).to.deep.equal(['Error: not enough operands!']);
    });
});
