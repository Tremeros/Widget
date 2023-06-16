import { useCountStars } from '../hooks/use-count-stars';
import { StarsWrapper } from '../styles/stars';

const Stars = ({ quality }) => {
  const stars = useCountStars(quality)
  const starsList = stars.map(star => star)
    return <>
      <StarsWrapper>
        {starsList}
      </StarsWrapper>
    </>
}

export default Stars;