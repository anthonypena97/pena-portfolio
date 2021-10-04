import React from 'react';
import ResumeFile from '../../assets/documents/ANTHONYPENA_RESUME_AUGUST_2021.pdf'

function Resume(props) {

  const {
    currentCategory
  } = props;

  // console.log(currentCategory);

  if (currentCategory === "RESUME") {

    // RESUME SECTION
    return (
      <section className="my-5 resumeSection">
        <div className="container">
          <div className="row">

            {/* FRONT END PROFICIENCY */}
            <div className="col-md resumeItem">
              Front End
              <br></br>
              <br></br>
              HTML5
              <br></br>
              CSS3
              <br></br>
              JAVSCRIPT
              <br></br>
              REACT
              <br></br>
              VUE
              <br></br>
              BOOSTRAP
              <br></br>
              P5
              <br></br>
              PYTHON
              <br></br>
              MAX
            </div>

            {/* BACK END PROFICIENCY */}
            <div className="col-md resumeItem">
              Back End
              <br></br>
              <br></br>
              NODE.JS
              <br></br>
              NPM
              <br></br>
              EXPRESS
              <br></br>
              HANDLEBARS
              <br></br>
              MYSQL
              <br></br>
              MONGODB
              <br></br>
              GRAPHQL
            </div>

            {/* DEVELOPERS TOOLS UNDER MY BELT */}
            <div className="col-md resumeItem">
              Dev Tools
              <br></br>
              <br></br>
              VSCODE
              <br></br>
              GITHUB
              <br></br>
              INSOMNIA
              <br></br>
              WORKBENCH
              <br></br>
              CODE SANDBOX
              <br></br>
              GRAPHQL STUDIO
              <br></br>
              MONGO ATLAS
              <br></br>
              NETLIFY
              <br></br>
              HEROKU
            </div>
          </div>
        </div>

        {/* DOWNLOAD TO MY RESUME */}
        <div className="resumeDownload">

          <a href={ResumeFile} className="resumeButton" download="ANTHONYPENA_RESUME_2021.pdf" target="_blank" rel="noopener noreferrer" >
            DOWNLOAD RESUME
          </a>

        </div >
      </section >
    );

  } else {
    return (<h1> </h1>);
  }

}

export default Resume;