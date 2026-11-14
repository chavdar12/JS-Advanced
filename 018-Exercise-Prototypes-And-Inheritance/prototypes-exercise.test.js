const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

// 01 and 02 patch built-in prototypes when loaded, as the tasks require.
require('./01.arrayExtension');
require('./02.stringExtension');
const extensibleObject = require('./03.extensibleObject');
const balloons = require('./04.balloons');
const people = require('./05.people');
const posts = require('./06.posts');
const createComputerHierarchy = require('./07.computer');

describe('Prototypes and Inheritance - Exercise', () => {
    it('01. Array Extension', () => {
        const arr = [1, 2, 3, 4];
        expect(arr.last()).to.equal(4);
        expect(arr.skip(2)).to.deep.equal([3, 4]);
        expect(arr.take(2)).to.deep.equal([1, 2]);
        expect(arr.sum()).to.equal(10);
        expect(arr.average()).to.equal(2.5);
        expect(arr).to.deep.equal([1, 2, 3, 4]);
    });

    it('02. String Extension', () => {
        let str = 'my string';
        str = str.ensureStart('my');
        str = str.ensureStart('hello ');
        expect(str).to.equal('hello my string');
        expect(str.ensureEnd('!').ensureEnd('!')).to.equal('hello my string!');
        expect(''.isEmpty()).to.equal(true);
        expect(str.truncate(16)).to.equal('hello my string');
        expect(str.truncate(14)).to.equal('hello my...');
        expect(str.truncate(8)).to.equal('hello...');
        expect(str.truncate(4)).to.equal('h...');
        expect(str.truncate(2)).to.equal('..');
        expect('verylongword'.truncate(7)).to.equal('very...');
        expect(String.format('The {0} {1} fox', 'quick', 'brown')).to.equal('The quick brown fox');
        expect(String.format('jumps {0} {1}', 'dog')).to.equal('jumps dog {1}');
    });

    it('03. Extensible Object', () => {
        const obj = extensibleObject();
        obj.extend({ extensionMethod() { return 'hi'; }, extensionProperty: 'someString' });
        expect(obj.extensionProperty).to.equal('someString');
        expect(Object.prototype.hasOwnProperty.call(obj, 'extensionMethod')).to.equal(false);
        expect(obj.extensionMethod()).to.equal('hi');
    });

    it('04. Balloons', () => {
        const { Balloon, PartyBalloon, BirthdayBalloon } = balloons();
        const b = new BirthdayBalloon('red', 2, 'blue', 15, 'Happy Birthday!');
        expect(b).to.be.instanceOf(PartyBalloon).and.instanceOf(Balloon);
        expect(b.ribbon).to.deep.equal({ color: 'blue', length: 15 });
        expect(b.text).to.equal('Happy Birthday!');
        expect([b.color, b.hasWeight]).to.deep.equal(['red', 2]);
    });

    it('05. People', () => {
        const { Employee, Junior, Senior, Manager } = people();
        expect(() => new Employee('x', 1)).to.throw('Cannot instantiate directly.');

        const senior = new Senior('Ivan', 40);
        expect(captureLog(() => {
            for (let i = 0; i < 4; i++) senior.work();
        })).to.deep.equal([
            'Ivan is working on a complicated task.',
            'Ivan is taking time off work.',
            'Ivan is supervising junior workers.',
            'Ivan is working on a complicated task.',
        ]);

        const junior = new Junior('Pesho', 20);
        expect(captureLog(() => junior.work())).to.deep.equal(['Pesho is working on a simple task.']);

        const manager = new Manager('Maria', 35);
        manager.salary = 1000;
        manager.dividend = 500;
        expect(captureLog(() => manager.collectSalary())).to.deep.equal(['Maria received 1500 this month.']);
        expect(manager).to.be.instanceOf(Employee);
    });

    it('06. Posts', () => {
        const { Post, SocialMediaPost, BlogPost } = posts();
        expect(String(new Post('Post', 'Content'))).to.equal('Post: Post\nContent: Content');

        const scm = new SocialMediaPost('TestTitle', 'TestContent', 25, 30);
        expect(String(scm)).to.equal('Post: TestTitle\nContent: TestContent\nRating: -5');
        scm.addComment('Good post');
        scm.addComment('Very good post');
        expect(String(scm)).to.equal(
            'Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n * Good post\n * Very good post',
        );

        const blog = new BlogPost('Blog', 'Text', 10);
        expect(String(blog.view().view())).to.equal('Post: Blog\nContent: Text\nViews: 12');
    });

    it('07. Computer', () => {
        const { Battery, Keyboard, Monitor, Computer, Laptop, Desktop } = createComputerHierarchy();
        const battery = new Battery('Energy', 3);
        expect({ ...battery }).to.deep.equal({ manufacturer: 'Energy', expectedLife: 3 });

        const laptop = new Laptop('Hewlett Packard', 2.4, 4, 0.5, 3.12, 'Silver', battery);
        expect(laptop).to.deep.include({
            manufacturer: 'Hewlett Packard', processorSpeed: 2.4, ram: 4, hardDiskSpace: 0.5, weight: 3.12, color: 'Silver',
        });
        expect(laptop.battery).to.equal(battery);
        expect(laptop).to.be.instanceOf(Computer);

        const desktop = new Desktop('Dell', 3.3, 8, 1, new Keyboard('Logitech', 1.5), new Monitor('Benq', 1920, 1080));
        expect(desktop.monitor.width).to.equal(1920);

        expect(() => new Computer('X', 1, 1, 1)).to.throw(Error);
        expect(() => new Laptop('X', 1, 1, 1, 1, 'Red', {})).to.throw(TypeError);
        expect(() => { desktop.keyboard = battery; }).to.throw(TypeError);
        expect(() => { desktop.monitor = null; }).to.throw(TypeError);
    });
});
