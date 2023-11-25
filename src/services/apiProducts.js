import axios from "axios";

export function getAllProducts(limit = 15) {
  return axios.get(`https://dummyjson.com/products/?limit=${limit}`);
}
