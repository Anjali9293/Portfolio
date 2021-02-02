import React,{useEffect, useState} from 'react';
import $ from 'jquery';

const DEFAULT_STATE = {
    testimonials:[
        {
            content:"It was such a pleasure working with, and getting to know, Anjali during out Full Stack Web Development Bootcamp. I worked with Anjali on a variety of projects, from short in class activities to a week long project. Anjali is incredibly helpful. She is incredibly knowledgeable and is always willing to go through things and break them down to help everyone understand. Anjali has an amazing work ethic. She never gives up when working through a problem. Working with her on our final project for the course was amazing. Anjali was a driving force in us using programs like Firebase and GraphQL (neither of which were taught during our course). Whenever we hit a wall during this project Anjali was always there with excellent problem solving abilities and her amazing work ethic. She would be an incredible asset to any team.",
            image:"img/leah.png ",
            name:"Leah O'Gorman",
            position:"Full Stack Web Developer",
        },
        {
            content:"As a member of Anjali's learning group, I was lucky to work with her on a daily basis as well as two of our 3 major projects. Anj quickly became a huge asset for us as her ability to grasp and explain new concepts led her to be like our own personal instructor in the camp. In working with Anj on our major projects she would easily take on a leadership role and take on the most difficult tasks with ease often working extremely late hours to bring our group a nearly finished product on her own. Her amazing personality and teacher's spirit made for a truly amazing experience and I already miss having her around to listen to and learn from. Anj will be an amazing asset to any company that is smart enough and lucky enough to have her.",
            image:"img/shaun.png",
            name:"Shaun Samoridny",
            position:"Full Stack Web Developer",
        },
        {
            content:"Working with Anj was an amazing experience. Her resourcefulness and work ethic were unmatched. Often during the program we'd come up against seemingly unsolvable problems. Anj would never give up. She'd demonstrate extraordinary problem solving abilities, and was always happy to share her knowledge and insights. She'll be a great asset on any team.",
            image:"img/victor.png",
            name:"Victor Scherman",
            position:"Full Stack Web Developer",
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
                    <h3 className="mb-3 text-white">A Few Words From My Teamates</h3>
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