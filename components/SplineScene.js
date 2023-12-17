import React, { useEffect } from 'react';
// import * as THREE from 'three';  // Import Three.js if needed
// import SplineLibrary from 'spline-library';  // Import the Spline library
import Spline from '@splinetool/react-spline';


const SplineScene = () => {
  useEffect(() => {
    // Your code using the Spline library goes here
  }, []);

  return (
    <Spline scene="https://prod.spline.design/C9v60Q5peQoeRPvB/scene.splinecode" />
  ); // or your JSX if needed
};

export default SplineScene;
