import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import { useState } from "react";
import "./index.css";
import App from "./App";

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="red" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating size={24} color="red" className="test" />

    <Test /> */}
  </React.StrictMode>
);
