const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URL, REACT_APP_CLIENT_SECRET } = process.env;

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

const redirectAcessURL = () => `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REACT_APP_REDIRECT_URL)}&scope=${encodeURIComponent(scopesList)}`;

const getAcessToken = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const acessCode = urlParams.get('code');

  const authOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: acessCode,
      redirect_uri: REACT_APP_REDIRECT_URL,
      client_id: REACT_APP_CLIENT_ID,
      client_secret: REACT_APP_CLIENT_SECRET,
    }),
  };

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    return data;
  } catch (error) {
    console.error('Erro ao obter o token:', error.message);
    return null;
  }
}

module.exports = {
  redirectAcessURL,
  getAcessToken,
}