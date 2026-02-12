import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Hello() {
  return (
    <div>
      <Header />
      <h1 style={{ color: "blue" }}>Hello, React!</h1>
      <Footer />
    </div>
  );
}
function Header() {
  return <header>Welcome to my React App</header>;
}
function Footer() {
  return <footer>Copyright 2024</footer>;
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hello />
  </StrictMode>,
);
