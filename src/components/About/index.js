import React from 'react';
import Image from '../../assets/images/anthonypena-2.jpeg'

function About(props) {

  const {
    currentCategory
  } = props;

  // console.log(currentCategory);

  if (currentCategory === "ABOUT") {

    return (
      <section className="my-5 aboutStyle">
        <div className="aboutContainers aboutImage">
          <img src={Image} className="my-2 " style={{ width: "90%" }} alt="cover" />
        </div>
        <div className=" aboutContainers aboutText">
          <p className="aboutTextTitle">
            Artist & Web Developer
          </p>
          <div className="descriptionText">
            <p>
              A graduate from the Peabody Music Conservatory at The Johns Hopkins University, and a current student at the University of Utah's Full Stack Web Development Professional Education program.
            </p>
          </div>
        </div>
      </section>
    );

  } else {
    return (<h1> </h1>);
  }

}

export default About;
