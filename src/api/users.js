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

export const fetchUsersByReviews = (reviews = []) => {
  const params = new URLSearchParams();
  reviews.forEach((item) => params.append("id", item.userId));
  return jsonServer.get("/users", { params });
};

export const getUser = (id) => {
  return jsonServer.get(`/users/${id}`);
};

const gerUserByUserName = (userName) => {
  return jsonServer.get(`/users?username=${userName}`);
};

const getByEmail = (email) => {
  return jsonServer.get(`/users?email=${email}`);
};

export const checkCredential = async ({ username, password }) => {
  const user = await gerUserByUserName(username);
  if (user.data.length === 0) {
    throw new Error("User not found");
  }
  if (user.data[0].password !== password) {
    throw new Error("Password incorrect");
  }
  return user.data[0];
};
