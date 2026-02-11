import { Home, Users, FileText, Settings } from 'lucide-react'

function Sidebar() {
  return (
    <aside className="sideBar">
      <nav className="sideNav">
        <div className="sideItem on"><Home size={20} /></div>
        <div className="sideItem"><Users size={20} /></div>
        <div className="sideItem"><FileText size={20} /></div>
      </nav>
      <div className="sideBot">
        <div className="sideItem"><Settings size={20} /></div>
      </div>
    </aside>
  )
}

export default Sidebar
