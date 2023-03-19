import { logo, menu, close } from "../assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../style";


const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      scrollTop > 100
        ? setScrolled(true)
        : setScrolled(false)
    };


    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleLogoClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  }


  return (
    <nav
      className={`${styles.paddingX} 
      w-full flex items-center py-5 fixed top-0 z-20
      ${scrolled ? "backdrop-blur-md bg-[rgba(21,21,21,0.2)]" : "bg-transparent"}`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Logo  */}
        <Link to='/' className='flex items-center gap-2' onClick={() => handleLogoClick()} >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Taiseen &nbsp; <span className='hidden sm:block'> | JS Dev</span>
          </p>
        </Link>


        {/* Desktop Nav Menu */}
        <ul className='hidden sm:flex flex-row gap-10 list-none'>
          {
            navLinks.map((nav) => (
              <li
                key={nav.id}
                onClick={() => setActive(nav.title)}
                className={`${active === nav.title ? "text-white" : "text-secondary"} 
                hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }
        </ul>


        {/* Mobile Nav Menu */}
        <div className='flex sm:hidden flex-1 justify-end items-center'>
          <img
            alt='menu'
            src={toggle ? close : menu}
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} 
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {
                navLinks.map(({ id, title }) => (
                  <li
                    key={id}
                    onClick={() => { setToggle(!toggle); setActive(title); }}
                    className={`font-poppins font-medium cursor-pointer text-[16px] 
                    ${active === title ? "text-white" : "text-secondary"}`}
                  >
                    <a href={`#${id}`}>{title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
