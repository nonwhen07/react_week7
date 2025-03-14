import { NavLink } from "react-router-dom";

const routes = [
  { path: "/dashboard", name: "後台首頁" },
  // { path: "/orders", name: "訂單列表" },
];

export default function NavBar() {
  return(
    <>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <ul className="navbar-nav flex-row gap-5 fs-5">
            {
              routes.map((route) =>(
                <li key={route.path} className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={route.path}>{route.name}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </>
  )
}