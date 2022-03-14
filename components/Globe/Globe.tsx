import React from "react";
import ReactGlobe from "react-globe";

const Globe = () => {
  return (
    <ReactGlobe
      height="100vh"
      globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
      width="100vw"
    />
  );
};
export default Globe;
