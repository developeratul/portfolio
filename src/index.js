import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import "./styles/global/global.css";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.querySelector("#root")
);
