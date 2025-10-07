import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HireMeButton = ({ className = '' }) => (
  <button className={`w-full text-md font-extralight bg-cyan-900 hover:bg-cyan-800 text-white shadow-sm rounded-md px-5 py-2.5 duration-300 ${className}`}>
    Hire Me
  </button>
);

const NavbarMenu = () => {
  return [
    { id: 1, title: 'AboutMe ', link: '#aboutMe' },
    { id: 2, title: 'Services', link: '#services' },
    { id: 3, title: 'Contact', link: '#contact' },
  ];
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="w-full">
      <nav>
        <div className="container flex justify-between items-center py-4 relative">
          <div className="text-xl sm:text-2xl font-extralight flex items-center gap-2 py-4">
            <a className="w-8 h-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full border-2 sm:border-3 border-cyan-900 text-cyan-900">
              M
            </a>
            <span>
              <span>
                enz <span className='text-cyan-900'>Service</span>
              </span>
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="font-extralight text-2xl m-0 flex items-center gap-6 cursor-pointer">
              {NavbarMenu().map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="inline-block font-extralight py-1 px-4 hover:text-cyan-900">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Hamburger Button for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md text-cyan-900 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        
          {isMenuOpen && (
            <div className="md:hidden absolute top-full right-0 w-full bg-white shadow-lg border-t z-40">
              <ul className="flex flex-col gap-2 px-6 py-4 text-lg">
                {NavbarMenu().map((item) => (
                  <li key={item.id}>
                    <a href={item.link} className="block py-2 px-4 hover:bg-cyan-50 rounded" onClick={() => setIsMenuOpen(false)}>{item.title}</a>
                  </li>
                ))}
              </ul>
              <div className="px-6 pb-4">
                <HireMeButton />
              </div>
            </div>
          )}
          <div className="hidden md:block">
            <HireMeButton className="ml-4" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
