import React, { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Nav from './components/Nav';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [currentCategory, setCurrentCategory] = useState("ANTHONY PEÑA");

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <BackgroundVideo></BackgroundVideo>
      {/* <h1>ANTHONY PENA</h1> */}
      <Nav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>

      </main>
      {/* <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main> */}
      <Footer />
    </div>
  );
}

export default App;
