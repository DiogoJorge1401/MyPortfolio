import "./index.scss";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActiveLink = (link: string) => (activeLink === link ? " active" : "");

  const onUpdateActiveLink =
    (link: string) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.stopPropagation();
      setActiveLink(link);
    };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={`navbar-link${isActiveLink("home")}`}
              onClick={onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={`navbar-link${isActiveLink("skills")}`}
              onClick={onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={`navbar-link${isActiveLink("projects")}`}
              onClick={onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>

            <button className="vvd" onClick={() => alert("contact")}>
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
