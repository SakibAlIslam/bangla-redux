export const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
};

export const personsReducer = (state = { persons: [] }, action) => {
    switch (action.type) {
        case 'persons/add':
            return { ...state, persons: [...state.persons, action.payload] };
        default:
            return state;
    }
};
