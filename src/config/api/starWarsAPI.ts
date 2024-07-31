import axios from "axios";

export const starWarApi = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const starWarInfoApi = axios.create({
  baseURL: "https://swapi.info/api/",
});
