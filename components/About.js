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
            and raised in Costa Rica but moved to California when I turned 19
            with my family. I am very passionate about art, dance and sports, I
            also love to spend time with my family and I love modeling. I
            started my modeling career at the age of 21 and since then I have
            been attracted to how you can express the beauty and artistry of a
            woman through modeling. Currently I have dedicated myself to travel
            with my husband and at the same time work in what I am passionate
            about knowing the beauty of each country and its beautiful people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
