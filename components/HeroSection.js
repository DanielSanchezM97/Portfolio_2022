import React from "react";
import Image from "next/image";
import styles from "../styles/HeroSection.module.scss";

const HeroSection = () => {
  return (
    <>
      <div className={`${styles.heroSection}`}>
        <div className="hero-section-image d-flex">
          {/* <Image
            src="/images/bg1.jpg"
            alt="hero-section"
            layout="fill"
            className={styles.heroImage}
          /> */}

          <div className={styles.HeroContainer}>
            {/* Flip Card */}

            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <Image
                    src="/images/FotoMia1.jpg"
                    alt="hero-section"
                    layout="fill"
                    className={styles.heroImage}
                  />
                </div>
                <div className={styles.flipCardBack}>
                  <div className={styles.content}>
                    <div className={styles.details}>
                      <h2>
                        Daniel Sanchez
                        <br />
                        <span> Frontend Developer </span>
                      </h2>
                      <div className={styles.data}>
                        <h3>
                          20 +
                          <br />
                          <span> Projects </span>
                        </h3>
                        <h3>
                          8 +
                          <br />
                          <span> Frameworks </span>
                        </h3>
                        <h3>
                          2 years
                          <br />
                          <span> Learning </span>
                        </h3>
                      </div>
                      <div className={styles.card__buttonsContainer}>
                        {/* Send Btn */}

                        <a href="mailto:programmingacc97@gmail.com">
                          <button className={styles.card__button}>mail</button>
                        </a>

                        {/* Phone btn */}

                        <div>
                          <a href="tel:+506-6082-6380">
                            <button className={styles.card__button}>
                              Call Me
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoContainer}>
              <h1 className={styles.Name}>Daniel Sanchez</h1>
              <p className={styles.heroParagraph}>
                Frontend | React | Angular | NodeJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
