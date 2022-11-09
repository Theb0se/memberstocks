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
import Order from "./pages/Order/Order";
import { DataState } from "./Context/DataContext";
import Trackorder from "./pages/trackorder/Trackorder";
import Services from "./pages/Services/Services";
import Update from "./pages/Update/Update";
import Account from "./pages/Account/Account";
import Support from "./pages/Support/Support";
import Addfund from "./pages/Addfund/Addfund";

function App() {
  const [barLoading, setbarLoading] = useState(false);
  const { user } = DataState();
  console.log(user);

  return (
    <ChakraProvider>
      <div className="app">
        <Topbar barLoading={barLoading} setbarLoading={setbarLoading} />
        <Navbar setbarLoading={setbarLoading} />
        <Routes >
          <Route
            path="/"
            element={
              user ? (
                <Order setbarLoading={setbarLoading} />
              ) : (
                <Home setbarLoading={setbarLoading} />
              )
            }
          />
          <Route
            path="/memberstocks"
            element={
              user ? (
                <Order setbarLoading={setbarLoading} />
              ) : (
                <Home setbarLoading={setbarLoading} />
              )
            }
          />
          <Route
            path="/signup"
            element={<Signup setbarLoading={setbarLoading} />}
          />
          <Route path="api" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route
            path="/order"
            element={
              user ? (
                <Order setbarLoading={setbarLoading} />
              ) : (
                <Home setbarLoading={setbarLoading} />
              )
            }
          />

          <Route
            path="trackorder"
            element={<Trackorder setbarLoading={setbarLoading} />}
          />
          <Route path="services" element={<Services />} />
          <Route path="update" element={<Update />} />
          <Route
            path="account"
            element={<Account setbarLoading={setbarLoading} />}
          />
          <Route path="support" element={<Support />} />
          <Route
            path="fund"
            element={<Addfund setbarLoading={setbarLoading} />}
          />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
