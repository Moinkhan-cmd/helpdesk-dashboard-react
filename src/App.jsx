import './styles.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import TicketViews from './components/TicketViews'
import TicketList from './components/TicketList'
import TicketDetail from './components/TicketDetail'
import TicketProperties from './components/TicketProperties'

function App() {
  var ticket = {
    id: 'OPS-102',
    title: 'Laudantium neque veritatis',
    date: '11/14/22',
    status: 'To Do',
    priority: 'Medium',
    assignee: 'Allie Harmon'
  }

  var tickets = [
    { id: 'APPS-216', title: 'Soluta quam velit', status: 'To Do', date: 'Jun 2' },
    { id: 'OPS-102', title: 'Laudantium neque veritatis', status: 'To Do', date: 'Jun 2', selected: true },
    { id: 'APPS-216', title: 'Molestiae saepe illum', status: 'To Do', date: 'Jun 1' },
    { id: 'APPS-216', title: 'Dignissimos maiores porro', status: 'To Do', date: 'May 31' },
    { id: 'APPS-216', title: 'Ut sapiente sunt', status: 'Done', date: 'May 29' },
  ]

  var views = [
    { name: 'My Tickets', count: 9, active: true },
    { name: 'Past Due', count: 4 },
    { name: 'All Tickets', count: 2192 },
  ]

  return (
    <div className="mainApp">
      <Sidebar />
      <div className="rightSide">
        <Navbar />
        <div className="middle">
          <TicketViews views={views} />
          <TicketList tickets={tickets} />
          <TicketDetail ticket={ticket} />
          <TicketProperties ticket={ticket} />
        </div>
      </div>
    </div>
  )
}

export default App
