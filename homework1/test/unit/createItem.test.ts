import {createItem} from '../../src/index';

describe('test create item of product list', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('create item with empty params', async () => {
		expect.assertions(1);
		const item = createItem();
		expect(item).toEqual({name: '', price: 0});
	});

	it('create item with name', async () => {
		expect.assertions(1);
		const item = createItem('abcd');
		expect(item).toEqual({name: 'abcd', price: 0});
	});

	it('create item with price params', async () => {
		expect.assertions(1);
		const item = createItem(undefined, 20);
		expect(item).toEqual({name: '', price: 20});
	});

	it('create item with all params', async () => {
		expect.assertions(1);
		const item = createItem('abcd', 20);
		expect(item).toEqual({name: 'abcd', price: 20});
	});
})