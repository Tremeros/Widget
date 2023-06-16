import Header from './Header';
import ListItem from './ListItem';
import Button from '../design-system/button';
import {isMobile} from 'react-device-detect';
import { Typography } from '../design-system/typography';
import {WidgetWrapper, WidgetList, ButtonWrapper} from '../styles/widget';


const Widget = ({datas}) => {

    const datasList = datas?.map(data => {
        return <ListItem key={data.id} offer={data} />
    })
    return (
        <WidgetWrapper>
          <Header />
          <WidgetList>
            {datasList}
          </WidgetList>
          {isMobile && <ButtonWrapper>
            <Button>
            <Typography
                  color="#000000"
                  fontSize={1.6}
                  fontWeight={600}
                  lineHeight={19}>
                  See all offers
                </Typography>
              </Button>
            </ButtonWrapper>}
        </WidgetWrapper>
    )
}

export default Widget;