import axios from "axios";

const openStreetMapApi = axios.create({
  //https://nominatim.openstreetmap.org/search?q=citeureup,+bogor&format=json&polygon=1&addressdetails=1
  baseURL: "https://nominatim.openstreetmap.org/",
});

export default openStreetMapApi;
