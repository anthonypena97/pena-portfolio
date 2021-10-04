import React from 'react';
function About(props) {

  const {
    currentCategory
  } = props;

  console.log(currentCategory);

  if (currentCategory === "ABOUT") {

    return (
      <section className="my-5 aboutStyle">
        <div className="aboutContainers aboutImage">
          <img src="/images/anthonypena-2.jpeg" className="my-2 " style={{ width: "100%" }} alt="cover" />
        </div>
        <div className=" aboutContainers aboutText">
          <p>
            Artist & Web Developer
          </p>
          <p>
            A graduate from the Peabody Music Conservatory at The Johns Hopkins University, and a current student at the University of Utah's Full Stack Web Development Professional Education program.
          </p>
        </div>
      </section>
    );

  } else {
    return (<h1> </h1>);
  }

}

export default About;
