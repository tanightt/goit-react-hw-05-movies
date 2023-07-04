import { useHttp } from 'hooks/useHttp';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [authors] = useHttp(fetchReviews, movieId);
  const reviews = authors.results;

  if (!reviews || reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <ul>
      {reviews?.map(rev => (
        <li key={rev.id}>
          {' '}
          <h3>Author: {rev.author}</h3>
          <p>{rev.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
