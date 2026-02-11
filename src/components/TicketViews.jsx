import { ChevronDown, MessageCircle, LayoutGrid } from 'lucide-react'

function TicketViews({ views }) {
  return (
    <aside className="viewsPanel">
      <div className="viewsHead">
        <ChevronDown size={16} />
        <span>TICKET VIEWS</span>
      </div>
      <ul className="viewsList">
        {views.map((v, i) => (
          <li key={i} className={v.active ? "viewRow on" : "viewRow"}>
            <span>{v.name}</span>
            <span className="viewNum">{v.count}</span>
          </li>
        ))}
      </ul>
      <div className="viewsSec">
        <div className="secRow">
          <MessageCircle size={16} />
          <span>LIVE CHATS</span>
        </div>
        <div className="secRow">
          <LayoutGrid size={16} />
          <span>BOARDS</span>
        </div>
      </div>
    </aside>
  )
}

export default TicketViews
