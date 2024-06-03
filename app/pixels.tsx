import Script from 'next/script';
import { FC } from 'react';

interface GoogleAnalyticsProps {
  trackingId: string;
}

const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({ trackingId }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}');
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-881899006/GDNtCJfEvrYZEP7rwqQD',
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
