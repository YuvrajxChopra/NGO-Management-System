import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const sendMessage = (e) => {
    if (e) e.preventDefault();
    const message = inputs.message;
    const messageEnter = message
      .replace(/\r\n|\r|\n/g, "%0D%0A")
      .replace(" ", "%20");
    const request =
      "mailto:YOUREMAIL?subject=Email%20from%20" +
      inputs.name +
      "/" +
      inputs.email +
      "&body=" +
      messageEnter;
    document.location = request;
  };
  return (
    <div className="contact_section" id="contact_section">
      <div className="container">
        <div
          className="row contact_row"
          style={{
            display: "flex",
            height: "50vh",
            flexDirection: "start",
          }}
        >
          <div className="col">
            <div className="contact_text-wrapper">
              <div className="top-line">Contact Us</div>
              <p className="contact_subtitle dark">description</p>
            </div>
          </div>
          <div className="col">
            <div className="contact__wrap">
              <form onSubmit={(e) => sendMessage(e)} className="contact__form">
                <input
                  value={inputs.name}
                  onChange={(e) => handleInputChange(e)}
                  type="text"
                  name="name"
                  placeholder="name"
                  title="Your name"
                  maxLength="50"
                  required
                />
                <input
                  value={inputs.email}
                  onChange={(e) => handleInputChange(e)}
                  type="email"
                  name="email"
                  placeholder="email"
                  title="Your email"
                  maxLength="50"
                  required
                />
                <textarea
                  value={inputs.message}
                  onChange={(e) => handleInputChange(e)}
                  type="text"
                  name="message"
                  placeholder="message"
                  title="Your message"
                  maxLength="550"
                  required
                />
                <input type="submit" value="send message" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
