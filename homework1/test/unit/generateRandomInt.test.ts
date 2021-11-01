import { getRandomInt } from "../../src/utils";

describe('Test getRandomInt', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	})

	it('empty', () => {
		const res = getRandomInt();
		expect(res).toBeGreaterThanOrEqual(0);
	})

	it('from 10 to 50', () => {
		const res = getRandomInt(10, 50);
		expect(res).toBeGreaterThanOrEqual(10);
		expect(res).toBeLessThanOrEqual(50);
	})


	it('from 20 to 100', () => {
		const res = getRandomInt(20, 100);
		expect(res).toBeGreaterThanOrEqual(20);
		expect(res).toBeLessThanOrEqual(100);
	})
})