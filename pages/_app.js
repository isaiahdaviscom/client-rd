import '@styles/globals.css'
import Layout from '../components/Layout';
import GTM from '@components/GTM';

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <GTM />
      <Component {...pageProps} />
    </Layout>
  )

}

export default Application
