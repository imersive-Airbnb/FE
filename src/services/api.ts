import axios from "axios";

interface UserData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface Credentials {
  email: string;
  password: string;
}

const instance = axios.create({
  baseURL: `http://35.208.191.26/`,
});

export default {
  register: (userData: UserData) =>
    instance({
      method: "POST",
      url: "register",
      data: userData,
    }),
  login: (credentials: Credentials) =>
    instance({
      method: "POST",
      url: "login",
      data: credentials,
    }),
};
