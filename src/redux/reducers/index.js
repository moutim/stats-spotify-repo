import { combineReducers } from 'redux';
import { SEND_USER_INFO } from '../actions/actionsType';

const INITIAL_STATE_USER = {
    name: '',
    urlImage: '',
};

function user(state = INITIAL_STATE_USER, action) {
    switch (action.type) {
        case SEND_USER_INFO:
            return {
              ...state,
              name: action.payload.name,
              urlImage: action.payload.urlImage, 
            };
        default:
            return { ...state };
        }
}

const rootReducer = combineReducers({ user });

export default rootReducer;
