//
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ServiceTable from "@components/ServiceTable";
import ServiceForm from "@components/ServiceForm";
import HeroCarousel from "@components/HeroCarousel";
//
import { useState, useEffect } from "react";
//

const slidesMax5 = [
  {
    mainImage: "/images/showroom/display-1.jpg",
    thumbnail: "/images/showroom/display-1-thumbnail.jpg",
    title: "Slide 1",
    description: "Description for Slide 1",
    cta: "Learn More",
  },
  {
    mainImage: "/images/showroom/display-2.jpg",
    thumbnail: "/images/showroom/display-1-thumbnail.jpg",
    title: "Slide 2",
    description: "Description for Slide 2",
    cta: "Discover",
  },
  // Add more slides as needed
];

const services = [
  { id: 1, name: "High / Mid / Low Fade", price: 45 },
  { id: 2, name: "Gentlemens Haircut", price: 50 },
  { id: 3, name: "Buzz Haircut", price: 30 },
  { id: 4, name: "All Even Haircut", price: 30 },
  { id: 5, name: "Beard Trim & Lineup", price: 30 },
  { id: 6, name: "Lineup", price: 25 },
  { id: 7, name: "Shape Up", price: 30 },
  { id: 8, name: "Hot Towel Shave", price: 75 },
  { id: 9, name: "Hot Towel Shave Face", price: 50 },
  { id: 10, name: "Micro Fibers / Face Paint", price: 18 },
  { id: 11, name: "Custom & Design Cut", price: 60 },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Fades</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <section id="work" className="hero">
          <HeroCarousel slides={slidesMax5} />
        </section>
        <section id="services" className="background-white">
          <div className="sticky light-bg"></div>
          <div className="container">
            <h3>Services</h3>
            {/* <ServiceTable services={services} /> */}
            <ServiceForm />
          </div>
        </section>
        <section id="about">
          <div className="sticky dark-bg"></div>
          <div className="container row">
            <div className="col-6 text-white" style={{ width: "66.6666%" }}>
              <h3 className="display">About Me</h3>
              <p>
                Yo, it's Custom Fades – beyond cuts, it's a whole vibe! I'm Rob,
                more than a barber, I'm family. In our shop, we celebrate black
                excellence, blending tradition with trends. Every cut tells YOUR
                story. From classic fades to unique designs, I'm your architect
                of style. Step in for an experience, not just a cut. 🔥💈
                #CustomFades #BlackExcellence
              </p>
              <p>Lets get you cleaned up!</p>
              <a href="#services" className="button primary">
                Set Appointment
              </a>
            </div>
            <div className="col-6 logo-black" style={{ width: "33.3333%" }}>
              <img
                style={{ display: "block", margin: "0 auto" }}
                className="full-width"
                src="/images/robert-davis-profile-revised.png"
                alt="Portrait photo of Robert Davis, Owner of Custom Fades Barber Shop"
              />
            </div>
          </div>
        </section>
        {/* <section id="merch">
          <div class="container">
            <h3 className="display text-white">Products</h3>
          </div>
        </section> */}
        <section id="contact">
          <div className="container">
            <h3 style={{ marginBottom: "1em" }} className="display text-white">
              Wall of Fades
            </h3>
            <div class="insta-list">
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url('https://ballsbarbershop.com.ua/img/insta-15.d8f63c2b.jpg')",
                }}
              ></div>
              <a
                className="button primary"
                href="https://www.instagram.com/ballsbarbershopkyiv/"
                target="_blank"
              >
                View Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
