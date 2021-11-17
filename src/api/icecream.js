import { API_URL } from "../constants";
import axios from "axios";

export const getIcecreamAxios = () => {
  const endpoint = "/icecream";
  return axios
    .get(`${API_URL}${endpoint}`)
    .then((result) => {
      console.log("DATA AXIOS", result);
      return result.data;
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const getIcecreamFetch = () => {
  const endpoint = "/icecream";
  return fetch(`${API_URL}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
