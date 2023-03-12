import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily};
    
  }
  @media only screen and (min-width: ${theme.screens.min}) {
    body {
      font-size: ${theme.fontSizes.large};
    }
  }

  @media only screen and (max-width: ${theme.screens.max}) {
    body {
      font-size: ${theme.fontSizes.small};
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
