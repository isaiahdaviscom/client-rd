// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add your custom head elements here */}
          <meta name="description" content="Custom Fades" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Custom Fades" />
          <meta name="keywords" content="barber, barber shop, custom fades" />
          <meta property="og:title" content="Custom Fades" />
          <meta property="og:description" content="Custom Fades" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://customfades.com" />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta property="og:image:alt" content="Custom Fades" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Custom Fades" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@customfades" />
          <meta name="twitter:creator" content="@customfades" />
          <meta name="twitter:title" content="Custom Fades" />
          <meta name="twitter:description" content="Custom Fades" />
          <meta name="twitter:image" content="/images/og-image.jpg" />
          <meta name="twitter:image:alt" content="Custom Fades" />
          <link rel="canonical" href="https://customfades.com" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
          {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
          {/* <link rel="icon" href="/favicon.webp" type="image/webp" /> */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preload" href="/fonts/inter-var-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
