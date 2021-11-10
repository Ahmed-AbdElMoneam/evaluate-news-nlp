// importing (babel-polyfill) prevents the error (ReferenceError: regeneratorRuntime is not defined)
import 'babel-polyfill'
import { handleSubmit } from "../src/client/js/formHandler"

// Here I check that function (handleSubmit) is a function using expect and toBe function
describe('Test: (handleSubmit) is a function' , () => {
    it('should be a function', async () => {
        expect(typeof handleSubmit).toBe("function")
    });
});

