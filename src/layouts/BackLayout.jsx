import { Outlet } from "react-router-dom";
import NavBar from "../components/backend/NavBar";

export default function BackLayout() {
  return(
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}