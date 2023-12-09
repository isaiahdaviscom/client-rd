import { useState, useEffect } from "react";


export default function Header({ title }) {
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
      <header>
        <nav>
          <ul>
            <li>
              <a href="#work" className="menu-item">
                <div className="nav-service square">
                  <img
                    src="/images/icons/beard-top.svg"
                    alt="Balls barbershop"
                    className="service-1"
                  />
                  <img
                    src="/images/icons/beard-bottom.svg"
                    alt="Balls barbershop"
                    className="service-2"
                  />
                </div>
                <span>Work</span>
              </a>
            </li>
            <li>
              <a href="#services" className="menu-item">
                <div className="nav-service square">
                  <img
                    src="/images/icons/shears-left.svg"
                    alt="Balls barbershop"
                    className="service-1"
                  />
                  <img
                    src="/images/icons/shears-right.svg"
                    alt="Balls barbershop"
                    className="service-2"
                  />
                </div>
                <span>Service</span>
              </a>
            </li>
            <li className={`logo ${status}`}>
              <a href="#about">
                <img
                  src="/logo-netlify.svg"
                  alt="Netlify Logo"
                  width={96}
                  height={96}
                />
              </a>
            </li>
            <li>
              <a href="#merch" className="menu-item">
                <div className="nav-service square">
                  <img
                    src="/images/icons/products-top.svg"
                    alt="Balls barbershop"
                    className="service-1"
                  />
                  <img
                    src="/images/icons/products-bottom.svg"
                    alt="Balls barbershop"
                    className="service-2"
                  />
                </div>
                <span>Merch</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                <div className="nav-service square">
                  <img
                    src="/images/icons/navigator-top.svg"
                    alt="Balls barbershop"
                    className="service-1"
                  />
                  <img
                    src="/images/icons/navigator-bottom.svg"
                    alt="Balls barbershop"
                    className="service-2"
                  />
                </div>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
