import axios from "axios";
// CHECKME: Revert to localhost
const instance = axios.create({ baseURL: "http://192.168.8.102:8000" });

export default instance;
