import axios from "axios";

export const starWarApi = axios.create({
  baseURL: "https://swapi.info/api/",
});
