import jsonServer from "./dbjson";

export const fetchReviewById = (data = {}) => {
  return jsonServer.get("/reviews", data);
};
