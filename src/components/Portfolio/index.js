import React from 'react';
import Spotify from '../../assets/icons/spotify.jpg'
import Book from '../../assets/icons/book.jpg'
import Cloud from '../../assets/icons/cloud.jpg'
import Tape from '../../assets/icons/tape.jpg'
import Hiker from '../../assets/icons/HIKER.jpg'
import Game from '../../assets/icons/game.jpg'

function Portfolio(props) {

  const {
    currentCategory
  } = props;


  if (currentCategory === "PORTFOLIO") {

    return (
      <div className="container portfolioSection">

        <div className="row">

          <div className="col-md">

            {/* OFFLINE LIBRARY */}
            <div className="card portfolioBody" style={{ width: "18rem" }}>
              <img src={Spotify} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioLink">' OFFLINE LIBRARY '</li>
                <a href="https://github.com/anthonypena97/spotify-library" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">GITHUB</li>
                </a>
                <a href="https://offline-library.herokuapp.com" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">LINK</li>
                </a>
              </ul>
            </div>

          </div>



          <div className="col-md">

            {/* WEATHER DASHBOARD*/}
            <div className="card portfolioBody" style={{ width: "18rem" }}>
              <img src={Cloud} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioLink">' WEATHER DASHBOARD '</li>
                <a href="https://github.com/anthonypena97/weather-dashboard" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">GITHUB</li>
                </a>
                <a href="https://anthonypena97.github.io/weather-dashboard/" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">LINK</li>
                </a>
              </ul>
            </div>

          </div>

          <div className="col-md">

            {/*BOOK TIME*/}
            <div className="card portfolioBody" style={{ width: "18rem" }}>
              <img src={Book} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioLink">' BOOK TIME '</li>
                <a href="https://github.com/anthonypena97/book-time" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">GITHUB</li>
                </a>
                <a href="https://book-time-app.herokuapp.com/" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">LINK</li>
                </a>
              </ul>
            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-md">

            {/* HIKER*/}
            <div className="card portfolioBody" style={{ width: "18rem" }}>
              <img src={Hiker} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioLink">' TRAIL FINDERS '</li>
                <a href="https://github.com/anthonypena97/01-project" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">GITHUB</li>
                </a>
                <a href="https://anthonypena97.github.io/01-project/" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">LINK</li>
                </a>
              </ul>
            </div>

          </div>

          <div className="col-md">

            {/* TEAM UP */}
            <div className="card portfolioBody" style={{ width: "18rem" }}>
              <img src={Game} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioLink">' TEAM UP '</li>
                <a href="https://github.com/Jsieler/team-up" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">GITHUB</li>
                </a>
                <a href="https://protected-depths-21600.herokuapp.com/" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">LINK</li>
                </a>
              </ul>
            </div>

          </div>

          <div className="col-md">

            {/* REICHPHASE */}
            <div className="card portfolioBody" style={{ width: "18rem" }}>
              <img src={Tape} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioLink">' REICHPHASE '</li>
                <a href="https://github.com/anthonypena97/reichphase" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">GITHUB</li>
                </a>
                <a href="https://github.com/anthonypena97/reichphase" rel="noreferrer" target="_blank">
                  <li className="list-group-item portfolioLink">LINK</li>
                </a>
              </ul>
            </div>

          </div>

        </div>

      </div>
    );

  } else {
    return (<h1> </h1>);
  }

}

export default Portfolio;