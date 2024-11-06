import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lol from "./pages/Lol";
import Overwatch from "./pages/Overwatch";
import Brawlstars from "./pages/Brawlstars";

export default function App() {
  function Layout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/lol" element={<Lol />} />
          <Route path="/overwatch" element={<Overwatch />} />
          <Route path="/brawlstars" element={<Brawlstars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
