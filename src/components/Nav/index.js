import React, { useEffect } from 'react';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import $ from 'jquery';

function Nav(props) {
  const {
    setCurrentCategory,
    // contactSelected,
    currentCategory,
    setContactSelected,
    dropdownState,
    setDropdownState
  } = props;

  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

  // ================================== logic for dropdown menu ====================================
  const smallMenu = () => {

    // open dropdown menu
    if (dropdownState === 0) {

      $("#aboutDrop").attr("style", "display:block");

      setTimeout(() => { $("#portfolioDrop").attr("style", "display:block"); }, 125);

      setTimeout(() => { $("#resumeDrop").attr("style", "display:block"); }, 250);

      setTimeout(() => { $("#contactDrop").attr("style", "display:block"); }, 500);

      setDropdownState(1)

      // close dropdown menu
    } else if (dropdownState === 1) {

      setTimeout(() => { $("#aboutDrop").attr("style", "display:none"); }, 500);

      setTimeout(() => { $("#portfolioDrop").attr("style", "display:none"); }, 250);

      setTimeout(() => { $("#resumeDrop").attr("style", "display:none"); }, 125);

      $("#contactDrop").attr("style", "display:none")

      setDropdownState(0);

    }

  }

  return (
    <header className="flex-row px-1 headerStyle">
      <h2 className="titleContainer">
        <a className="siteTitle" data-testid="link" href="/">
          ANTHONY PEÑA
        </a>
      </h2>

      {/* =============================== regular navbar ================================ */}

      <nav className="bigNav">
        <ul className="flex-row ulStyle">

          {/* ABOUT SECTION */}
          <li className="mx-2">
            <span
              onClick={() => {
                setCurrentCategory("ABOUT");
                setContactSelected(false);
              }}
            >
              <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                ABOUT
              </a>
            </span>
          </li>

          {/* PORTFOLIO SECTION */}
          <li className="mx-2">
            <span
              onClick={() => {
                setCurrentCategory("PORTFOLIO");
                setContactSelected(false);
              }}
            >
              <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
                PORTFOLIO
              </a>
            </span>
          </li>

          {/* RESUME SECTION */}
          <li className="mx-2">
            <span
              onClick={() => {
                setCurrentCategory("RESUME");
                setContactSelected(false);
              }}
            >
              <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
                RESUME
              </a>
            </span>
          </li>

          {/* CONTACT SECTION */}
          <li className="mx-2">
            <span onClick={() => { setCurrentCategory("CONTACT"); }}><a data-testid="contact" href="#contact" onClick={() => setContactSelected(true)}>
              CONTACT
            </a></span>
          </li>

        </ul>
      </nav>

      {/* =========================== dropdown menu logic ========================= */}

      <div className="smallNav">

        <span onClick={() => { smallMenu(true); }}>
          <p className="menuButton" >MENU</p>
        </span>

        {/* ABOUT TAB */}
        <span id="aboutDrop" style={{ display: "none" }}
          onClick={() => {
            setCurrentCategory("ABOUT");
            setContactSelected(false);
          }}
        >
          <a data-testid="about" href="#resume" onClick={() => setContactSelected(false)}>
            ABOUT
          </a>
        </span>

        {/* PORTFOLIO TAB */}
        <span id="portfolioDrop" style={{ display: "none" }}
          onClick={() => {
            setCurrentCategory("PORTFOLIO");
            setContactSelected(false);
          }}
        >
          <a data-testid="portfolio" href="#resume" onClick={() => setContactSelected(false)}>
            PORTFOLIO
          </a>
        </span>

        {/* RESUME TAB */}
        <span id="resumeDrop" style={{ display: "none" }}
          onClick={() => {
            setCurrentCategory("RESUME");
            setContactSelected(false);
          }}
        >
          <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
            RESUME
          </a>
        </span>

        {/* CONTACT TAB */}
        <span id="contactDrop" style={{ display: "none" }} onClick={() => { setCurrentCategory("CONTACT"); }}><a data-testid="contact" href="#contact" onClick={() => setContactSelected(true)}>
          CONTACT
        </a></span>



      </div>




    </header>
  );
}

export default Nav;
