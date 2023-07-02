import fullStar from '../assets/full_star.svg';
import halfStar from '../assets/half_star.svg';

interface StarRatingProps {
  rating: string;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const fullStarCount = Math.floor(Number(rating));
  const hasHalfStar = Number(rating) % 1 !== 0;

  const stars = (() => {
    const stars = [];

    for (let i = 0; i < fullStarCount; i++) {
      stars.push(<img key={i} src={fullStar} alt="full star" className="mr-2" />);
    }

    if (hasHalfStar) {
      stars.push(<img key="half" src={halfStar} alt="half star" />);
    }

    return stars;
  })();

  return <div className="star-ratings m-2 flex flex-row">{stars}</div>;
};

export default StarRating;
