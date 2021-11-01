import {createList} from '../../src/index';

describe('Create list', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('Create list without params', () => {
		const list = createList();
		expect(list).toHaveLength(5);
	});

	it('Create list with length 100', () => {
		const list = createList(100);
		expect(list).toHaveLength(100);
	});

	it('Create list with 1000', () => {
		const list = createList(1000);
		expect(list).toHaveLength(1000);
	});
})