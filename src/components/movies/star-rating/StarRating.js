import "./StarRating.css";

const StarRating = ({ totalStars = 5, setRating, setHover, rating, hover }) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
