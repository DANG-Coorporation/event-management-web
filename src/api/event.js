import jsonServer from "./dbjson";

export const getEventById = (id) => {
  return jsonServer.get(`/events/${id}`);
};
