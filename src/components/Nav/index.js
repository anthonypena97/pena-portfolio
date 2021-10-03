import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
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
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              ABOUT
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
              PORTFOLIO
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#portfolio" onClick={() => setContactSelected(false)}>
              RESUME
            </a>
          </li>
          <li className="mx-2">
            <span onClick={() => setContactSelected(true)}>CONTACT</span>
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
