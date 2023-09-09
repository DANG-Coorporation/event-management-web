export const generateReviewObject = (userList = [], ReviewList = []) => {
  if (userList.length === 0 || ReviewList.length === 0) {
    return [];
  }

  const final = [];
  for (let i = 0; i < ReviewList.length; i++) {
    const { fullName, username, email, id } = userList[i];
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
