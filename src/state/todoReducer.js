const actionTypes = {
    CREATE_ITEM: 'CREATE_ITEM',
    UPDATE_ITEM: 'UPDATE_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    SET_DATA: 'SET_DATA',
};

export default function todoReducer(state, action) {
    switch (action.type) {
        case actionTypes.CREATE_ITEM: {
            return [...state, action.payload];
        }
        case actionTypes.UPDATE_ITEM: {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        }
        case actionTypes.DELETE_ITEM: {
            return state.filter((item) => item.id !== action.payload);
        }
        case actionTypes.SET_DATA: {
            return action.payload;
        }
        default:
            throw new TypeError('Unknown action type');
    }
}
