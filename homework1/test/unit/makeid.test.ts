import { makeid } from "../../src/utils";

describe('Test makeid', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	})

	it('empty', () => {
		expect.assertions(1);
		const res = makeid();
		expect(res).toEqual('');
	})

	it('3 length', () => {
		expect.assertions(1);
		const res = makeid(3);
		expect(res).toHaveLength(3);
	})

	it('15 length', () => {
		expect.assertions(1);
		const res = makeid(15);
		expect(res).toHaveLength(15);
	})
}) 