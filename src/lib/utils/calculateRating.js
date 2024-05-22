export const caluculateRating = (ratings = []) => {
  //calculate the average rating of the movie
  const rating = ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;
  if (!rating) {
    return 0;
  }

  return Math.floor(rating).toFixed(1);
};
