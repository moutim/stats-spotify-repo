const { REACT_APP_AUTHORIZE_URL, REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URL } = process.env;

const scopesList = [
    'user-top-read',
    'user-read-recently-played',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-top-read',
    'user-read-private',
    'user-read-email',
    'user-read-recently-played',
    'playlist-read-collaborative',
    'playlist-read-private',
    'playlist-modify-private',
    'playlist-modify-public'
];

const redirectAcessURL = () => `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${encodeURIComponent(REACT_APP_REDIRECT_URL)}&scope=${encodeURIComponent(scopesList)}&response_type=token`;

const getAcessToken = () => {
    const acessToken = window.location.hash.split('&')[0].split('=')[1];
    localStorage.setItem('acess_token', acessToken);
}

module.exports = {
    redirectAcessURL,
    getAcessToken,
}
