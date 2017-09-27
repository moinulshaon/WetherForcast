import axios from 'axios';

const API_KEY = '2b12c1977f50c9a9ef69e7862c1a2585';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (cityName) {
    const url = `${ROOT_URL}&q=${cityName},us`;
    return {
        type: FETCH_WEATHER,
        payload: axios.get(url)
    };
}
