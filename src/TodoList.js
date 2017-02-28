/**
 * This component should manage the todo items, letting users check existing ones and add new ones
 */
import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            value: ''
        }
    }

    handleNewItem = (event) => {
        event.preventDefault();
        let newItem = {
            text: this.state.value,
            checked: false
        };
        this.setState({
            items: [
                ...this.state.items,
                newItem
            ],
            value: ''
        });
    }

    onChange = (event) => {
        this.setState({value: event.target.value});
    }

    onClick = (itemText) => {
        this.setState({
            items: this
                .state
                .items
                .map(item => {
                    if (item.text !== itemText) 
                        return item

                    return {
                        text: item.text,
                        checked: !item.checked
                    }
                })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this
                        .state
                        .items
                        .map((item, index) => (
                            <li key={index}><TodoItem text={item.text} checked={item.checked} onClick={this.onClick}/></li>
                        ))}
                </ul>
                <TodoInput
                    value={this.state.value}
                    handleNewItem={this.handleNewItem}
                    onChange={this.onChange}/>
            </div>
        )
    }
}

export default TodoList;