import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Hello() {
  return <h1>Hello, world!</h1>;
}
function Footer() {
  return <footer>Copyright 2024</footer>;
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hello />
    <Footer />
  </StrictMode>,
);
