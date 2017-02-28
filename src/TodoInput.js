/**
 * This component should render a controlled input for text
 */
import React from 'react';

const TodoInput = (props) => (
    <form onSubmit={props.handleNewItem}>
        <label>
            <input type="text" value={props.value} onChange={props.onChange}/>
        </label>
    </form>
)

export default TodoInput;
