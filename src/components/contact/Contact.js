import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: name,
      to_name: "kennywilde00@gmail.com",
      subject: email,
      message_html: message,
    };

    console.log(message);

    await emailjs.send(
      "service_jh4yjnj",
      "template_7s3j1cl",
      templateParams,
      "user_ka0Mx3ULPxzjB2bVEzxkM"
    );
    e.target.reset();
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h1 className="subtitle is-spaced is-size-3-desktop is-size-3-tablet is-size-3-mobile">
              Thanks for visiting kenwilde
              <span className="highlight">.net</span>. Want to get in touch?
            </h1>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="field">
                <label className="label control is-expanded">Name</label>
                <div className="control is-expanded">
                  <input
                    className="input is-medium"
                    name="user_name"
                    type="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="field">
                <label className="label control is-expanded">Email</label>
                <div className="control is-expanded">
                  <input
                    className="input is-medium"
                    name="user_email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column">
              <div className="field">
                <label className="label">Message</label>
                <div className="control is-expanded">
                  <textarea
                    className="textarea is-large"
                    name="message"
                    rows="5"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-one-fifth">
              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className="button is-primary-button is-medium is-fullwidth is-rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
