import styled from 'styled-components';

export const OfferElementWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 1.8rem;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  &:nth-of-type(even) {
    background-color: #F3F4F6;
  }
`

export const OfferTitleWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 12px;
`

export const OfferTitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
`

export const DateWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 5px;
`

export const Date = styled.span`
font-size: 1.4rem;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
`