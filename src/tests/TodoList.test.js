/**
 * Tests for the TodoList
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { TodoList } from '../TodoList';
import { shallow } from 'enzyme'; 

describe('<TodoList />', () => {
    it('should render an todo list', () => {
        const tree = renderer
            .create(<TodoList items={ [] }/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})