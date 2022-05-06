import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.scss";

const Projects = () => {
  return (
    <div className={`container ${styles.projectsContainer}`} id="projects">
      <>
        <div className="section section-cards section-gray">
          <div className="title-area d-flex align-items-center flex-column text-center mt-lg-5">
            <h2 className="mt-5">Projects</h2>
            <div className="separator separator-danger">♦</div>
            {/* <p className="description">
              Gaia Bootstrap Template Pro comes with a large number of example
              pages, that give you to option to quickly setup the basic flows
              for your application. From registering to building your profile or
              setting a blog, we've got you covered.
            </p> */}
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4">
                <h3 className={`text-center ${styles.project__title}`}>
                  Model Page
                </h3>
                <div className={`card card-blog ${styles.container__image}`}>
                  <a
                    target="_blank"
                    href="https://modelpage.netlify.app/"
                    className="header"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/modelPageImage.jpeg"
                      className={`img-fluid ${styles.projectsImages}`}
                    />
                  </a>
                </div>
                <br />
                <h3 className={`text-center ${styles.project__title}`}>
                  Ramdon Quote
                </h3>
                <div className={`card card-blog ${styles.container__image}`}>
                  <a
                    target="_blank"
                    href="https://codepen.io/DaniSX97/full/OJOeRmy"
                    className="header"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/randomQuoteImage.jpeg"
                      className={`img-fluid ${styles.projectsImages}`}
                    />
                  </a>
                </div>
              </div>

              {/* 2nd column */}

              <div className="col-md-4">
                <h3 className={`text-center ${styles.project__title}`}>
                  Calculator
                </h3>
                <div className={`card card-blog ${styles.container__image}`}>
                  <a
                    target="_blank"
                    href="https://codepen.io/DaniSX97/full/NWXNQma"
                    className="header"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/calculatorImage.jpeg"
                      className={`img-fluid ${styles.projectsImages}`}
                    />
                  </a>
                </div>
                <br />
                <h3 className={`text-center ${styles.project__title}`}>
                  Music Player
                </h3>
                <div className={`card card-blog ${styles.container__image}`}>
                  <a
                    target="_blank"
                    href="https://musicplayerds.netlify.app/"
                    className="header"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/musicPlayerImage.jpeg"
                      className={`img-fluid ${styles.projectsImages}`}
                    />
                  </a>
                </div>
                <br />
                <h3 className={`text-center ${styles.project__title}`}>
                  25 + 5 Clock
                </h3>
                <div className={`card card-blog ${styles.container__image}`}>
                  <a
                    target="_blank"
                    href="https://codepen.io/DaniSX97/full/GRyJRop"
                    className="header"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/TimerImage.jpeg"
                      className={`img-fluid ${styles.projectsImages}`}
                    />
                  </a>
                </div>
              </div>

              {/* 3rd column */}

              <div className="col-md-4">
                <h3 className={`text-center ${styles.project__title}`}>
                  Portfolio (first version)
                </h3>
                <div className={`card card-blog ${styles.container__image}`}>
                  <a
                    target="_blank"
                    href="https://danielsanchezportfolio.netlify.app/"
                    className="header"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/oldPortfolioImage.jpeg"
                      className={`img-fluid ${styles.projectsImages}`}
                    />
                  </a>
                </div>
                <br />
                <h3 className={`text-center ${styles.project__title}`}>
                  Drum Machine
                </h3>
                <div className={`card card-blog ${styles.container__image}`}>
                  <a
                    target="_blank"
                    href="https://codepen.io/DaniSX97/full/popodRO"
                    className="header"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/drumImage.jpeg"
                      className={`img-fluid ${styles.projectsImages}`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Projects;
