import '@styles/globals.css'
// import GTM from '@components/GTM';

function Application({ Component, pageProps }) {
  return (
    <>
      {/* <GTM /> */}
      <Component {...pageProps} />
    </>
  )

}

export default Application
