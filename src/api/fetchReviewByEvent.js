import jsonServer from "./dbjson";

export const fetchReviewByEvent = (eventId) => {
  return jsonServer.get("/reviews", { params: { eventId } });
};
