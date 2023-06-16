import { Typography } from '../design-system/typography';
import theme from '../styles/theme';
import { PriceWrapper } from "../styles/price";

const Price = ({ price, currency, reducedPrice }) => {
    const color = reducedPrice ? theme.colors.red : theme.colors.black;
    const fontSize = reducedPrice ? 1.3 : 1.6
    const textDecoration = reducedPrice ? "line-through" : "none";

    return <PriceWrapper>
        <Typography
          color={color}
          fontSize={fontSize}
          fontWeight={600}
          textDecoration={textDecoration}
          textAlign="right">
            {price} {currency}
        </Typography>
        {reducedPrice && <Typography
          color={theme.colors.black}
          fontSize={1.6}
          fontWeight={600}
          textDecoration="none"
          textAlign="right">
            {reducedPrice} {currency}
        </Typography>}
        <Typography
          color="#3E4958"
          fontSize={1.2}
          fontWeight={500}
          lineHeight={14.2}
          textAlign="right">
            per person
        </Typography>
    </PriceWrapper>
}

export default Price;