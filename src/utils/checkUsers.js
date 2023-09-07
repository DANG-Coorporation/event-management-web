export const checkIsLogedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};

export const parseToken = () => {
  try {
    const token = localStorage.getItem("token");
    const decoded = atob(token);
    return JSON.parse(decoded);
  } catch (error) {
    console.log("debug error", error);
    return null;
  }
};

export const encodeToken = (token) => {
  return btoa(JSON.stringify(token));
};

export const storeToken = (data) => {
  try {
    const token = encodeToken(data);
    localStorage.setItem("token", token);
  } catch (error) {
    console.log("debug error", error);
    return null;
  }
};
