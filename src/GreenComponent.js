import React from 'react';
import './GreenComponent.css';

function GreenComponent() {
  const handleClick = () => {
    window.location.href = 'https://www.aquafoundry.com'; 
  };

  return (
    <div className="green-component">
      <h1>Introducing Aquafoundry 🌱</h1>
      <button onClick={handleClick}>Go to the future</button>
    </div>
  );
}

export default GreenComponent;