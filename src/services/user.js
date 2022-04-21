import client from "./client";

class UserService {
  getProfile() {
    return client.get("/user/profile");
  }
  login(body) {
    return client.post("/user/login", body);
  }
  signup(body) {
    return client.post("/user/signup", body);
  }
  updateUser(body) {
    return client.put(`/user/profile/update`, body);
  }
}
let user = new UserService();
export default user;
