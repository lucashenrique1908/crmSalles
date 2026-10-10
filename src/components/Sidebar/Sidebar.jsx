import { NavLink } from "react-router"
import {useState} from "react";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <> 
    <button
  type="button"
  className="md:hidden"
  aria-label="Abrir ou fechar menu"
  aria-expanded={isMenuOpen}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  ☰
</button>
    <aside className={`w-3xs min-h-screen p-4 bg-slate-100 ${isMenuOpen ? "block" : "hidden"} md:block`}>
      <h2 className="text-xl font-bold mb-6">CRM Sales</h2>
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/dashboard" 
           onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>  
            `rounded px-3 py-2 ${isActive ? "bg-white font-medium" : "hover:bg-white/70"}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/leads" 
           onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            `rounded px-3 py-2 ${isActive ? "bg-white font-medium" : "hover:bg-white/70"}`
          }
        >
          Leads
        </NavLink>
      </nav>
    </aside> 
    </>
  )
  
}

export default Sidebar