import fetchData from "./fetchAPI";

async function getUserInfo () {
    const data = await fetchData('v1/me');
    return data;
}

const getUserTopArtists = async (time = 'medium_term') => {
    const data = await fetchData(`v1/me/top/artists?time_range=${time}&limit=50`);
    return data;
}

export { getUserInfo, getUserTopArtists };