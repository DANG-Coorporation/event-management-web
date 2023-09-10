import jsonServer from "./dbjson";

export const getEventById = (id) => {
  return jsonServer.get(`/events?uniqId=${id}`);
};

export const getEventsByQuery = (query) => {
  if (!query) {
    return jsonServer.get(`/events`);
  }
  return jsonServer.get(`/events?q=${query}`);
};