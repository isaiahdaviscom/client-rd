import { useState } from 'react';

const onFilterKeyUp = (e) => {
  const filter = e.target.value.toLowerCase();
  const items = document.querySelectorAll(".items .item");
  items.forEach((item) => {
    const label = item.querySelector("label").innerText.toLowerCase();
    if (label.indexOf(filter) > -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

export default function ServiceTable({services}) {
  const [selectedServices, setSelectedServices] = useState([]);
  
  const handleServiceSelect = (serviceId) => {
    const isSelected = selectedServices.includes(serviceId);
    if (isSelected) {
      setSelectedServices((prev) => prev.filter((id) => id !== serviceId));
    } else {
      setSelectedServices((prev) => [...prev, serviceId]);
    }
  };

  // Calculate total price based on selected service IDs
  const totalSelectedPrice = selectedServices.reduce((total, serviceId) => {
    const selectedService = services.find((service) => service.id === serviceId);
    return total + (selectedService ? selectedService.price : 0);
  }, 0);

  return (
    <>
      <div className="filter">
        <input
          type="text"
          placeholder="What are you looking for?"
          onKeyUp={onFilterKeyUp}
        />
      </div>
      <div className="items col-md">
        {services.map((service) => (
          <div className="item" key={service.id}>
            <input
              type="checkbox"
              checked={selectedServices.includes(service.id)}
              onChange={() => handleServiceSelect(service.id)}
            />
            <label>{service.name}</label>
            <span> from ${service.price}</span>
          </div>
        ))}
      </div>
      <p>Total Price of Selected Items: ${totalSelectedPrice}</p>

    </>
  )
}