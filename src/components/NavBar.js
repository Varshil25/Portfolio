import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/Artboard 2.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import ThemeToggle from './ThemeToggle';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={`p-3 ${scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"} text-black dark:text-white`}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {['home', 'about', 'projects', 'experience', 'skills', 'blog', 'contact'].map(link => (
              <Nav.Link key={link} href={`#${link}`} className={activeLink === link ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(link)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          {/* Theme Toggle button */}
          <div className="d-flex align-items-center ms-3">
            <ThemeToggle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
