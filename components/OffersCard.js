import { useState, useEffect } from 'react';
import Image from 'next/image';
import OfferElement from './OfferElement';
import { Typography } from '../design-system/typography';
import { v4 as uuidv4 } from 'uuid';
import theme from '../styles/theme';
import { ListWrapper, AllOffersWrapper, ImageWrapper, Title } from '../styles/listItem';


const OffersCard = ({ countryOffers }) => {
  const [offersList, setOffersList] = useState([]);
  const [showAllOffers, setShowAllOffers] = useState(false);
  const { country, offers } = countryOffers;

  useEffect(() => {
    if (offers.length <= 3) {
      setShowAllOffers(true);
    }

    const _offers = !showAllOffers ? offers.slice(0, 3) : offers;
    setOffersList(_offers);

  }, [showAllOffers])

  const _offersList = offersList?.map(offer => {
      return <OfferElement key={uuidv4()} offer={offer} />
    })

  const showAllOffersHandler = () => {
    setShowAllOffers(true);
  }

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