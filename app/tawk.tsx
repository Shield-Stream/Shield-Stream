import Script from 'next/script';
import { FC } from 'react';

interface TawkProps {
  uri: string;
}

const Tawk: FC<TawkProps> = ({ uri }) => {
  return (
    <>
      <Script id="tawk" strategy="afterInteractive">
        {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='${uri}';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `}
      </Script>
    </>
  );
};

export default Tawk;
