import { useEffect } from 'react';

const ButtonHashbang = ({ onClick }) => {
  // Simulating a click event that updates the parent component
  const handleClick = () => {
    onClick('#clicked-content');
  };

  // Simulating a scenario where the component is mounted and the URL is updated
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default ButtonHashbang;
