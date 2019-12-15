import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "../containers/App";


Enzyme.configure({
    adapter: new Adapter()
});

const setup = () => {
    return mount(<App/>)
};
let wrapper;
let input;
let button;
describe("test action creators", () => {

    beforeEach(() => {
        wrapper = setup();
        input = wrapper.find("#word-guess");
        button = wrapper.find("#guess-word-button");
    });

    test("sample_test_set_secret_word", () => {
        let secretWord = "Book";
        wrapper.instance().setSecretWord(secretWord);
        expect(wrapper.state().secretWord).toBe(secretWord);
    });

    test("sample_test_guess_word", () => {
        let secretWord = "Library";
        wrapper.instance().setSecretWord(secretWord);
        input.simulate('change', {target: {value: "hook"}});
        button.simulate('click');
        input.simulate('change', {target: {value: "auto"}});
        button.simulate('click');
        expect(wrapper.state()).toMatchSnapshot()
    });
});
