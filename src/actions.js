/**
 * Add three actions here:
 *
 * - checkItem
 * - addItem
 * - editInput
 */

export function checkItem(text) {
    return {type: 'CHECK_ITEM', text: text}
}

export function addItem(text) {
    return {type: 'ADD_ITEM', text: text}
}

export function editInput(inputValue) {
    return {type: 'EDIT_INPUT', inputValue: inputValue}
}