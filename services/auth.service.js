import axios from "axios";
import TokenService from "./token.service";
const API_URL = "https://api.givitoo.isnan.me/";
class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "auth/login/", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.access) {
          TokenService.setUser(response.data);
        }
        return response.data;
      });
  }
  logout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      return true
    }
  }
  register(name, phone, email) {
    return axios.post(API_URL + "user/register/", {
      name,
      phone,
      email,
    });
  }
  getCurrentUser() {
    if (typeof window !== "undefined") {
      return TokenService.getUser();
    }
  }
}
export default new AuthService();
