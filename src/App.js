import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/terms/Terms";
import "aos/dist/aos.css";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";

function App() {
  const [barLoading, setbarLoading] = useState(false);
  return (
    <ChakraProvider>
      <div className="app">
        <Topbar barLoading={barLoading} setbarLoading={setbarLoading} />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home barLoading={barLoading} setbarLoading={setbarLoading} />
            }
          />
          <Route
            path="/memberstocks"
            element={
              <Home barLoading={barLoading} setbarLoading={setbarLoading} />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup barLoading={barLoading} setbarLoading={setbarLoading} />
            }
          />
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
