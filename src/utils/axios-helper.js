import axios from "axios";

const Axios = axios.create({
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://mern-deploy-file.herokuapp.com/",
});

export default Axios;
