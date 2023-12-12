//
import Head from "next/head";

import Header from "@components/Header";
import Footer from "@components/Footer";
// import ServiceTable from "@components/ServiceTable";
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
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    function updateStatus() {
      // Check online status
      if (typeof window !== "undefined" && !window.navigator.onLine) {
        setStatus("offline");
        return;
      }

      // Check the time and weekday
      const centralTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
      );
      const hour = centralTime.getHours();
      const dayOfWeek = centralTime.getDay();

      if (hour >= 2 && hour < 17 && dayOfWeek >= 1 && dayOfWeek <= 7) {
        setStatus("online");
      } else {
        setStatus("offline");
      }
    }

    updateStatus();

    // Check every minute
    const interval = setInterval(updateStatus, 60 * 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Head>
        <title>Custom Fades</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <body className={status} /> */}
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
        <section id="about" style={{ marginBottom: "4em" }}>
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
                src="/images/robert-davis-profile.png"
                alt="Portrait photo of Robert Davis, Owner of Custom Fades Barber Shop"
              />
            </div>
          </div>
        </section>
        <section id="work">
          <div className="sticky dark-bg"></div>
          <div class="container">
            <h3 style={{ marginBottom: "1em" }} className="display text-white">
              Wall of Fades
            </h3>
            <div className="insta-list">
              <div
                style={{
                  backgroundImage: "url('/images/client-01.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/client-02.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/client-03.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/client-04.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/client-05.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/client-06.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/client-07.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/client-08.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/client-09.jpg')",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/client-10.jpg')",
                }}
              ></div>
              {/* <a
                className="button primary"
                href="https://www.instagram.com/ballsbarbershopkyiv/"
                target="_blank"
              >
                View Instagram
              </a> */}
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="sticky dark-bg"></div>
          <div className="container">
            <h3 className="display text-white">Contact</h3>
            <form name="contact" netlify>
              <label className="col-6 d-block">
                Name <input type="text" name="name" />
              </label>
              <label className="col-6 d-block">
                Email <input type="email" name="email" />
              </label>
              <label className="col-12">
                Question <textarea name="comment" />
              </label>
              <button type="submit" className="button primary">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
