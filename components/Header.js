import Button from '../design-system/button';
import { isMobile } from 'react-device-detect';
import { Typography } from '../design-system/typography';
import { HeaderWrapper, Title } from '../styles/header';
import theme from '../styles/theme';

const Header = () => {

    return (
        <HeaderWrapper>
          <Title>
            Big saving on all inclusive trips
          </Title>
          {!isMobile &&
              <Button
                  backgroundColor={theme.colors.button}
                  width="176px"
                  height="49px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="5px 30px"
                  borderRadius={6}
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
                <Typography
                  color="#000000"
                  fontSize={1.6}
                  fontWeight={600}
                  lineHeight={19}>
                  See all offers
                </Typography>
              </Button>}
        </HeaderWrapper>
    )
}

export default Header;