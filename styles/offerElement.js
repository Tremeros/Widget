import styled, { css } from 'styled-components';

export const OfferElementWrapper = styled.div`
${({ theme }) => css`
  width: auto;
  height: auto;
  padding: 18px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  &:nth-of-type(even) {
    background-color: ${theme.colors.grey};
  }
  `}
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
padding: 0;
`

export const DateWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0;
gap: 5px;
`

export const Date = styled.span`
font-size: 1.4rem;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
`