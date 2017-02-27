/**
 * This component should render the TodoItems inside a <li>
 */
import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';

const propTypes = {
    items: PropTypes.array.isRequired
}

function TodoList({items}) {
    return (
        <ul>
            {items.map(item => {
                return (
                    <li key={item.text}><TodoItem text={item.text} checked={item.checked}/></li>
                )
            })}
        </ul>
    )
}

TodoList.propTypes = propTypes

export default TodoList