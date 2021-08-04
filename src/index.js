import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import AOS from "aos";

import "./styles/global/global.css";
import "aos/dist/aos.css";

AOS.init({ duration: 600, startEvent: "DOMContentLoaded" });
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.querySelector("#root")
);
