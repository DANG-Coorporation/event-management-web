import jsonServer from "./dbjson";

export const fetchReviews = () => {
  return jsonServer.get("/reviews");
};
