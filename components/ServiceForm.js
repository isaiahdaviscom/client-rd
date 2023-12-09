import { useState, useEffect } from "react";

const ServiceForm = ({ selectedServices }) => {
  const [services, setServices] = useState([]);
  return (
    <>
      <iframe id="booking" title="Book an appointment" src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1IzgFClpTVIoOMKDzoFrsC2I7dDKv7iQLAVqSHU_7CPf5XxmkbA27387UIBRf6PIY5m2d9iq-X?gv=true" style={{ border: 0, width: "100%" }} width={100} height={700} frameborder={0}></iframe>
    </>
  );
};

export default ServiceForm;