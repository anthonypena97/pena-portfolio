import React, { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [currentCategory, setCurrentCategory] = useState("ABOUT");

  const [contactSelected, setContactSelected] = useState(false);

  const [dropdownState, setDropdownState] = useState(0);

  return (
    <div className="pageStyle">
      <BackgroundVideo></BackgroundVideo>
      {/* <h1>ANTHONY PENA</h1> */}
      <Nav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      ></Nav>
      <main className="mainStyle">

        {!contactSelected ? (
          <>

            <About
              currentCategory={currentCategory}
            ></About>

            <Resume
              currentCategory={currentCategory}
            ></Resume>

            <Portfolio
              currentCategory={currentCategory}
            ></Portfolio>

          </>
        ) : (
          <ContactForm></ContactForm>
        )}

      </main>
      <Footer />
    </div>
  );
}

export default App;
