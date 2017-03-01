/**
 * Tests for the App component
 */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('<App />', () => {
    it('should provide an store to todo list', () => {
        const store = {};
        const tree = renderer
            .create(<App store={ store }/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})