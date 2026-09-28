import { Link } from "react-router"

function Navbar() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/leads">Leads</Link>
    </nav>
  )
}

export default Navbar
