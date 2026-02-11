import { Search, ChevronDown } from 'lucide-react'

function Navbar() {
  return (
    <header className="topNav">
      <div className="leftNav">
        <div className="logoBox">C</div>
        <span className="logoTxt">Helpdesk</span>
      </div>
      <div className="centerNav">
        <div className="searchBox">
          <Search size={16} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="rightNav">
        <button className="createBtn">Create <ChevronDown size={14} /></button>
        <img className="userImg" src="https://randomuser.me/api/portraits/women/44.jpg" />
      </div>
    </header>
  )
}

export default Navbar
