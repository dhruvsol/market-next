// @next/next/no-html-link-for-pages
import "../styles/app.sass";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
