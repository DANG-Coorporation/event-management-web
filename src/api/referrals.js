import jsonServer from "./dbjson";

export const postReferralLinks = async ({ userid, referralCode }) => {
  const response = jsonServer.post("/referrallinks", {
    userid,
    referralCode,
  });
  return response;
};
