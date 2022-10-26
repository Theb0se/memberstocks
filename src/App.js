import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
