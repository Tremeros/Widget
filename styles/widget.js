import styled from 'styled-components';

export const WidgetWrapper = styled.div`
   width: auto;
   height: 108.8rem;
`

export const WidgetList = styled.ul`
   width: auto;
   height: auto;
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto;
   grid-gap: 3.2rem;

   @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
   }

   @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
   }
`

export const ButtonWrapper = styled.div`
  margin: 40px 0;
`