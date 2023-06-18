import Image from 'next/image';
import OfferElement from './OfferElement';
import { Typography } from '../design-system/typography';
import { v4 as uuidv4 } from 'uuid';
import theme from '../styles/theme';
import { ListWrapper, AllOffersWrapper, ImageWrapper, Title } from '../styles/listItem';
import { useCreateOffersList } from '../hooks/use-create-offers-list';


const OffersCard = ({ countryOffers }) => {

  const { country, offers } = countryOffers;

  const { offersList, showAllOffers, showAllOffersHandler } = useCreateOffersList(offers);

  const _offersList = offersList?.map(offer => {
      return <OfferElement key={uuidv4()} offer={offer} />
    });

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
          {_offersList}
        </ul>
        {!showAllOffers && <AllOffersWrapper>
          <Typography
            onClick={showAllOffersHandler}
            color={theme.colors.blue}
            fontSize={1.4}
            fontWeight={600}
            lineHeight={17}
            cursor="pointer">
              See all offers
            </Typography>
          <Image src="/arrow-left.svg" width={65} height={34} alt="An SVG of an eye" />
        </AllOffersWrapper>}
    </ListWrapper>
}

export default OffersCard;