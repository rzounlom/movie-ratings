export const caluculateRating = (ratings = []) => {
  //A utility function to calculate the average rating of the movie
  const rating = ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;
  if (!rating) {
    //if there is no rating, return 0
    return 0;
  }

  return Math.floor(rating).toFixed(1); //return the rating rounded to the nearest whole number
};
