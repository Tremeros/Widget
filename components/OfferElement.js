import Stars from './Stars';
import OfferType from './OfferType';
import { Typography } from '../design-system/typography';
import Price from './Price';
import {
    OfferElementWrapper,
    OfferTitleWrapper,
    OfferTitleContainer,
    DateWrapper,
    Date }
  from '../styles/offerElement';


const OfferElement = ({ offer }) => {

  const {name, quality, price, currency, reducedPrice, lastMinute, allInclusive} = offer;

    return <OfferElementWrapper>
        <OfferTitleWrapper>
          <OfferTitleContainer>
            <Typography
              color="#000000"
              fontSize={1.6}
              fontWeight={700}
              lineHeight={19}>
              {name}
            </Typography>
            <Stars quality={quality} />
          </OfferTitleContainer>
          <DateWrapper>
              <Date>18.11.2022</Date>
              <OfferType
                lastMinute={lastMinute}
                allInclusive={allInclusive} />
          </DateWrapper>
          </OfferTitleWrapper>
          <Price
            price={price}
            currency={currency}
            reducedPrice={reducedPrice} />
    </OfferElementWrapper>
}

export default OfferElement;