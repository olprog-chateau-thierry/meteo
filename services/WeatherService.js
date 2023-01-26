import { URL } from "../commons/constants.js";

const getWeatherByLatAndLonMetric = async (lat, lon) => {
    const url = `${URL}&lon=${lon}&lat=${lat}`;
    const response = await fetch(url);
    if (response.status === 200){
        return await response.json();
    }
    throw new Error(`Erreur réponse. Status : ${response.status}.`)
}

export {
    getWeatherByLatAndLonMetric
}