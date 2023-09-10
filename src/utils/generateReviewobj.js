export const generateReviewObject = (userList = [], ReviewList = []) => {
  if (userList.length === 0 || ReviewList.length === 0) {
    return [];
  }

  if ((userList.length != ReviewList.length) === 0) {
    return [];
  }

  const final = [];
  for (let i = 0; i < ReviewList.length; i++) {
    const filtered = userList.find((item) => item.id === ReviewList[i].userId);
    const { fullName, username, email, id } = filtered;
    // delete user.password;
    const review = ReviewList[i];
    const obj = {
      star: review.star,
      user: { fullName, username, email, id },
      comment: review.comment,
      commentTime: review.commentTime,
      isLiked: review.isLiked,
    };
    final.push(obj);
  }

  return final;
};
