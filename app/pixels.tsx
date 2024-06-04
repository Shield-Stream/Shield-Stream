import Script from 'next/script';
import { FC } from 'react';

interface GoogleAnalyticsProps {
  trackingId: string;
  analyticsId: string;
}

const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({ trackingId, analyticsId }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}');
        `}
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': '${analyticsId}',
                'value': 1.0,
                'currency': 'BRL',
                'event_callback': callback
            });
            return false;
          }
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
