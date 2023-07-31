import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000";

axios.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axios;
