import axios from "axios";

// CHECKME: Revert to localhost
const instance = axios.create({ baseURL: "http://10.0.2.2:8000" });

export default instance;
