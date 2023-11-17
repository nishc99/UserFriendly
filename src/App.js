import React, { useState } from "react";
import ColorInput from "./ColorInput";
import ColorDisplay from "./ColorDisplay";
import ColorTheme from "./ColorTheme";
import "./App.css";
import "./ColorInput.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedTextFormat, setSelectedTextFormat] = useState("default");

  const handleColorChange = (color, textFormat) => {
    setSelectedColor(color);
    setSelectedTextFormat(textFormat);
  };

  return (
    <div className="app-container">
      <ColorInput
        onSelectColor={handleColorChange}
        onSelectTextFormat={handleColorChange}
      />
      {selectedColor && (
        <div className="color-section">
          <ColorDisplay color={selectedColor} />
          <ColorTheme color={selectedColor} textFormat={selectedTextFormat} />
        </div>
      )}
    </div>
  );
};

export default App;



// ************************************************************************************************
// import React, { useState } from "react";
// import ColorInput from "./ColorInput";
// import ColorDisplay from "./ColorDisplay";
// import ColorTheme from "./ColorTheme";
// import "./App.css";
// import "./ColorInput.css";

// const App = () => {
//   const [selectedColor, setSelectedColor] = useState("");

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   return (
//     <div className="app-container">
//       <ColorInput onSelectColor={handleColorChange} />
//       {selectedColor && (
//         <div className="color-section">
//           <ColorDisplay color={selectedColor} />
//           <ColorTheme color={selectedColor} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
