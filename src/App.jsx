import { useState } from 'react'
import './styles.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import TicketViews from './components/TicketViews'
import TicketList from './components/TicketList'
import TicketDetail from './components/TicketDetail'
import TicketProperties from './components/TicketProperties'

function App() {
  var allTickets = [
    { id: 'APPS-216', title: 'Soluta quam velit', status: 'To Do', date: 'Jun 2', priority: 'Low', assignee: 'John Doe' },
    { id: 'OPS-102', title: 'Laudantium neque veritatis', status: 'To Do', date: 'Jun 2', priority: 'Medium', assignee: 'Allie Harmon' },
    { id: 'APPS-217', title: 'Molestiae saepe illum', status: 'To Do', date: 'Jun 1', priority: 'High', assignee: 'Jane Smith' },
    { id: 'APPS-218', title: 'Dignissimos maiores porro', status: 'To Do', date: 'May 31', priority: 'Low', assignee: 'Bob Wilson' },
    { id: 'APPS-219', title: 'Ut sapiente sunt', status: 'Done', date: 'May 29', priority: 'Medium', assignee: 'Allie Harmon' },
  ]

  var [picked, setPicked] = useState(1)
  var [searchTxt, setSearchTxt] = useState('')
  var [viewIdx, setViewIdx] = useState(0)
  var [showProps, setShowProps] = useState(true)

  var views = [
    { name: 'My Tickets', count: 5 },
    { name: 'Past Due', count: 2 },
    { name: 'All Tickets', count: 5 },
  ]

  function filterTix() {
    var result = allTickets
    if (searchTxt != '') {
      result = result.filter(t => t.title.toLowerCase().includes(searchTxt.toLowerCase()))
    }
    if (viewIdx == 1) {
      result = result.filter(t => t.status == 'To Do')
    }
    return result
  }

  var shownTix = filterTix()
  var currentTix = allTickets[picked]

  return (
    <div className="mainApp">
      <Sidebar />
      <div className="rightSide">
        <Navbar searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
        <div className="middle">
          <TicketViews views={views} viewIdx={viewIdx} setViewIdx={setViewIdx} />
          <TicketList tickets={shownTix} picked={picked} setPicked={setPicked} allTickets={allTickets} openProps={() => setShowProps(true)} />
          <TicketDetail ticket={currentTix} />
          {showProps && <TicketProperties ticket={currentTix} closePanel={() => setShowProps(false)} />}
        </div>
      </div>
    </div>
  )
}

export default App
