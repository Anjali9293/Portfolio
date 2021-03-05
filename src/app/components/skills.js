import React, { useState } from 'react';
import Wave from 'react-wavify';
  

const DEFAULT_STATE = {
    skills: [
      { id: "HTML5", image:"./img/icons/html.png"},
      { id: "CSS3",  image:"./img/icons/css.png" },
      { id: "JavaScript",  image:"./img/icons/js.png" },
      { id: "React",  image:"./img/icons/react.png"  },
      { id: "Node",  image:"./img/icons/node.png" },
      { id: "Express",  image:"./img/icons/express.png" },
      { id: "MySQL",  image:"./img/icons/mysql.png"  },
      { id: "Mongodb",  image:"./img/icons/mongo.png"},
      { id: "graphql",  image:"./img/icons/graphql.png" }
    ],
  }

  function Skills(){
    const [skills] = useState(DEFAULT_STATE.skills); 

    return(
        <section id="skills" className="skills-mf sect-pt4 route bg-image background-skills">
            <Wave fill='#4a9efc'
                paused={false}
                style={{
                    transform: "rotate(180deg)"
                }}
                options={{
                    height: 20,
                    amplitude: 40,
                    speed: 0.1,
                    points: 3
                }}
            />
        <div className="container">
            <h1 style={{ textAlign: "center" }} >Skills</h1>
            <div className="line-mf"></div>
            <br></br>
        <div className="row">
        {skills.map(skill => {
            return(
            <div className="col-4" key={skill.id}>
                <img src={skill.image} 
                title={skill.id}
                style={{
                    align: "center",
                    padding: "20px"
                }} className="skills center-block" alt={skill.id}/>
            </div>
        );
        })}
        </div>
        </div>
        <Wave fill='#4a9efc'
            paused={false}
            options={{
            height: 20,
            amplitude: 40,
            speed: 0.1,
            points: 3
            }}
        />
        </section>
    )};

    export default Skills;

   
    