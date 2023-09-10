export const calculateAverageRating = (data = []) => {
  const maxRating = data.length;
  let ratings = data.map((item) => item.star);
  return (ratings.reduce((a, b) => a + b) / maxRating).toPrecision(2);
};
