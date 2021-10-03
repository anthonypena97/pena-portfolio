import React, { useEffect } from 'react';

function Nav(props) {
  const {
    setCurrentCategory,
    // contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

  return (
    <header className="flex-row px-1 headerStyle">
      <h2 className="titleContainer">
        <a className="siteTitle" data-testid="link" href="/">
          ANTHONY PEÑA
        </a>
      </h2>
      <nav>
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
          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
