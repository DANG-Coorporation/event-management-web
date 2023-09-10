export const calculateRatingData = (data = []) => {
  const final = [];
  for (let i = 1; i <= 5; i++) {
    let obj = {
      star: i,
      value: data.filter((item) => item.star === i).length,
    };
    final.push(obj);
  }

  return {
    rating: final,
    length: data.length,
  };
};
