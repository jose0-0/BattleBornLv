import { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import gsap from "gsap";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/#services",
  },
  {
    title: "Reviews",
    path: "/#reviews",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const navContainerRef = useRef(null);

  const toggleNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0, //
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            {/* <img src="/images/logo.png" className="w-10"/> */}
            <a className="text-white" href="/">
              Battle Born Lv
            </a>
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:flex">
              {navItems.map((item, index) => (
                <a key={index} href={item.path} className="nav-hover-btn">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          {/* mobile Nav */}
          <div onClick={toggleNav} className="block md:hidden z-10">
            {mobileNavVisible ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} color="white" />
            )}
          </div>

          <div
            className={
              mobileNavVisible
                ? "xl:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white text-black ease-in duration-300 rounded"
                : "xl:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen text-white ease-in duration-300"
            }
          >
            {navItems.map((link, index) => {
              return (
                <a
                  onClick={toggleNav}
                  href={link.path}
                  key={index}
                  className="p-4 text-4xl duration-300"
                >
                  {link.title}
                </a>
              );
            })}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
