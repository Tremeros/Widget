import {Typography} from '../design-system/typography';
import { OfferTypeWrapper, Rectangle } from '../styles/offerType';

const OfferType = ({ lastMinute, allInclusive}) => {
    const isDivider = lastMinute && allInclusive;

    return <OfferTypeWrapper>
        {lastMinute && <Typography
           color="#FF5353"
           fontSize={1.4}
           textAlign="right">
            Last Minute
        </Typography>}
        {isDivider && <Rectangle />}
        {allInclusive && <Typography
           color="#000000"
           fontSize={1.4}
           textAlign="right">
            All Inclusive
        </Typography>}
    </OfferTypeWrapper>
}

export default OfferType;