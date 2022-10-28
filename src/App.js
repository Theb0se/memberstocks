import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/terms/Terms";

function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="api" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
