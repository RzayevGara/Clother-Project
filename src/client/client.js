import axios from "axios";

const client = axios.create({
  baseURL: "https://clotherbackend.com/" 
});

export default client