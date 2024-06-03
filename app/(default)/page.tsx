export const metadata = {
  title: 'Proteção Avançada e Consultoria para Xtream UI e IPTV | XtreamShield',
  description: 'Proteção avançada para Xtream UI e IPTV com WAF, firewall e estratégias anti-DDoS. Consultoria especializada em segurança de streaming e proteção personalizada para Streamcreed e XUI One.',
  keywords: 'XUI, Xtream UI, Streamcreed, ataque ddos, iptv, waf, OTT, bruteforce de lista, Xtream codes, XC, web security, firewall, segurança, como proteger XUI, como proteger iptv, bruteforce de listas, shield, escudo, main server, protetor main server, singular, CDN, Proteção para o Xtream UI, consultoria iptv, Proteção Personalizada para o Streamcreed, Proteção Personalizada para o XUI One, streaming',
  openGraph: {
    title: 'Proteção Avançada e Consultoria para Xtream UI e IPTV',
    description: 'Descubra como proteger sua infraestrutura de IPTV e Xtream UI contra ataques DDoS, bruteforce e outras ameaças com nossas soluções personalizadas de segurança.',
    type: 'website',
    image: 'https://xtreamshield.com/images/logo.png',
    url: 'https://xtreamshield.com/',
    locale: 'pt_BR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XtreamShield - Proteção Avançada para Streaming',
    description: 'Descubra como a XtreamShield pode proteger seu serviço de streaming contra ataques e garantir a melhor experiência para seus usuários.',
    image: 'https://xtreamshield.com/images/logo.png'
  },
  author: 'XtremShield',
  robots: 'index, follow'
};

import GoogleAnalytics from '@/app/pixels';
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
export default function Home() {
  return (
    <>
      <GoogleAnalytics trackingId="AW-881899006/GDNtCJfEvrYZEP7rwqQD" />
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
