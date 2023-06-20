const actionTypes = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
};

export default function modalReducer(state, action) {
    switch (action.type) {
        case actionTypes.OPEN_MODAL: {
            return { ...state, isOpen: true };
        }
        case actionTypes.CLOSE_MODAL: {
            return { ...state, isOpen: false };
        }
        default:
            throw new TypeError('Unknown action type');
    }
}
