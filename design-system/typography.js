import styled, { css } from 'styled-components';


export const Typography = styled.span`
	${({
        color,
        fontSize,
        fontWeight = 300,
        fontStyle = 'normal',
        lineHeight = 16,
        textAlign = 'center',
        textDecoration = 'none',
        cursor = 'auto',
     }) => css`
         font-style: ${fontStyle};
         font-weight: ${fontWeight};
         font-size: ${fontSize}rem;
         line-height: ${lineHeight}px;
         text-align: ${textAlign};
         color: ${color};
         text-decoration: ${textDecoration};
         cursor: ${cursor};
	`}
`