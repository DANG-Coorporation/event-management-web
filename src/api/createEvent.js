import jsonServer from "./dbjson";

export const postNewEvent = async (event) => {
  const response = await jsonServer.post("/events", event);
  return response;
};
