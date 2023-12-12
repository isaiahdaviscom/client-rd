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
        new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
      );
      const currentDate = new Date();
      const currentDay = currentDate.getDay();
      const currentHour = currentDate.getHours();

      // Check if it's Tuesday to Friday (Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5)
      const isWeekday = currentDay >= 2 && currentDay <= 5;

      // Check if it's between 11 AM and 6:30 PM
      const isBusinessHours = currentHour >= 11 && (currentHour < 18 || (currentHour === 18 && currentDate.getMinutes() <= 30));

      if (isWeekday && isBusinessHours) {
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
              <span>{
                status === 'online' ? 'Open' : 'Closed' 
              }</span>
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
