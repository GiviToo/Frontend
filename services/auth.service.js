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
      return true;
    }
  }
  register(firstName, lastName, email, password, passwordConfirmation) {
    const fullName = firstName + " " + lastName;
    return axios.post(API_URL + "user/register/", {
      name: fullName,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    });
  }
  getCurrentUser() {
    if (typeof window !== "undefined") {
      return TokenService.getUser();
    }
  }
}
export default new AuthService();
