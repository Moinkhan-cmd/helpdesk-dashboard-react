import { useState } from 'react'
import { Bold, Italic, Paperclip } from 'lucide-react'

function TicketDetail({ ticket }) {
  var [tab, setTab] = useState(0)
  var [reply, setReply] = useState('')
  var [msgs, setMsgs] = useState([{ who: 'Allie Harmon', when: 'Feb 9, 2022', txt: 'Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem.' }])

  function sendReply() {
    if (reply == '') return
    var newMsg = { who: 'You', when: 'Just now', txt: reply }
    setMsgs([...msgs, newMsg])
    setReply('')
  }

  return (
    <div className="detailBox">
      <div className="detailHead">
        <div className="headTop">
          <div className="titleSec">
            <h2>{ticket.title}</h2>
            <div className="metaRow">
              <span>{ticket.id}</span>
              <span>|</span>
              <span>Created {ticket.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="replyBox">
        <div className="replyTabs">
          <button className={tab == 0 ? "tabBtn on" : "tabBtn"} onClick={() => setTab(0)}>Public Reply</button>
          <button className={tab == 1 ? "tabBtn on" : "tabBtn"} onClick={() => setTab(1)}>Private Comment</button>
        </div>
        <div className="replyArea">
          <textarea placeholder="Add a reply..." value={reply} onChange={(e) => setReply(e.target.value)}></textarea>
        </div>
        <div className="toolBar">
          <div className="toolLeft">
            <Bold size={16} />
            <Italic size={16} />
            <Paperclip size={16} />
          </div>
          <div className="toolRight">
            <button className="sendBtn" onClick={sendReply}>Send</button>
          </div>
        </div>
      </div>

      <div className="commentsBox">
        {msgs.map((m, i) => (
          <div key={i} className="commentRow">
            <div className="commentTop">
              <div className="commentAva"><div className="ava avaM"></div></div>
              <div className="commentInfo">
                <strong>{m.who}</strong>
                <span className="commentDate">{m.when}</span>
              </div>
            </div>
            <div className="commentBody">
              <p>{m.txt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TicketDetail
