import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-dev.blox.education/v1/public/institutions/22/blox_offerings?page=1&per=5',

})

export default api;