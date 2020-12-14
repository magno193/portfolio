import Document, {
  DocumentContext,
  Head, Html, Main,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt">
        <Head>
          <title>Portfólio | Alexandre Ferreira | Desenvolvedor Fullstack e Javascript</title>
          <meta charSet="utf-8" />
          <meta property="og:url" content="https://portfolio.magno193.vercel.app/" />
          <meta
            name="description"
            content="Meu nome é Alexandre Magno de Lima Ferreira, tecnólogo graduado em análise e desenvolvimento de sistemas e aspirante aos temas de composição musical e design."
          />
          <meta
            property="og:description"
            content="Meu nome é Alexandre Magno de Lima Ferreira, tecnólogo graduado em análise e desenvolvimento de sistemas e aspirante aos temas de composição musical e design."
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
