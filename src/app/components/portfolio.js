import React, { useState } from "react";

const DEFAULT_STATE = {
  portfolios: [
    {
      title: "Flame Game",
      description: "An online e-commerce website with features to add/remove items from the cart and checkout features.",
      github: "https://github.com/Anjali9293/Project-2-Flame-Game",
      demo: "https://tranquil-temple-78360.herokuapp.com/",
      mainImage: {
        src: "./img/flamegame.PNG",
        caption: "Main Image Caption 1"
      },
      images: [
        {
          src: "./img/flamegame0.PNG",
          caption: "Sub Image Caption 1"
        },
        {
          src: "./img/flamegame1.PNG",
          caption: "Sub Image Caption 1"
        }, {
          src: "./img/flamegame2.PNG",
          caption: "Sub Image Caption 2"
        }, {
          src: "./img/flamegame3.PNG",
          caption: "Sub Image Caption 3"
        }
      ]
    }, {
      title: "Travel Bug",
      description: "A travel app that helps travelers plan their trip according to weather, hotels, and attractions within a searched city.",
      github: "https://github.com/Anjali9293/TravelBug",
      demo: "https://klsybthrst.github.io/TravelBug/",
      mainImage: {
        src: "./img/travelbug.PNG",
        caption: "Main Image Caption 1"
      },
      images: [
        {
          src: "./img/travelbug0.PNG",
          caption: "Sub Image Caption 1"
        },
        {
          src: "./img/travelbug1.PNG",
          caption: "Sub Image Caption 1"
        }, {
          src: "./img/travelbug2.PNG",
          caption: "Sub Image Caption 2"
        },
      ]
    }, {
      title: "Burger Logger",
      description: "A Burger logger application that follows the MVC design pattern and uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.",
      github: "https://github.com/Anjali9293/burger-Node-express-handlebars",
      demo: "https://stormy-falls-15404.herokuapp.com/",
      mainImage: {
        src: "./img/burger.PNG",
        caption: "Main Image Caption 1"
      },
      images: [
        {
          src: "./img/burger0.PNG",
          caption: "Sub Image Caption 1"
        },
        {
          src: "./img/burger1.PNG",
          caption: "Sub Image Caption 1"
        }, {
          src: "./img/burger2.PNG",
          caption: "Sub Image Caption 2"
        }, {
          src: "./img/burger3.PNG",
          caption: "Sub Image Caption 3"
        },
      ]
    }, {
      title: "Employee Directory",
      description: "An employee directory app that allows users to sort employees by their name age and email address as well as filter employees by their first name",
      github: "https://github.com/Anjali9293/Employee-Directory",
      demo: "https://anjali9293.github.io/Employee-Directory/",
      mainImage: {
        src: "./img/directory.PNG",
        caption: "Main Image Caption 1"
      },
      images: [
        {
          src: "./img/directory0.PNG",
          caption: "Sub Image Caption 1"
        },
        {
          src: "./img/directory1.PNG",
          caption: "Sub Image Caption 1"
        }, {
          src: "./img/directory2.PNG",
          caption: "Sub Image Caption 2"
        }, {
          src: "./img/directory3.PNG",
          caption: "Sub Image Caption 3"
        }, {
          src: "./img/directory4.PNG",
          caption: "Sub Image Caption 4"
        },
      ]
    },{
      title: "Workout Tracker",
      description: "An application that allows users to be able to view, create and track daily workouts.",
      github: "https://github.com/Anjali9293/Workout-Tracker",
      demo: "https://fast-temple-47625.herokuapp.com/?id=5fa9f8a586131b09dc2b8075",
      mainImage: {
        src: "./img/employee.PNG",
        caption: "Main Image Caption 1"
      },
      images: [
        {
          src: "./img/employee 1.PNG",
          caption: "Sub Image Caption 1"
        },
        {
          src: "./img/employee 2.PNG",
          caption: "Sub Image Caption 1"
        }, {
          src: "./img/employee 3.PNG",
          caption: "Sub Image Caption 2"
        }
      ]
    }
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
               Here are a few projects that I've worked on recently.If you would like to see more of my work,contact me via email.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
        
        {portfolios.map((portfolio, i) => {
          return (<div className="col-md-4" key={`portfolio-${i}`}>
            <div className="work-box box-shadow-card">
                <div className="work-img">
                  <a href={portfolio.mainImage.src} data-title={portfolio.mainImage.caption} data-lightbox="gallery-vmarine">
                    <img src={portfolio.mainImage.src} alt={portfolio.mainImage.caption} className="img-fluid" />  
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
                      <div className="w-links">
                        <a href={portfolio.github} class="btn btn-outline-secondary" target="_blank"><i class="fab fa-github fa-md"></i></a>
                        <a href={portfolio.demo} class="btn btn-outline-secondary" target="_blank">Demo</a>
                      </div>
                    </div>
                  </div>
                </div>
              {portfolio.images.map((image, j) => {
              return (<a
                key={`portfolio-${i}-image-${j}`}
                href={image.src}
                data-lightbox="gallery-vmarine"
                // data-title={image.caption}
                style={{ display: "none" }}
              >
              </a>);
              })}
            </div>
          </div>);
        })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
