/**
 * This component should render a todo item as an <input type="checkbox" /> with a label
 */
import React from 'react';

const TodoItem = ({text, checked}) => {
    return (
        <label><input checked={checked} readOnly={true} type="checkbox"/>{text}</label>
    )
}

export default TodoItem