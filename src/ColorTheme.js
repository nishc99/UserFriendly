import React from "react";

const ColorTheme = ({ color, textFormat }) => {
  const themeStyle = {
    backgroundColor: color,
    fontFamily: textFormat,
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="color-theme" style={themeStyle}>
      <h2>{color} Theme</h2>
      <div>Next component</div>
    </div>
  );
};

export default ColorTheme;


// // ColorTheme.js
// import React from "react";

// const ColorTheme = ({ color }) => {
//   return (
//     <div>
//       <h2>{color} Theme</h2>
//       <div>Next component</div>
//     </div>
//   );
// };

// export default ColorTheme;
