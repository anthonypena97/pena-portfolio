import React from 'react';
import ResumeFile from '../../assets/documents/ANTHONYPENA_RESUME_AUGUST_2021.pdf'

function Resume(props) {

  const {
    currentCategory
  } = props;

  // console.log(currentCategory);

  if (currentCategory === "RESUME") {

    return (
      <section className="my-5 resumeSection">
        <div className="container">
          <div className="row-md-12">
            <div className="col resumeItem">
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
            <div className="col-md-12 resumeItem">
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
            <div className="col-md-12 resumeItem">
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
        <div className="resumeDownload">

          <a href={ResumeFile} download="ANTHONYPENA_RESUME_2021.pdf" target="_blank" rel="noopener noreferrer" >
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