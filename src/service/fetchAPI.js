const headers = () => {
    const acessToken = localStorage.getItem('access_token');
    return {
        headers: {
            'Authorization': 'Bearer ' + acessToken
        }
    };
};

const headersPlaylist = (time) => {
    const acessToken = localStorage.getItem('access_token');
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const currentData = day + '/' + month + '/' + year;

    const headerPOST = {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${acessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": `Top 50 músicas - ${time} - ${month}/${year}`,
            "description": `Playlist criada em ${currentData} com base na suas músicas mais escutadas - Desenvolvido por Vitor Moutim - https://moutim-stats-spotify.herokuapp.com/`,
            "public": true
        })
    }
    return headerPOST;
}

const fetchData = async (endPoint, header = headers()) => {
    const url = `https://api.spotify.com/${endPoint}`;
    try{
        const response = await fetch(url, header);
        const data = await response.json();
        return data;
    } catch(erro){
        console.log(erro);
    }
}

export { fetchData, headersPlaylist};