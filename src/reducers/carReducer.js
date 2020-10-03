export const initialState = {
    item: "This is an item"
}

export const ACTIONS = {
    ADD_FEATURE: 'ADD_FEATURE',
    REMOVE_FEATURE: 'REMOVE_FEATURE'
}

export const carReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}