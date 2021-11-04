import { is_url } from '../src/client/js/nameChecker'

describe('Test: "is_url" should check URL to be a valid' , () => {
    it('should check URL to be valid', () => {
        const inputText = "https://www.marca.com/en/football/real-madrid/2021/11/03/6183014de2704e9c908b45ef.html";
        expect(is_url(inputText)).toBe(true);
    });
});