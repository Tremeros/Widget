import Button from '../design-system/button';
import {isMobile} from 'react-device-detect';
import { Typography } from '../design-system/typography';
import { HeaderWrapper, ButtonWrapper, Title } from '../styles/header';

const Header = () => {

  const fontSize = isMobile ? 2.1 : 3.2

    return (
        <HeaderWrapper>
          <Typography
            fontSize={fontSize}
            fontWeight={700}>
            Big saving on all inclusive trips
          </Typography>
          {!isMobile && <ButtonWrapper>
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
        </HeaderWrapper>
    )
}

export default Header;