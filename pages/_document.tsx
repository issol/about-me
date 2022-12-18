import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />

        <link type='text/css' rel='stylesheet' href='css/base.css?ver=4' />
        <link type='text/css' rel='stylesheet' href='css/magnific.css?ver=4' />
        <link type='text/css' rel='stylesheet' href='css/animated-headlines.css?ver=4' />
        <link type='text/css' rel='stylesheet' href='css/style.css?ver=4' />
      </Head>
      <body>
        <script type='text/javascript' src='js/jquery.js?ver=4'></script>
        <script type='text/javascript' src='js/isotope.js'></script>
        <script type='text/javascript' src='js/magnific.js'></script>
        <script type='text/javascript' src='js/animated-headlines.js?ver=4'></script>
        <script type='text/javascript' src='js/waypoints.js?ver=4'></script>

        <script type='text/javascript' src='js/init.js?ver=4'></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
