import { Outlet } from "react-router-dom";
import NavBar from "../components/frontend/NavBar";
import Footer from "../components/frontend/Footer";

export default function FrontLayout() {
  return(
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}