/**
 * Tests for the actions
 */

import {checkItem, addItem, editInput } from '../actions';

describe('actions', () => {
    describe('checkItem', () => {
        it('should return the correct constant', () => {
            expect(checkItem('text')).toEqual({type: 'CHECK_ITEM', text: 'text'})
        })
    })

    describe('addItem', () => {
        it('should return the correct constant', () => {
            expect(addItem('text')).toEqual({type: 'ADD_ITEM'})
        })
    })

    describe('editInput', () => {
        it('should return the correct constant', () => {
            expect(editInput('text')).toEqual({type: 'EDIT_INPUT', text: 'text'})
        })
    })
})