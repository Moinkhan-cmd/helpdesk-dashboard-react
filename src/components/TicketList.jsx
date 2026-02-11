import { Search } from 'lucide-react'

function TicketList({ tickets }) {
  return (
    <div className="ticketsList">
      <div className="listHead">
        <div className="listTitle">My Tickets</div>
      </div>
      <div className="searchBar">
        <Search size={16} />
        <input type="text" placeholder="Search tickets" />
      </div>
      <ul className="tixList">
        {tickets.map((t, i) => (
          <li key={i} className={t.selected ? "tixRow picked" : "tixRow"}>
            <div className="tixInfo">
              <div className="tixName">{t.title}</div>
              <div className="tixMeta">
                <span className="tixId">{t.id}</span>
                <span className={t.status === 'Done' ? "badge badgeDone" : "badge badgeTodo"}>{t.status}</span>
              </div>
            </div>
            <div className="tixDate">{t.date}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TicketList
