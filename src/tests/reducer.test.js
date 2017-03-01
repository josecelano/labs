/**
 * Tests for the reducer
 */
import reducer from '../reducer';
import {checkItem, addItem, editInput} from '../actions';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
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
        })
    })

    it('should handle the checkItem action', () => {
        expect(reducer(undefined, checkItem('Get to Las Palmas 🌴'))).toEqual({
            items: [
                {
                    text: 'Get to Las Palmas 🌴',
                    checked: false
                }, {
                    text: 'Learn the basics of React 👩‍🎓',
                    checked: false
                }, {
                    text: 'Go surfing 🏄',
                    checked: false
                }
            ],
            inputValue: ''
        })
    })

    it('should handle the addItem action', () => {
        expect(reducer(undefined, addItem())).toEqual({
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
                }, {
                    text: '',
                    checked: false
                }
            ],
            inputValue: ''
        })
    })

    it('should handle the editInput action', () => {
        expect(reducer(undefined, editInput('input text'))).toEqual({
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
            inputValue: 'input text'
        })
    })
})