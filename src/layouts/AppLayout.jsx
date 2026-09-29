import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar/Sidebar"

function AppLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout