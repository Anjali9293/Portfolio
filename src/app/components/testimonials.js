import React,{useEffect, useState} from 'react';
import $ from 'jquery';

const DEFAULT_STATE = {
    testimonials:[
        {
            content:"It was such a pleasure working with, and getting to know, Anjali during out Full Stack Web Development Bootcamp. I worked with Anjali on a variety of projects, from short in class activities to a week long project. Anjali is incredibly helpful. She is incredibly knowledgeable and is always willing to go through things and break them down to help everyone understand. Anjali has an amazing work ethic. She never gives up when working through a problem. Working with her on our final project for the course was amazing. Anjali was a driving force in us using programs like Firebase and GraphQL (neither of which were taught during our course). Whenever we hit a wall during this project Anjali was always there with excellent problem solving abilities and her amazing work ethic. She would be an incredible asset to any team.",
            image:"img/leah.PNG ",
            name:"Leah O'Gorman",
            position:"Full Stack Web Developer",
        },
        {
            content:"As a member of Anjali's learning group, I was lucky to work with her on a daily basis as well as two of our 3 major projects. Anj quickly became a huge asset for us as her ability to grasp and explain new concepts led her to be like our own personal instructor in the camp. In working with Anj on our major projects she would easily take on a leadership role and take on the most difficult tasks with ease often working extremely late hours to bring our group a nearly finished product on her own. Her amazing personality and teacher's spirit made for a truly amazing experience and I already miss having her around to listen to and learn from. Anj will be an amazing asset to any company that is smart enough and lucky enough to have her.",
            image:"img/shaun.PNG",
            name:"Shaun Samoridny",
            position:"Full Stack Web Developer",
        },
        {
            content:"Working with Anj was an amazing experience. Her resourcefulness and work ethic were unmatched. Often during the program we'd come up against seemingly unsolvable problems. Anj would never give up. She'd demonstrate extraordinary problem solving abilities, and was always happy to share her knowledge and insights. She'll be a great asset on any team.",
            image:"img/victor.PNG",
            name:"Victor Scherman",
            position:"Full Stack Web Developer",
        },
        {
            content:"I worked with Anjali in customer Success in goFleet, she was responsible of some of our major accounts where she was responsible of providing technical advises and solutions for their overall business problems. in addition she was responsible of vertically growing the accounts, she was a crucial success manager showing excellent Technical skills understanding the overall customer business and come up with solutions that solves customer needs and yet fits their budgetary requirements.Anjali was a star within the organization where everybody was reaching out to her because of her willingness to help and knowledge depth, and was admired by her customers being always on top of the issues and proactive in providing advises and solutions",
            image:"img/ahmed.PNG",
            name:"Ahmed Mostafa",
            position:"IT Director",
        },
        {
            content:"I worked with Anjali at GoFleet as her manager in the Technical Support department. Anjali was a vital part of our day to day operations, constantly excelling in her duties. She was always willing and able to take on special projects and executed them efficiently and expertly.Anjali was an integral part of the organization and could always be counted on to deliver on time and above expectations. Everyone in the organization knew that if there was a problem or question they didn't have the answer to that they could rely on Anjali to provide a solution.",
            image:"img/adrian.PNG",
            name:"Adrian Aymont",
            position:"Account Manager at ZenduIT",
        },
        {
            content:"When I worked with Anjali, she never hesitated to lend a helping hand with complex problems and constantly managed to deliver outcomes beyond expectations. She championed all services provided by GoFleet/ZenduIT, contributing significantly to the acceptance and execution of large-scale government and private sector projects. Her success was primarily motivated by her calculated approach, expert communication skills, and effective delegation methods.I have been fortunate enough to have worked with Anjali and learned tremendously from her. She was a crucial force for me to grow professionally as a customer success manager. Above all, she genuinely cared about the products and every team member.No matter how difficult the challenge, inviting someone like Anjali to your team will be a vital asset. Her skills and leadership will constantly direct the team up the right path.",
            image:"img/asad.PNG",
            name:"Asad Khan",
            position:"Team Lead - Customer Success at GoFleet",
        }
        

    ]
}

function Testimonials(){

    const [testimonials] = useState(DEFAULT_STATE.testimonials)

    useEffect(()=>{
        $('.testi5').owlCarousel({
            loop: true,
            margin: 10,
            stagePadding: 10,
            nav: false,
            dots: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            center: true,   
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
        
                },
                1024: {
                    items: 1.15
                }
            }
        })
    });

    return(        
        <section id="testimonials" className="testimonials-mf sect-pt4 route bg-image background-testimonial">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="testimonial5 py-5 bg-inverse ">
                <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                    <h3 className="mb-3 text-white">A Few Words From My Teamates/Co-workers</h3>
                </div>
                </div>
                <div className="owl-carousel owl-theme testi5 mt-4 text-center">
                {testimonials.map((testimonial,i)=>{
                    return(
                    <div className="item" key={`testimonial-${i}`}>
                        <div className="content">"{testimonial.content}"</div>
                        <div className="customer-thumb">
                        <img src={testimonial.image} alt={testimonial.name} className="rounded-circle"/>
                        <h6 className="text-white mb-0">{testimonial.name}</h6>
                        <p>{testimonial.position}</p>
                        </div>
                    </div>
                    
                    )
                })}
                </div>
                </div>
        </section>
    )
};

export default Testimonials;