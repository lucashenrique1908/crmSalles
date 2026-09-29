import { NavLink } from "react-router"

function Sidebar() {
  return (
    <aside>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/leads">Leads</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar