const API_KEY = import.meta.env.VITE_API_KEY;

const URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lang=fr&appid=${API_KEY}`

export {
    URL
}
