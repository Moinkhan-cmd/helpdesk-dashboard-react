import { ChevronDown, MessageCircle, LayoutGrid } from 'lucide-react'

function TicketViews({ views, viewIdx, setViewIdx }) {
  return (
    <aside className="viewsPanel">
      <div className="viewsHead">
        <ChevronDown size={16} />
        <span>TICKET VIEWS</span>
      </div>
      <ul className="viewsList">
        {views.map((v, i) => (
          <li key={i} className={viewIdx == i ? "viewRow on" : "viewRow"} onClick={() => setViewIdx(i)}>
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
