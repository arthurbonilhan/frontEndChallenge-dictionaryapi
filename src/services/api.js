import axios from "axios";

const ingles = "api/v2/entries/en";

const api = axios.create({
  baseURL: `https://api.dictionaryapi.dev/${ingles}`,
});

export default api;