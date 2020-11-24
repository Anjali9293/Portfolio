import React,{useState} from "react";
import emailjs from 'emailjs-com';

function Contact() {
 
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    subject: "",
    message:""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
    console.log(formObject);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    emailjs.send('service_qk857q2','template_9at01uw', formObject, 'user_2hYW73M0nGd1UZCYpzh1y')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setFormObject({
        name: "",
        email: "",
        subject: "",
        message:""
      });
    }, (err) => {
       console.log('FAILED...', err);
    });
  };
  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(/img/earth.jpg)" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      <form
                        action="https://formspree.io/xdoeonlo"
                        method="POST"
                        className="contactForm"
                      >
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                onChange={handleInputChange}
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                value={formObject.name}
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                onChange={handleInputChange}
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                value={formObject.email}
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                onChange={handleInputChange}
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                value={formObject.subject}
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                onChange={handleInputChange}
                                className="form-control"
                                name="message"
                                value={formObject.message}
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                              onClick={handleFormSubmit}
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email.
                      </p>
                      {/* <!-- <ul class="list-ico">
                              <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                              <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                              <li><span class="ion-email"></span> contact@example.com</li>
                              </ul> --> */}
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="mailto:pantanjali7@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion ion-mail"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/Anjali9293"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion ion-logo-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/anjali-pant/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion ion-logo-linkedin"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/pantanjali7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion ion-logo-twitter"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
