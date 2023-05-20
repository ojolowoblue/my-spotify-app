import User from "app/models/User";
import client from "../client";

const getUser = () => {
  return client.get<User>("/me");
};

const UserService = {
  getUser,
};

export default UserService;
