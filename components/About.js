import React from "react";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <section id="about">
      <div
        className="d-flex flex-column text-center justify-content-center align-items-center"
        id={styles.AboutMeContainer}
      >
        <div className={styles.AboutMePhoto}>
          <img
            src="images/FotoMiaResized.jpg"
            alt="Daniel Sanchez"
            className="img-fluid mx-auto d-block rounded-circle"
            id={styles.AboutMePhoto}
          />
        </div>
        <div className="d-flex flex-column text-center px-sm-5 my-4 px-4">
          <h1 className={styles.AboutMeTitle}>Hi There 👋 I'm Daniel</h1>
          <h5 className={styles.AboutMeSubtitle}>Frontend Developer</h5>
          <p className={`my-3 px-3 ${styles.AboutMeParagraph}`}>
            Hello my name is <strong>Daniel Sanchez</strong> <br /> I was born
            and raised in Costa Rica. At the age of 21 web design caught my
            attention and at that moment I knew I wanted to dedicate myself to
            this. I am passionate about web design, music and sports, I also
            like to spend time with my family and to be able to enjoy the
            outdoors. I started my web design career when I was 22 years old and
            since then I am attracted to how beauty and art can be expressed
            through web design, turning the user experience into a new and
            satisfying experience with each design like the one I feel when I
            see the amazing designs that leave you speechless. I am an
            analytical, responsible person and a good problem solver. Currently
            I have dedicated myself to learn new technologies and I am always
            looking for new challenges to improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
