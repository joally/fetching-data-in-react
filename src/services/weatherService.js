const API_KEY = 'bc936275b6044e0a9e4184218252703';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) =>{
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        console.log('Data:', data);
        return data;
      } catch (err) {
        console.error(err);
      }
    };