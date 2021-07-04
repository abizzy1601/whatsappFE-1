import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsappbe.abizzy1601.repl.co/",
});

export default instance;
