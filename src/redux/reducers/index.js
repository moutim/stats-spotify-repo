import { combineReducers } from 'redux';

const INITIAL_STATE_MUSICS = {
  musics: {}
};

const INITIAL_STATE_ARTISTS = {
  artists: {}
};


function musicsReducer(state = INITIAL_STATE_MUSICS, action) {
    switch (action.type) {
        case 'SEND_MUSICS_SHORT':
            return { ...state, musics: { short: action.musics } };
        case 'SEND_MUSICS_MEDIUM':
            return { ...state, musics: { medium: action.musics } };
        case 'SEND_MUSICS_LONG':
            return { ...state, musics: { long: action.musics } };
        default:
            return { ...state };
        }
}

function artistsReducer(state = INITIAL_STATE_ARTISTS, action) {
    switch (action.type) {
        case 'SEND_ARTISTS_SHORT':
            return { ...state, artists: { short: action.artists } };
        case 'SEND_ARTISTS_MEDIUM':
            return { ...state, artists: { medium: action.artists } };
        case 'SEND_ARTISTS_LONG':
            return { ...state, artists: { long: action.artists } };
        default:
            return { ...state };
    }
  }

const rootReducer = combineReducers({ musicsReducer, artistsReducer });

export default rootReducer;
