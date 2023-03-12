import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.background};
    color: ${theme.text};
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
