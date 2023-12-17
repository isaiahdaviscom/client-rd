// components/Navigation.js
import { useState } from 'react';
import WorkIcon from './icons/WorkIcon';
import PlayIcon from './icons/PlayIcon';
import MerchIcon from './icons/MerchIcon';
import HeadsetIcon from './icons/HeadsetIcon';
import styles from './Navigator.module.css';
const NavigationLink = ({ id, text, icon, activeLink, onClick }) => {
  const isActive = activeLink === id;
  const className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <button rel="noopener noreferrer" onClick={() => onClick(id)}>
        {Array.isArray(icon) ? (
          // If icon is an array, assume it contains one or two images
          <>
            <div className={`${styles['icon-container']}`}>
            {icon.map((img, index) => (
              <img key={index} height={64} width={64} src={img} alt={`Icon ${index + 1}`} />
            ))}
            </div>
          </>
        ) : (
          // If icon is not an array, assume it's a function or a single image path
          <span>{icon && (typeof icon === 'function' ? icon() : <img height={64} width={64} src={icon} alt="Icon" />)}</span>
        )}
        {id === 'logo' ? null : <span className='text-white'>{text}</span>}
      </button>
    </li>
  );
};

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');

  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
      setActiveLink(id);
    }
  };

  const links = [
    { id: 'about', text: 'About', icon: ['/images/icons/beard-bottom.svg',"/images/icons/beard-top.svg"] },
    { id: 'services', text: 'Services', icon: ['/images/icons/shears-left.svg', "/images/icons/shears-right.svg"] },
    {
      id: 'home',
      icon: ['/logo-netlify.svg'], // Single image path
    },
    { id: 'merch', text: 'Fades', icon: ['/images/icons/products-bottom.svg', '/images/icons/products-top.svg'] }, // Array with one or two icons
    { id: 'contact', text: 'Contact', icon: ['/images/icons/navigator-bottom.svg', '/images/icons/navigator-top.svg'] },
  ];

  return (
    <nav>
      <ul>
        {links.map(({ id, text, icon }) => (
          <NavigationLink
            key={id}
            id={id}
            text={text}
            icon={icon}
            activeLink={activeLink}
            onClick={scrollToSection}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
