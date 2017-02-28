/**
 * Write your reducer in here that handles the three actions from actions.js and has two properties in its state:
 *
 * - items      [Array]  The items in the todolist
 * - inputValue [String] The value of the input field
 */

const initialState = {
    items: [
        {
            text: 'Get to Las Palmas 🌴',
            checked: true
        }, {
            text: 'Learn the basics of React 👩‍🎓',
            checked: false
        }, {
            text: 'Go surfing 🏄',
            checked: false
        }
    ],
    inputValue: ''
};

const appState = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [
                    ...state.items, {
                        text: action.text,
                        checked: false
                    }
                ],
                inputValue: ''
            }
        case 'EDIT_INPUT':
            return {
                ...state,
                inputValue: action.inputValue
            }
        case 'CHECK_ITEM':
            return {
                ...state,
                items: state
                    .items
                    .map(item => item.text === action.text
                        ? {
                            text: action.text,
                            checked: !item.checked
                        }
                        : item)
            }
        default:
            return state
    }
}

export default appState;