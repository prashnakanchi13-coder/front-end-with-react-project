import { useState } from "react";
import "../index.css";

function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [done, setDone] = useState(false);

  const sendForm = (event) => {
    event.preventDefault();
    setDone(true);
  };

  return (
    <div className="card">
      <h1>Contact Us</h1>

      {done ? (
        <div className="message">
          Thank you! We got your message.
        </div>
      ) : (
        <form onSubmit={sendForm}>
          
          <div className="box">
            <label>Name</label>
            <input type="text"required placeholder="Enter name" value={data.name}
              onChange={(event) => setData({ ...data, name: event.target.value })}/>
          </div>

          <div className="box">
            <label>Email</label>
            <input type="email" required placeholder="Enter email" value={data.email}
              onChange={(event) => setData({ ...data, email: event.target.value })}/>
          </div>

          <div className="box">
            <label>Message</label>
            <textarea rows="4" required placeholder="Write message" value={data.message}
              onChange={(event) => setData({ ...data, message: event.target.value })}>
            </textarea>
          </div>

          <button type="submit" className="button">
            Send Message
          </button>

        </form>
      )}
    </div>
  );
}

export default Contact;

 
          