import React from "react";
import {createRoot} from "react-dom/client";

import "swiper/bundle";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Hello */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
