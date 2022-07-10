import authService from "../services/auth.service";


export default function Logout() {
  const logout = authService.logout();
  if (logout) {
    location.replace("/");
  }
}
