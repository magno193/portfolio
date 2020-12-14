import type { AppProps } from 'next/app';
import GlobalStyle from '../Styles/GlobalStyle';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
