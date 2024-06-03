import {reducer, StateType, TOGGLE_COLLAPSED} from "./UnControlledAccordion";

test('collapsed', () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
})

test('error', () => {
    const state: StateType = {
        collapsed: false
    }

    expect(() => {reducer(state, {type: 'fake'})}).toThrowError()
})