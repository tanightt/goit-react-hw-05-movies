import { useHttp } from 'hooks/useHttp';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/api';
import { ActorItem, ActorText, ActorTittle, ActorsList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors] = useHttp(fetchCredits, movieId);
  const cast = actors.cast;

  if (!cast || cast.length === 0) {
    return <p>We don't have any cast for this movie.</p>;
  }

  return (
    <ActorsList>
      {cast?.map(act => (
        <ActorItem key={act.cast_id}>
          <img
            src={
              act.profile_path
                ? `https://image.tmdb.org/t/p/w300/${act.profile_path}`
                : `https://www.svgrepo.com/download/169194/human-head-silhouette-with-cogwheels.svg`
            }
            alt={act.name}
            width="100"
            height="150px"
          />
          <ActorTittle>{act.name}</ActorTittle>
          <ActorText>{act.character}</ActorText>
        </ActorItem>
      ))}
    </ActorsList>
  );
};

export default Cast;
