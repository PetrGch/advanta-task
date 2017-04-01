import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR, SELECT_DATA } from '../constant/data';

const initialState = {
    data: [],
    render: false,
    spinner: '',
    error: false,
    selectedId: null
};

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

export function getData(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return Object.assign({}, state, {
                render: true
            });
        case GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: JSON.parse(action.data).sort(compareRandom),
            });
        case GET_DATA_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        case SELECT_DATA:
            return Object.assign({}, state, {
                data: [action.selectedData].concat(state.data)
            });
        default:
            return state
    }
}
