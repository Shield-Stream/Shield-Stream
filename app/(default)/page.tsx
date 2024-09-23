// export const metadata = {
//   title: 'Proteção Avançada e Consultoria para Xtream UI e IPTV | XtreamShield',
//   description: 'Proteção avançada para Xtream UI e IPTV com WAF, firewall e estratégias anti-DDoS. Consultoria especializada em segurança de streaming e proteção personalizada para Streamcreed e XUI One.',
//   keywords: 'XUI, Xtream UI, Streamcreed, ataque ddos, iptv, waf, OTT, bruteforce de lista, Xtream codes, XC, web security, firewall, segurança, como proteger XUI, como proteger iptv, bruteforce de listas, shield, escudo, main server, protetor main server, singular, CDN, Proteção para o Xtream UI, consultoria iptv, Proteção Personalizada para o Streamcreed, Proteção Personalizada para o XUI One, streaming, como configurar firewall para IPTV, como configurar firewall para XUI, como defender IPTV contra DDoS, como defender XUI contra DDoS, soluções de segurança para IPTV, soluções de segurança para XUI, proteção completa para IPTV, proteção completa para XUI, como proteger meu servidor IPTV, como proteger meu servidor XUI, segurança para serviços de streaming IPTV, segurança para plataformas XUI, prevenção de ataques DDoS em IPTV, prevenção de ataques DDoS em XUI, como proteger a infraestrutura IPTV, como proteger a infraestrutura XUI, segurança avançada para IPTV, segurança avançada para XUI, proteger meu serviço de streaming, proteger IPTV contra invasões, proteger XUI contra invasões, segurança de streaming, proteção de streaming, firewall para streaming, proteção contra DDoS, como proteger IPTV, proteção para Xtream UI, proteção para Streamcreed, proteção personalizada de streaming, consultoria de segurança IPTV, como proteger meu IPTV, como proteger meu XUI, proteção contra ataques DDoS XUI, proteção contra ataques DDoS IPTV, segurança para meu serviço de IPTV, segurança para meu XUI, proteger meu IPTV contra DDoS, proteger meu XUI contra DDoS, como evitar ataques DDoS no IPTV, como evitar ataques DDoS no XUI, melhores práticas de segurança para IPTV, melhores práticas de segurança para XUI',
//   openGraph: {
//     title: 'Proteção Avançada e Consultoria para Xtream UI e IPTV',
//     description: 'Descubra como proteger sua infraestrutura de IPTV e Xtream UI contra ataques DDoS, bruteforce e outras ameaças com nossas soluções personalizadas de segurança.',
//     type: 'website',
//     image: 'https://xtreamshield.com/images/logo.png',
//     url: 'https://xtreamshield.com/',
//     locale: 'pt_BR'
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'XtreamShield - Proteção Avançada para Streaming',
//     description: 'Descubra como a XtreamShield pode proteger seu serviço de streaming contra ataques e garantir a melhor experiência para seus usuários.',
//     image: 'https://xtreamshield.com/images/logo.png'
//   },
//   author: 'XtremShield',
//   robots: 'index, follow'
// };
export const metadata = {
  title: 'Advanced Protection and Consulting for Xtream UI and IPTV | XtreamShield',
  description: 'Advanced protection for Xtream UI and IPTV with WAF, firewall, and anti-DDoS strategies. Specialized consulting in streaming security and personalized protection for Streamcreed and XUI One.',
  keywords: 'XUI, Xtream UI, Streamcreed, DDoS attack, IPTV, WAF, OTT, list bruteforce, Xtream codes, XC, web security, firewall, security, how to protect XUI, how to protect IPTV, list bruteforce, shield, protector, main server, main server protector, singular, CDN, Protection for Xtream UI, IPTV consulting, Personalized Protection for Streamcreed, Personalized Protection for XUI One, streaming, how to configure firewall for IPTV, how to configure firewall for XUI, how to defend IPTV against DDoS, how to defend XUI against DDoS, security solutions for IPTV, security solutions for XUI, complete protection for IPTV, complete protection for XUI, how to protect my IPTV server, how to protect my XUI server, security for IPTV streaming services, security for XUI platforms, prevention of DDoS attacks in IPTV, prevention of DDoS attacks in XUI, how to protect IPTV infrastructure, how to protect XUI infrastructure, advanced security for IPTV, advanced security for XUI, protect my streaming service, protect IPTV against invasions, protect XUI against invasions, streaming security, streaming protection, firewall for streaming, protection against DDoS, how to protect IPTV, protection for Xtream UI, protection for Streamcreed, personalized streaming protection, IPTV security consulting, how to protect my IPTV, how to protect my XUI, protection against DDoS attacks XUI, protection against DDoS attacks IPTV, security for my IPTV service, security for my XUI, protect my IPTV against DDoS, protect my XUI against DDoS, how to avoid DDoS attacks on IPTV, how to avoid DDoS attacks on XUI, best security practices for IPTV, best security practices for XUI',
  openGraph: {
    title: 'Advanced Protection and Consulting for Xtream UI and IPTV',
    description: 'Discover how to protect your IPTV and Xtream UI infrastructure against DDoS attacks, bruteforce, and other threats with our customized security solutions.',
    type: 'website',
    image: 'https://xtreamshield.com/images/logo.png',
    url: 'https://xtreamshield.com/',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XtreamShield - Advanced Protection for Streaming',
    description: 'Discover how XtreamShield can protect your streaming service from attacks and ensure the best experience for your users.',
    image: 'https://xtreamshield.com/images/logo.png'
  },
  author: 'XtremShield',
  robots: 'index, follow'
};


import GoogleAnalytics from '@/app/pixels';
import Tawk from '@/app/tawk';
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
export default function Home() {
  return (
    <>
      <GoogleAnalytics trackingId="AW-881899006" analyticsId="AW-881899006/GDNtCJfEvrYZEP7rwqQD" />
      <Tawk uri='https://embed.tawk.to/66632383981b6c56477aa29f/1hvpk5f1h'/>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
