// This is the action type
export const ACTIONS = {
    ADD_FEATURE: 'ADD_FEATURE',
    REMOVE_FEATURE: 'REMOVE_FEATURE'
}

export const ADD_FEATURE = 'ADD_FEATURE';

// This is the action creator, it is a function that creates the action...
export const addFeature = carFeature => {
    return {
        type: ADD_FEATURE,
        payload: carFeature
    }
}