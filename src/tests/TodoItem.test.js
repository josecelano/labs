/**
 * Tests for the TodoItem
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TodoItem from '../TodoItem';

describe('<TodoItem />', () => {
    it('should render an item', () => {
        const tree = renderer
            .create(<TodoItem />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('should attach an onclick handler passed in', () => {
        const onClickSpy = jest.fn();
        const todoItem = shallow(
            <TodoItem onClick={onClickSpy}/>
        );
        todoItem.find('input[type="checkbox"]').simulate('change');
        expect(onClickSpy).toHaveBeenCalled();
    })
})