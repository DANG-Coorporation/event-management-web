import jsonServer from "./dbjson";

export const checkReviewByUser = (data = {}) => {
  return jsonServer.get("/reviews", { params: data });
};
