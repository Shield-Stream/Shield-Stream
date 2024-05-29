import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img src="/images/logo.png" alt="XtreamShield" width={313} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="https://api.whatsapp.com/send?phone=555555555555&amp;text=Ol%C3%A1%2C%20gostaria%20de%20um%20usu%C3%A1rio%20teste." target="_blank" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
