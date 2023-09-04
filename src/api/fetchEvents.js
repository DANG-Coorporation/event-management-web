import axios from "axios";
import { constant } from "../data/constant";

const { fetchEventLink } = constant;

export const fetchEvent = async () => {
  return axios.get(fetchEventLink);
};
