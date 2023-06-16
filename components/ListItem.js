import Image from 'next/image';
import OfferElement from './OfferElement';
import { Typography } from '../design-system/typography';
import { v4 as uuidv4 } from 'uuid';
import theme from '../styles/theme';
import { ListWrapper, AllOffersWrapper, ImageWrapper, Title } from '../styles/listItem';


const ListItem = ({ offer }) => {

  const {country, offers} = offer;

  const offersList = offers?.map(offer => {
    return <OfferElement key={uuidv4()} offer={offer} />
  })

    return <ListWrapper>
         <ImageWrapper>
         <Image
           src="/images/egipt.png"
           width={335}
           height={199}
           alt="Picture of the author"
       />
        <Title>
          <Typography
          fontSize={3.2}
          fontWeight={600}
          color={theme.colors.white}>
            {country}
          </Typography>
        </Title>
         </ImageWrapper>
       <ul>
        {offersList}
       </ul>
       <AllOffersWrapper>
         <Typography
           color={theme.colors.blue}
           fontSize={1.4}
           fontWeight={600}
           lineHeight={17}>
            See all offers
          </Typography>
         <Image src="/arrow-left.svg" width={65} height={34} alt="An SVG of an eye" />
       </AllOffersWrapper>
    </ListWrapper>
}

export default ListItem;