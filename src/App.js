//? "rafce" snippet für das Grundgerüst benutzen. EXTENSION: ES7+ React installieren!

import React from "react";
import { About, Contacts, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Contacts />
    </div>
  );
};

export default App;
