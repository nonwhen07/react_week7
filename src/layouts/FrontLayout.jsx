import { Outlet } from "react-router-dom";
import NavBar from "../components/frontend/NavBar";
import Footer from "../components/frontend/Footer";

export default function FonterLayout() {
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