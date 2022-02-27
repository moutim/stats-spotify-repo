import fetchData from "./fetchAPI";

const getUserInfo = async () => {
    const data = await fetchData('v1/me');
    return data;
}

const teste = () => console.log('ddddd');

export default getUserInfo