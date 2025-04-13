import axios from "axios";

export const baseURL = "https://api.coingecko.com/"

export const APIFetch = () => {
  const api = axios.create({
    baseURL: baseURL,
  });

  return api;
};
