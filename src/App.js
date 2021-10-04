import React, { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Nav from './components/Nav';
// import About from './components/About';
// import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [currentCategory, setCurrentCategory] = useState("ANTHONY PEÑA");

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
            {/* <Gallery currentCategory={currentCategory}></Gallery>
            <About></About> */}
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
