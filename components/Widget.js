import Header from './Header';
import ListItem from './OffersCard';
import Button from '../design-system/button';
import { isMobile } from 'react-device-detect';
import { Typography } from '../design-system/typography';
import { WidgetWrapper, WidgetList } from '../styles/widget';
import theme from '../styles/theme';


const Widget = ({ datas }) => {

    const datasList = datas?.map(data => {
        return <ListItem key={data.id} countryOffers={data} />
    })
    return (
        <WidgetWrapper>
          <Header />
          <WidgetList>
            {datasList}
          </WidgetList>
          {isMobile &&
            <Button
                backgroundColor={theme.colors.button}
                width="100%"
                height="49px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="5px 30px"
                margin="40px 0"
                borderRadius={6}>
            <Typography
                  color="#000000"
                  fontSize={1.6}
                  fontWeight={600}
                  lineHeight={19}>
                  See all offers
                </Typography>
              </Button>}
        </WidgetWrapper>
    )
}

export default Widget;