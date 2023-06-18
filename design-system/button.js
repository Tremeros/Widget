import styled, { css } from 'styled-components';

export const Button = styled.button`
${({
    backgroundColor = "#C7E7F5",
    width = "auto",
    height = "auto",
    border = "none",
    display = "block",
    flexDirection = "row",
    justifyContent = "center",
    alignItems = "center",
    padding,
    margin,
    borderRadius
 }) => css`
width: ${width};
height: ${height};
box-sizing: border-box;
border: ${border};
display: ${display};
flex-direction: ${flexDirection};
justify-content: ${justifyContent};
align-items: ${alignItems};
padding: ${padding};
margin: ${margin};
background: ${(backgroundColor)};
border-radius: ${borderRadius}px;
`}
`
export default Button;