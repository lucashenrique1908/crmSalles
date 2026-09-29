import { Routes, Route, Navigate } from "react-router"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import Leads from "../pages/Leads"
import AppLayout from "../layouts/AppLayout"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="leads" element={<Leads />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes