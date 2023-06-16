import Meta from './Meta';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global.js';
import theme from '../styles/theme.js';

const Layout = ({ children }) => {
    return (
      <>
        <Meta />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </>
    )
  }

  export default Layout

