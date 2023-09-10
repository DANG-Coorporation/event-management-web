import jsonServer from "./dbjson";

export const postReview = (data = {}) => {
  console.log("here", data);
  return jsonServer.post("/reviews", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
