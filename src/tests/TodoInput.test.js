/**
 * Tests for the TodoInput
 */
import React from 'react';
import renderer from 'react-test-renderer';
import TodoInput from '../TodoInput';

describe('<TodoInput />', () => {
    it('should render an input box', () => {
        const tree = renderer
            .create(<TodoInput />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
