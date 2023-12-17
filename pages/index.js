//
import Head from "next/head";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ContactForm from "@components/ContactForm";

// import ServiceTable from "@components/ServiceTable";
// import ServiceForm from "@components/ServiceForm";
import HeroCarousel from "@components/HeroCarousel";
import Modal from "@components/Modal";
import ImageGallery from "@components/ImageGallery";
//
import { useState, useEffect } from "react";
import ProfileImage from "@components/ProfileImage";
import Contact from "@components/Contact";
// import SplineScene from "@components/SplineScene";
// import AnimatedBusinessStatus from "@components/AnimatedBusinessStatus";

const slidesMax5 = [
  {
    mainImage: "/images/hero-clippers.webp",
    thumbnail: "/images/showroom/display-1-thumbnail.jpg",
    title: "Slide 1",
    description: "Description for Slide 1",
    cta: "Learn More",
  }
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [metaTitle, setMetaTitle] = useState("Custom Fades");

  // useEffect(() => {
  //   function updateStatus() {
  //     // Check online status
  //     if (typeof window !== "undefined" && !window.navigator.onLine) {
  //       setStatus("offline");
  //       return;
  //     }

  //     // Check the time and weekday
  //     const centralTime = new Date(
  //       new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
  //     );
  //     const hour = centralTime.getHours();
  //     const dayOfWeek = centralTime.getDay();

  //     if (hour >= 2 && hour < 17 && dayOfWeek >= 1 && dayOfWeek <= 7) {
  //       setStatus("online");
  //     } else {
  //       setStatus("offline");
  //     }
  //   }

  //   updateStatus();

  //   // Check every minute
  //   const interval = setInterval(updateStatus, 60 * 1000);

  //   // Cleanup on component unmount
  //   return () => clearInterval(interval);
  // }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const scrollToSection = (sectionName) => () => {
    const section = document.getElementById(sectionName);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        {/* <body className={status} /> */}
      </Head>

      <Header />
      <section id="home" className="hero">
        <HeroCarousel slides={slidesMax5} />
        <div
          id="hero-overlay"
          style={{
            position: "absolute",
            width: "75%",
            margin: "0 auto",
            height: "auto",
            inset: "20% 0%",
          }}
        >
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/logo-white-stacked.svg"
            />
            <img src="/images/logo-white-arch.svg" alt="" />
          </picture>
          <div className="skip" style={{ textAlign: "center" }}>
            <button
              className="text text-white"
              onClick={scrollToSection("services")}
              style={{ marginBottom: "1em" }}
            >
              Let's Get Started!
            </button>
            <br />
            <button
              className="button primary"
              onClick={scrollToSection("services")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2 L12 18 M7 13 L12 18 L17 13" />
              </svg>
            </button>
          </div>
        </div>
        {/* <AnimatedBusinessStatus /> */}
      </section>
      <main id="content">
        {/* <SplineScene /> */}
        <section id="services" className="light-bg">
          <div className="sticky"></div>
          <div className="container text-center">
            <h3 className="display">Services</h3>
            <p>Let's get you right! Select the your haircut.</p>
            <div className="row">
              <div className="col-6 justify-content-center flex-column">
                <img
                  src="/images/icons/service-haircuit.svg" // Replace with the path to your image
                  alt="Open Modal"
                  onClick={handleModalToggle}
                  width={150}
                  height={84}
                  tabIndex={0}
                  style={{ width: "50%", height: "auto", aspectRatio: "1/1.2" }}
                />
                <h4>Haircut</h4>
                <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
                  {/* Content of your modal */}
                  <iframe
                    className="booking"
                    title="Book an appointment"
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2C18CQWGd0iJPrxcw5B7lACsoutodekVzDYIDHxKwlaH9uKf5pt-4DCNPUn2MYhUad7umefWAv?gv=true"
                    width={100}
                    height={700}
                    frameBorder={0}
                  />
                </Modal>
              </div>
              <div className="col-6 justify-content-center flex-column">
                <img
                  src="/images/icons/service-haircuit-beard.svg" // Replace with the path to your image
                  alt="Open Modal"
                  onClick={handleModalToggle}
                  width={150}
                  height={84}
                  tabIndex={0}
                  style={{ width: "50%", height: "auto", aspectRatio: "1/1.2" }}
                />
                <h4>Haircut + Beard</h4>
                <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
                  {/* Content of your modal */}
                  <iframe
                    className="booking"
                    title="Book an appointment"
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2C18CQWGd0iJPrxcw5B7lACsoutodekVzDYIDHxKwlaH9uKf5pt-4DCNPUn2MYhUad7umefWAv?gv=true"
                    width={100}
                    height={700}
                    frameBorder={0}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="dark-bg">
          <div className="sticky"></div>
          <div className="container row">
            <div className="col-6 text-white">
              <h3 className="display">About Me</h3>
              <p>
                Yo, it's Custom Fades – beyond cuts, it's a whole vibe! I'm Rob,
                more than a barber, I'm family. In our shop, we celebrate black
                excellence, blending tradition with trends. Every cut tells YOUR
                story. From classic fades to unique designs, I'm your architect
                of style. Step in for an experience, not just a cut. 🔥💈
                #CustomFades
              </p>
              <p>Lets get you cleaned up!</p>
              <button
                className="button primary"
                onClick={scrollToSection("services")}
              >
                Set Appointment
              </button>
            </div>
            <div className="col-6">
              <ProfileImage />
            </div>
          </div>
        </section>
        <section id="merch" className="dark-bg">
          <div className="sticky"></div>
          <div className="container">
            <h3 className="display">Wall of Fades</h3>
            <p>You're up next!</p>
          </div>
          <div>
            <ImageGallery />
          </div>
        </section>
        <section id="contact" className="dark-bg">
          <div className="sticky"></div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h3 className="display text-white">Find Me</h3>
                <Contact />
              </div>
              <div className="col-6">
                <h3 className="display text-white">Contact</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
