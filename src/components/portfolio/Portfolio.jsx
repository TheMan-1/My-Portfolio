import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "GC-Media",
    github: "https://github.com/TheMan-1/GC-Media",
    demo: "https://gc-media.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Club-Fitness",
    github: "https://github.com/TheMan-1/Club-Fitness",
    demo: "https://theman-1.github.io/Club-Fitness/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Best Eats",
    github: "https://github.com/TheMan-1/Best-Eats",
    demo: "https://best-eats-react-app.netlify.app",
  },
  {
    id: 1,
    image: IMG4,
    title: "Netflix-Clone",
    github: "https://github.com/TheMan-1/Netflix-React-Tailwind",
    demo: "https://netflix-react-yt-e9ad1.web.app/",
  },
  {
    id: 2,
    image: IMG5,
    title: "Anime-UI",
    github: "https://github.com/TheMan-1/Anime-UI",
    demo: "https://theman-1.github.io/Anime-UI/",
  },
  {
    id: 3,
    image: IMG6,
    title: "Local Cake Shop",
    github: "https://github.com/TheMan-1/Local-Cake-Shop",
    demo: "https://theman-1.github.io/Local-Cake-Shop/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
