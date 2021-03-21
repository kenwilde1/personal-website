const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h1 className="subtitle is-spaced is-size-3-desktop is-size-3-tablet is-size-3-mobile">
              Thanks for visiting{" "}
              <span className="highlight">kenwilde.net</span>. Want to get in
              touch?
            </h1>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="field">
              <label className="label control is-expanded">Name</label>
              <div className="control is-expanded">
                <input
                  className="input is-medium"
                  name="name"
                  type="text"
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
                  name="email"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Message</label>
              <div className="control is-expanded">
                <textarea
                  className="textarea is-large"
                  name="message"
                  rows="5"
                  required
                ></textarea>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
