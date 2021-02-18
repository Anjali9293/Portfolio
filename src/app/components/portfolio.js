import React, { useState } from "react";
import { Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const DEFAULT_COLOR_STATE = [
  "red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"
];

const DEFAULT_STATE = {
  portfolios: [
    {
      title: "Drastic Measurements",
      description:
        "An app for costume designers to easily access a specific actor's measurements for an upcoming movie,television show,theatre /dance performance etc.",
      github: "https://github.com/Anjali9293/Project3",
      demo: "https://vast-taiga-98028.herokuapp.com/",
      mainImage: {
        src: "img/drastic.png",
        caption: "Main Image Caption 1",
      },
      images: [
        {
          src: "img/drastic2.PNG",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/drastic3.PNG",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/drastic4.PNG",
          caption: "Sub Image Caption 2",
        },
        {
          src: "img/drastic5.PNG",
          caption: "Sub Image Caption 3",
        },
      ],
      technologies: [
        {
          name: "Javascript",
          color: "yellow",
          textcolor: "hsla(200,0%,0%,.7)"
        },
        {
          name: "React",
          color: "cyan"
        },
        {
          name: "Axios",
          color: "purple",
        },
        {
          name: "Material UI",
          color: "blue",
        },
        {
          name: "GraphQL",
          color: "DeepPink",
        },
        {
          name: "Firebase",
          color: "Orange",
        },
      ],
    },
    {
      title: "Flame Game",
      description:
        "An online e-commerce website with features to add/remove items from the cart and checkout features.",
      github: "https://github.com/Anjali9293/Project-2-Flame-Game",
      demo: "https://tranquil-temple-78360.herokuapp.com/",
      mainImage: {
        src: "img/flamegame.png",
        caption: "Main Image Caption 1",
      },
      images: [
        {
          src: "img/flamegame0.png",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/flamegame1.png",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/flamegame2.png",
          caption: "Sub Image Caption 2",
        },
        {
          src: "img/flamegame3.png",
          caption: "Sub Image Caption 3",
        },
      ],
      technologies: [
        {
          name: "Javascript",
          color: "yellow",
          textcolor: "hsla(200,0%,0%,.7)"
        },
        {
          name: "HTML",
          color: "OrangeRed",
        },
        {
          name: "CSS",
          color: "RoyalBlue",
        },
        {
          name: "Bootstrap",
          color: "RebeccaPurple",
        },
        {
          name: "NodeJs",
          color: "YellowGreen",
        },
        {
          name: "MySQL",
          color: "Orange",
        },
      ],
    },
    {
      title: "Travel Bug",
      description:
        "A travel app that helps travelers plan their trip according to weather, hotels, and attractions within a searched city.",
      github: "https://github.com/Anjali9293/TravelBug",
      demo: "https://klsybthrst.github.io/TravelBug/",
      mainImage: {
        src: "img/travelbug.png",
        caption: "Main Image Caption 1",
      },
      images: [
        {
          src: "img/travelbug0.png",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/travelbug1.png",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/travelbug2.png",
          caption: "Sub Image Caption 2",
        },
      ],
      technologies: [
        {
          name: "Javascript",
          color: "yellow",
          textcolor: "hsla(200,0%,0%,.7)"
        },
        {
          name: "HTML",
          color: "OrangeRed",
        },
        {
          name: "CSS",
          color: "RoyalBlue",
        },
        {
          name: "Bootstrap",
          color: "RebeccaPurple",
        },
        {
          name: "jQuery",
          color: "SteelBlue",
        },
        {
          name: "Moment.js",
          color: "MediumAquaMarine",
        },
      ],
    },
    {
      title: "Burger Logger",
      description:
        "A Burger logger application that follows the MVC design pattern and uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.",
      github: "https://github.com/Anjali9293/burger-Node-express-handlebars",
      demo: "https://stormy-falls-15404.herokuapp.com/",
      mainImage: {
        src: "img/burger.png",
        caption: "Main Image Caption 1",
      },
      images: [
        {
          src: "img/burger1.png",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/burger2.png",
          caption: "Sub Image Caption 2",
        },
        {
          src: "img/burger3.png",
          caption: "Sub Image Caption 3",
        },
      ],
      technologies: [
        {
          name: "HTML",
          color: "OrangeRed",
        },
        {
          name: "CSS",
          color: "RoyalBlue",
        },
        {
          name: "Javascript",
          color: "yellow",
          textcolor: "hsla(200,0%,0%,.7)"
        },
        {
          name: "NodeJs",
          color: "YellowGreen",
        },
        {
          name: "Handlebars",
          color: "GoldenRod",
        },
        {
          name: "MySQL",
          color: "Orange",
        },
      ],
    },
    {
      title: "Employee Directory",
      description:
        "An employee directory app that allows users to sort employees by their name age and email address as well as filter employees by their first name",
      github: "https://github.com/Anjali9293/Employee-Directory",
      demo: "https://anjali9293.github.io/Employee-Directory/",
      mainImage: {
        src: "img/directory.png",
        caption: "Main Image Caption 1",
      },
      images: [
        {
          src: "img/directory0.png",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/directory1.png",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/directory2.png",
          caption: "Sub Image Caption 2",
        },
        {
          src: "img/directory3.png",
          caption: "Sub Image Caption 3",
        },
        {
          src: "img/directory4.png",
          caption: "Sub Image Caption 4",
        },
      ],
      technologies: [
        {
          name: "HTML",
          color: "OrangeRed",
        },
        {
          name: "CSS",
          color: "RoyalBlue",
        },
        {
          name: "Javascript",
          color: "yellow",
          textcolor: "hsla(200,0%,0%,.7)"
        },
        {
          name: "React",
          color: "cyan"
        },
        {
          name: "Axios",
          color: "purple",
        },
      ],
    },
    {
      title: "Workout Tracker",
      description:
        "An application that allows users to be able to view, create and track daily workouts.",
      github: "https://github.com/Anjali9293/Workout-Tracker",
      demo:
        "https://fast-temple-47625.herokuapp.com/?id=5fa9f8a586131b09dc2b8075",
      mainImage: {
        src: "img/employee.png",
        caption: "Main Image Caption 1",
      },
      images: [
        {
          src: "img/employee 1.png",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/employee 2.png",
          caption: "Sub Image Caption 1",
        },
        {
          src: "img/employee 3.png",
          caption: "Sub Image Caption 2",
        },
      ],
      technologies: [
        {
          name: "Javascript",
          color: "yellow",
          textcolor: "hsla(200,0%,0%,.7)"
        },
        {
          name: "NodeJs",
          color: "YellowGreen",
        },
        {
          name: "Express",
          color: "Black",
        },
        {
          name: "mongoDB",
          color: "ForestGreen",
        },
        {
          name: "mongoose",
          color: "Tomato",
        },
      ],
    },
  ]
};

function Portfolio() {
  const [portfolios] = useState(DEFAULT_STATE.portfolios);

  return (
    <section id="portfolio" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Here are a few projects that I've worked on recently.If you
                would like to see more of my work,contact me via email.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {portfolios.map((portfolio, i) => {
            return (
              <div className="col-md-4" key={`portfolio-${i}`}>
                <div className="work-box box-shadow-card">
                  <div className="work-img">
                    <a
                      href={portfolio.mainImage.src}
                      data-title={portfolio.mainImage.caption}
                      data-lightbox="gallery-vmarine"
                    >
                      <img
                        src={portfolio.mainImage.src}
                        alt={portfolio.mainImage.caption}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12   ">
                        <h2 className="w-title">{portfolio.title}</h2>
                        <div className="w-more pb-2">
                          <span className="w-ctegory">
                            {portfolio.description}
                          </span>
                        </div>
                            <div className="w-more pb-2">
                              <div className="row pl-3">
                        {portfolio.technologies.map((technology, k) => {
                          return (
                                <div className="col-auto p-1" key={`tech-${k}`}>
                                  <span>
                                    <Label
                                      as="a"
                                      style={{
                                        "backgroundColor": technology.color,
                                        "color": technology.textcolor || "white"
                                      }}
                                      color={DEFAULT_COLOR_STATE[technology.color.toLowerCase()] && technology.color.toLowerCase()}
                                      image
                                    >
                                      <Label.Detail>
                                        {technology.name}
                                      </Label.Detail>
                                    </Label>
                                  </span>
                                </div>
                          );
                        })}
                        </div>
                      </div>
                        <div className="w-links">
                          <a
                            href={portfolio.github}
                            className="btn btn-outline-secondary"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-github fa-md"></i>
                          </a>
                          <a
                            href={portfolio.demo}
                            className="btn btn-outline-secondary"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {portfolio.images.map((image, j) => {
                    return (
                      <a key={`portfolio-${i}-image-${j}`}
                        href={image.src}
                        data-lightbox="gallery-vmarine"
                        style={{ display: "none" }}
                      ></a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
