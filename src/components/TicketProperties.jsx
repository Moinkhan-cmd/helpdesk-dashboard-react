import { X, ChevronDown } from 'lucide-react'

function TicketProperties({ ticket }) {
  return (
    <aside className="propsPanel">
      <div className="propsHead">
        <button className="statusBtn">{ticket.status}</button>
        <X size={18} className="closeX" />
      </div>

      <div className="propsBody">
        <div className="propRow">
          <label>Priority</label>
          <div className="propVal">
            <span className="prioDot prioMed"></span>
            <span>{ticket.priority}</span>
          </div>
        </div>

        <div className="propRow">
          <label>Assigned To</label>
          <div className="propVal">
            <div className="ava avaS"></div>
            <span>{ticket.assignee}</span>
          </div>
        </div>

        <div className="propRow">
          <label>Status</label>
          <div className="propVal">
            <span>{ticket.status}</span>
          </div>
        </div>
      </div>

      <div className="expandBox">
        <div className="expandRow">
          <span>TASKS</span>
        </div>
        <div className="expandRow">
          <span>HISTORY</span>
        </div>
      </div>
    </aside>
  )
}

export default TicketProperties
