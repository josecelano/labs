/**
 * This component should render a todo item as an <input type="checkbox" /> with a label
 */
import React from 'react';

const TodoItem = (props) => (
    <label>
        <input
            type="checkbox"
            checked={props.checked}
            onChange={() => props.onClick(props.text)}
            onClick={() => props.onClick(props.text)}/> {props.text}
    </label>
)

export default TodoItem;