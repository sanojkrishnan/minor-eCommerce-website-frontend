import axios from "axios";  // Importing the axios library to make HTTP requests

// Creating an axios instance with a base URL for the contacts API

const productExp = axios.create({
    baseURL: "http://localhost:3000"
});  // Base URL for the contacts API

export default productExp;