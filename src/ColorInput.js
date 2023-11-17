import React, { useState } from "react";
import "./ColorInput.css";
import axios from "axios";

const ColorInput = ({ onSelectColor, onSelectTextFormat }) => {
  const [userQuery, setUserQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [textFormat, setTextFormat] = useState(null);

  const sendRequest = async () => {
    try {
      const apiUrl = "/query";
      const requestBody = {
        user_query: userQuery,
        history: [],
      };
  
      const result = await axios.post(apiUrl, requestBody);
      setResponse(result.data);
      console.log(result.data);
  
      if (result.data.background_color) {
        const bgColor = result.data.background_color;
        setBackgroundColor(bgColor);
        console.log("Background Color:", bgColor);
        onSelectColor(bgColor);
      }
  
      if (result.data.text_format_header) {
        const format = result.data.text_format_header;
        setTextFormat(format);
        console.log("Text Format:", format);
        onSelectTextFormat(format);
      }
  
      alert("Request sent successfully!");
      //console.log(bgColor,format);
    } catch (error) {
      console.error("Error making API request:", error);
      console.error("Error details:", error.response);
    }
  };
  

  return (
    <div className="color-input" style={{backgroundColor}}>
      <label htmlFor="colorInput">End Point color:</label>

      <input
        type="text"
        value={userQuery}
        onChange={(e) => setUserQuery(e.target.value)}
        id="colorInput"
      />
      <button onClick={sendRequest} style={{position:"absolute", top:"110px", left: "591px"}}>Send Request</button>

      <div>
        <p style={{fontFamily: textFormat, marginTop:"85px",marginLeft:"600px" }}>
          This is a sample text. See the changes!
        </p>
      </div>
    </div>
  );
};

export default ColorInput;





// import React, { useState } from "react";
// import "./ColorInput.css";
// import axios from "axios";

// const ColorInput = ({ onSelectColor, onSelectTextFormat }) => {
//   const [userQuery, setUserQuery] = useState("");
//   const [response, setResponse] = useState(null);
//   const [backgroundColor, setBackgroundColor] = useState(null);
//   const [textFormat, setTextFormat] = useState(null); // New state variable

//   const sendRequest = async () => {
//     try {
//       const apiUrl = "/query";
//       const requestBody = {
//         user_query: userQuery,
//         history: [],
//       };

//       const result = await axios.post(apiUrl, requestBody);
//       setResponse(result.data);
//       console.log(result.data);

//       const bgColor = result.data.background_color;
//       setBackgroundColor(bgColor);
//       console.log("Background Color:", bgColor);
//       onSelectColor(bgColor);

//       const format = result.data.text_format_header;
//       setTextFormat(format);
//       console.log("Text Format:", format);
//       onSelectTextFormat(format);

//       alert("Request sent successfully!");
//       console.log(bgColor, format);
//     } catch (error) {
//       console.error("Error making API request:", error);
//       console.error("Error details:", error.response);
//     }
//   };

//   return (
//     <div className="color-input">
//       <label htmlFor="colorInput">End Point color:</label>

//       <input
//         type="text"
//         value={userQuery}
//         onChange={(e) => setUserQuery(e.target.value)}
//         id="colorInput"
//       />
//       <button onClick={sendRequest}>Send Request</button>

//       <div>
//         <p style={{ backgroundColor, fontFamily: textFormat }}>
//           This is a sample text. See the changes!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ColorInput;

