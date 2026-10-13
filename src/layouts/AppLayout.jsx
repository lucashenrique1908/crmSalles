import { Outlet, useLocation } from "react-router"
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header/Header"


function AppLayout() {
  const location = useLocation()
  const pageTitle = location.pathname === "/dashboard"
    ? "Dashboard"
    : "Leads"

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header title={pageTitle} />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout