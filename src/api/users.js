import jsonServer from "./dbjson";
export const postUser = async (user) => {
  const userExist = await gerUserByUserName(user.username);
  if (userExist.data.length > 0) {
    throw new Error("User already exists");
  }
  return jsonServer.post("/users", user);
};

export const getUsers = () => {
  return jsonServer.get("/users");
};

export const getUser = (id) => {
  return jsonServer.get(`/users/${id}`);
};

const gerUserByUserName = (userName) => {
  return jsonServer.get(`/users?username=${userName}`);
};
