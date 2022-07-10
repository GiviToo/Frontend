import axios from "axios";
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
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data.access));
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
      return JSON.parse(localStorage.getItem("user"));
    }
  }
}
export default new AuthService();
