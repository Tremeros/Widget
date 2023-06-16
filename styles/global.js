import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}
	html {
        font-size: ${theme.globals.fontSize};
		font-family: 'Inter', sans-serif;
		body {
			display: flex;
			justify-content: center;
		}
	}
`}
`