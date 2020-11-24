import React, { useState } from 'react'

const DEFAULT_STATE = {
  skills: [
    { id: "HTML5_skill", content: "HTML5", porcentage: "90%", value: "90" },
    { id: "CSS3_skill", content: "CSS3", porcentage: "90%", value: "90" },
    { id: "JavaScript_skill", content: "JavaScript", porcentage: "100%", value: "100" },
    { id: "Restful_skill", content: "Restful API", porcentage: "90%", value: "90" },
    { id: "Node_skill", content: "Node JS", porcentage: "90%", value: "90" },
    { id: "Express_skill", content: "Express", porcentage: "80%", value: "80" },
    { id: "MySQL_skill", content: "MySQL", porcentage: "75%", value: "75" },
    { id: "Mongodb_skill", content: "Mongodb", porcentage: "80%", value: "80" },
    { id: "React_skill", content: "React", porcentage: "75%", value: "75" }
  ],
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
	const [skills] = useState(DEFAULT_STATE.skills); 
	const [aboutMe] = useState(DEFAULT_STATE.about_me); 

	return (
	  <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
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
                          src="./img/mypic.jpg"
                          className="img-fluid rounded b-shadow-a"
                          alt="Mypic"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    {skills.map(skill => {
                      return (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">
                            {skill.porcentage}
                          </span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
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









