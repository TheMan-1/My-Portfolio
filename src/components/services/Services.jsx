import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>U/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create intuitive and engaging user interfaces for web and mobile
                applications.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop responsive, cross-browser compatible websites using
                modern languages.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborate with UX designers and back-end developers to produce
                seamless user experiences.
              </p>
            </li>
          </ul>
        </article>
        {/* End of UI */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design and implement visually appealing websites and web
                applications.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build responsive and cross-browser compatible interfaces using
                the latest languages.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop interactive features such as animations, transitions,
                and dynamic content.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Optimize website performance and accessibility for a better user
                experience.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborate with UX designers, back-end developers, and
                stakeholders to bring projects to completion.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Stay current with the latest front-end technologies and industry
                trends.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Incorporates mechanisms that enable dynamic serving of content
                in various formats.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Adds elements that facilitate moderation, curation, or rating of
                content to beef up its quality.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Produce visually stunning user interfaces and websites.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integrate rich media content to enhance user engagement and
                experience.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
