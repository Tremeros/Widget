import styled from 'styled-components';

export const WidgetWrapper = styled.div`
   width: auto;
   height: 1088px;
   padding: 10px;

   @media (min-width: 374px) {
      padding: 0;
     }
`

export const WidgetList = styled.ul`
   width: auto;
   height: auto;
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto;
   grid-gap: 32px;

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