import axios from "axios";

const Axios = axios.create({
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
