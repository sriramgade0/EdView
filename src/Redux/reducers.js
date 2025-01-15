const initialState = {
    reviews: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REVIEWS':
            return {
                ...state,
                reviews: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;
