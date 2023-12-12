// GTM.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';

const GTM_ID = 'GTM-PFXG4FHQ'; // Replace with your GTM container ID

const GTM = () => {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });

    // Trigger GTM on route change
    const handleRouteChange = (url) => {
      TagManager.pageview({ url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Unsubscribe from the event when the component is unmounted
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default GTM;
