import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const courseName = "React Course";
const lectureCount = 5;
function Hello() {
  return (
    <div>
      <Header />
      <h1 className="customHeading">Hello, {courseName}!</h1>
      <h2>Topics for {courseName}</h2>
      <h2>Number of Lectures: {lectureCount}</h2>
      <ul>
        <li>JSX</li>
        <li>Components</li>
        <li>Props</li>
        <li>State</li>
        <li>Lifecycle Methods</li>
      </ul>
      <p>
        Enter Task:{" "}
        <input type="text" placeholder="Enter Task" maxLength="10" />
      </p>
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header>
      <img src="./react.png" alt="React Logo" width="50" height="50" />
      Welcome to my React App
    </header>
  );
}
function Footer() {
  return <footer>Copyright 2024</footer>;
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hello />
  </StrictMode>,
);
