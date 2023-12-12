import { useState, useEffect } from "react";

const ServiceForm = ({ selectedServices }) => {
  return (
    <>
      <iframe
        id="booking"
        title="Book an appointment"
        style={{ marginRight: "-1.5em", marginLeft: "-1.5em", width: "calc(100vw - 62px)" }}
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2C18CQWGd0iJPrxcw5B7lACsoutodekVzDYIDHxKwlaH9uKf5pt-4DCNPUn2MYhUad7umefWAv?gv=true"
        width={100}
        height={700}
        frameBorder={0}>
      </iframe>
    </>
  );
};

export default ServiceForm;