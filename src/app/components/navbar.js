import React, { useEffect } from "react";
import $ from "jquery";

function Navbar() {

  useEffect(() => {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 25
            },
            1000,
            "easeInOutExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }, []);

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="./#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="./#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="./#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="./#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="./#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="./#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
