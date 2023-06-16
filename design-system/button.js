import styled, {css} from 'styled-components';

export const Btn = styled.button`
${({ theme }) => css`
width: 100%;
height: 49px;
box-sizing: border-box;
border: none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 30px;
background: ${(theme.colors.button)};
border-radius: 6px;
`}
`

const Button = ({children}) => {
    return <Btn>
        {children}
    </Btn>
}

export default Button;