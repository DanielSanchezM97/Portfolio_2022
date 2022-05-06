import React from "react";
import styles from "../styles/Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.skillsContainer} id="skills">
      <h2 className={styles.skills_title}>Skills</h2>
      <div className={`${styles.SkillsSection} ${styles.SkillGrid}`}>
        {/* ! HTML5 Card */}
        <div className={styles.skillCard} onClick="">
          <header className={styles.skillCard__header}>
            <img
              className={styles.skillCard__icon}
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
              alt="HTML5 Logo"
            />
          </header>
          <section className={styles.skillCard__body}>
            <h2 className={styles.skillCard__title}>html5</h2>
            <span className={styles.skillCard__duration}>
              2 years of experience
            </span>
            <ul className={styles.skillCard__knowledge}>
              <li>
                <i className="fas fa-check" />
                Browser compatibility
              </li>
              <li>
                <i className="fas fa-check" />
                Inputs and forms
              </li>
              <li>
                <i className="fas fa-check" />
                Semantic elements
              </li>
              <li>
                <i className="fas fa-check" />
                Responsive design
              </li>
            </ul>
          </section>
        </div>
        {/* ! CSS Card */}
        <div className={styles.skillCard} onClick="">
          <header className={styles.skillCard__header} id={styles.css}>
            <img
              className={styles.skillCard__icon}
              src="https://icon-library.com/images/css3-icon/css3-icon-28.jpg"
              alt="CSS3 Logo"
            />
          </header>
          <section className={styles.skillCard__body}>
            <h2 className={styles.skillCard__title}>CSS3</h2>
            <span className={styles.skillCard__duration}>
              2 years of experience
            </span>
            <ul className={styles.skillCard__knowledge}>
              <li>
                <i className="fas fa-check" />
                Pseudo-classes
              </li>
              <li>
                <i className="fas fa-check" />
                Animations
              </li>
              <li>
                <i className="fas fa-check" />
                Flexbox
              </li>
              <li>
                <i className="fas fa-check" />
                Grid
              </li>
            </ul>
          </section>
        </div>
        {/* ! SCSS Card */}
        <div className={styles.skillCard} onClick="">
          <header className={styles.skillCard__header} id={styles.scss}>
            <img
              className={styles.skillCard__icon}
              src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
              alt="SCSS Logo"
            />
          </header>
          <section className={styles.skillCard__body}>
            <h2 className={styles.skillCard__title}>scss</h2>
            <span className={styles.skillCard__duration}>
              1 year and half of experience
            </span>
            <ul className={styles.skillCard__knowledge}>
              <li>
                <i className="fas fa-check" />
                Variables
              </li>
              <li>
                <i className="fas fa-check" />
                Mixins
              </li>
              <li>
                <i className="fas fa-check" />
                Functions
              </li>
              <li>
                <i className="fas fa-check" />
                Media queries
              </li>
            </ul>
          </section>
        </div>
        {/* ! Bootstrap Card */}
        <div className={styles.skillCard} onClick="">
          <header className={styles.skillCard__header} id={styles.bootstrap}>
            <img
              className={styles.skillCard__icon}
              src="https://laroybafi.my.id/techstack/bootstrap.png"
              alt="Bootstrap Logo"
            />
          </header>
          <section className={styles.skillCard__body}>
            <h2 className={styles.skillCard__title}>Bootstrap 5</h2>
            <span className={styles.skillCard__duration}>
              1 year and half of experience
            </span>
            <ul className={styles.skillCard__knowledge}>
              <li>
                <i className="fas fa-check" />
                Navbar and footer management
              </li>
              <li>
                <i className="fas fa-check" />
                Responsive design
              </li>
              <li>
                <i className="fas fa-check" />
                Bootstrap Grid system
              </li>
            </ul>
          </section>
        </div>
        {/* ! Javascript Card */}
        <div className={styles.skillCard} onClick="">
          <header className={styles.skillCard__header} id={styles.javascript}>
            <img
              className={styles.skillCard__icon}
              src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
              alt="JavaScript Logo"
            />
          </header>
          <section className={styles.skillCard__body}>
            <h2 className={styles.skillCard__title}>JavaScript (ES6)</h2>
            <span className={styles.skillCard__duration}>
              2 years of experience
            </span>
            <ul className={styles.skillCard__knowledge}>
              <li>
                <i className="fas fa-check" />
                OOP
              </li>
              <li>
                <i className="fas fa-check" />
                Functions
              </li>
              <li>
                <i className="fas fa-check" />
                Promises
              </li>
              <li>
                <i className="fas fa-check" />
                Async/await Etc.
              </li>
            </ul>
          </section>
        </div>
        {/* ! React Card */}
        <div className={styles.skillCard} onClick="">
          <header className={styles.skillCard__header} id={styles.react}>
            <img
              className={styles.skillCard__icon}
              src="https://icon-library.com/images/119874_apps.svg.svg"
              alt="React Logo"
            />
          </header>
          <section className={styles.skillCard__body}>
            <h2 className={styles.skillCard__title}>React</h2>
            <span className={styles.skillCard__duration}>
              2 years of experience
            </span>
            <ul className={styles.skillCard__knowledge}>
              <li>
                <i className="fas fa-check" />
                Functional components
              </li>
              <li>
                <i className="fas fa-check" />
                Class components
              </li>
              <li>
                <i className="fas fa-check" />
                React Axios
              </li>
              <li>
                <i className="fas fa-check" />
                Hooks Etc.
              </li>
            </ul>
          </section>
        </div>
        {/* ! NextJS Card */}
        <div className={styles.skillCard} onClick="">
          <header className={styles.skillCard__header} id={styles.NextJS}>
            <img
              className={styles.skillCard__icon}
              src="https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"
              alt="NextJS Logo"
            />
          </header>
          <section className={styles.skillCard__body}>
            <h2 className={styles.skillCard__title}>Next JS</h2>
            <span className={styles.skillCard__duration}>
              1 years of experience
            </span>
            <ul className={styles.skillCard__knowledge}>
              <li>
                <i className="fas fa-check" />
                Pages and Routings
              </li>
              <li>
                <i className="fas fa-check" />
                Data Fetching
              </li>
              <li>
                <i className="fas fa-check" />
                Custom Meta Tags
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;
