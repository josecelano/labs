/**
 * Connect this component to the Redux state for the items and the input value
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import {addItem, editInput, checkItem} from './actions';

class TodoList extends Component {

    // Check an item
    checkItem = (text) => {
        this
            .props
            .dispatch(checkItem(text));
    }

    // Add an item
    addItem = (evt) => {
        evt.preventDefault();
        this
            .props
            .dispatch(addItem(this.props.state.inputValue));
    }

    // Edit the input
    editInput = (evt) => {
        this
            .props
            .dispatch(editInput(evt.target.value, false));
    }

    render() {
        return (
            <div>
                <ul>
                    {this
                        .props
                        .state
                        .items
                        .map((item, index) => {
                            return (
                                <li key={index}>
                                    <TodoItem onClick={this.checkItem} text={item.text} checked={item.checked}/>
                                </li>
                            )
                        })}
                </ul>
                <form onSubmit={this.addItem}>
                    <TodoInput onChange={this.editInput} value={this.props.state.inputValue}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {state: state};
}

export default connect(mapStateToProps)(TodoList);
