import { URLChecker } from '../src/client/js/URLChecker'

// Here I checked that (URLChecker) is behaving correctly and returning true if there was a real URL
describe('Test: Making sure that (URLChecker) check that URLs are valid' , () => {
    it('should check URL validation', () => {
        const inputText = "https://www.marca.com/en/football/real-madrid/2021/11/03/6183014de2704e9c908b45ef.html"
        expect(URLChecker(inputText)).toBe(true)
    });
});