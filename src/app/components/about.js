import React, { useState } from 'react'

const DEFAULT_STATE = {
  about_me: [
    {
      id: "first-p-about",
      content:
        "Hi! my name is Anjali Pant. I am a creative and dependable entry level web developer with a stellar customer service record and superb work ethic.I am knowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction and maintenance. I consider myself highly adept at conveying complex technical information to a variety of professional and lay audiences in a clear and understandable manner."
    },
    {
      id: "second-p-about",
      content:
        "I finished my undergraduate degree in Bachelors of electronics and communication engineering and my post graduate in Embedded Systems Developement, where I learned some low level/bare metal programming.Prior to learning coding, I had a fulfilling carrer as a customer success manager for a fleet management company where I honed my organizational,leadership and communication skills."
    },
    {
      id: "third-p-about",
      content:
        "I look forward to being part of a team where I can merge my knowledge in web developement with my customer success skills"
    }
  ]
};

function AboutPage() {
	const [aboutMe] = useState(DEFAULT_STATE.about_me); 

	return (
	  <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
                <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                </div>
                <div className="row">
                    <div
                      className="col-sm-6 col-md-5"
                      style={{ margin: "0 auto" }}
                    >
                      <div
                        className="about-img"
                        style={{ textAlign: "center" }}
                      >
                        <img
                          src="img/mypic.JPG"
                          className="img-fluid rounded b-shadow-a"
                          alt="Mypic"
                        />
                      </div>
                    </div>
                <div>
                  <div className="about-me pt-4 pt-md-0">
                    {aboutMe.map(content => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

export default AboutPage;









