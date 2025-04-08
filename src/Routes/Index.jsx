import { Route, BrowserRouter, Routes, Outlet } from "react-router";
import Home from "../Pages/Landing/Home";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../Pages/About/About";
import Collection from "../Pages/Collection/Collection";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import { Login } from "../Pages/Auth/Auth";
import { Register } from "../Pages/Auth/Auth";
export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
=======
          <Route index element={<Home />} />
          <Route path={"about"} element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Collection" element={<Collection />} />
          <Route path="cart" element={<Cart />} />
>>>>>>> d0ee7a99933d6063367bb6657af289f14f79daa4
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
