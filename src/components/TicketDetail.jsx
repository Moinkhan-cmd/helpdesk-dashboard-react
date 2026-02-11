import { Bold, Italic, Paperclip } from 'lucide-react'

function TicketDetail({ ticket }) {
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
          <button className="tabBtn on">Public Reply</button>
          <button className="tabBtn">Private Comment</button>
        </div>
        <div className="replyArea">
          <textarea placeholder="Add a reply..."></textarea>
        </div>
        <div className="toolBar">
          <div className="toolLeft">
            <Bold size={16} />
            <Italic size={16} />
            <Paperclip size={16} />
          </div>
          <div className="toolRight">
            <button className="sendBtn">Send</button>
          </div>
        </div>
      </div>

      <div className="commentsBox">
        <div className="commentRow">
          <div className="commentTop">
            <div className="commentAva"><div className="ava avaM"></div></div>
            <div className="commentInfo">
              <strong>Allie Harmon</strong>
              <span className="commentDate">Feb 9, 2022</span>
            </div>
          </div>
          <div className="commentBody">
            <p>Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketDetail
