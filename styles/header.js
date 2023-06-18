import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    @media (min-width: 900px) {
      justify-content: space-between;
     }
`
export const Title = styled.h1`
font-style: normal;
font-weight: 700;
line-height: 39px;
font-size: 2rem;

@media (min-width: 900px) {
  font-size: 3.2rem;
 }
 }
`