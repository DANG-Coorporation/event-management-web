import openStreetMapApi from "./openStreetMap";
// https://nominatim.openstreetmap.org/search?q=citeureup,+bogor&format=json&polygon=1&addressdetails=1

const getCitySuggestions = async (city) => {
  const result = await openStreetMapApi.get(
    `search?city=${city}&format=json&polygon=1&addressdetails=1&limit=8`
  );
  return result.data;
};

const getAddressSuggestions = async (address) => {
  const result = await openStreetMapApi.get(
    `search?q=${address}&format=json&polygon=1&addressdetails=1&limit=8`
  );
  return result.data;
};

export { getAddressSuggestions, getCitySuggestions, getlatLong };
