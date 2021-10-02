import { combineReducers } from 'redux';

import socketReducer from './socketReducer';
import { ReducerPages } from '../Pages';

const reducers = combineReducers({
    socketReducer,
    ...ReducerPages,
});

export default (state, action) => {
    switch (action.type) {
        case 'USUARIO_LOGOUT':
            state = undefined;
            break;
        default:
            break;
    }
    return reducers(state, action);
}