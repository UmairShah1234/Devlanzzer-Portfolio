import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="container  col-md-6 text-center">
            <h3>Contact Us</h3>
            <p>Connect with us to create</p>
          </div>
          {/* form */}
          <div className="container col-md-6">
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="shadow border-0 rounded p-3 m-2 form-control rounded-pill"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="shadow border-0 rounded p-3 m-2 form-control  rounded-pill"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <textarea
                type="text"
                rows={3}
                className="shadow border-0 rounded p-3 m-2 form-control rounded-pill"
                placeholder="Enter Your Message"
              />
              <div className="p-2 m-2">
                <button
                  type="button"
                  className="btn btn-dark shadow rounded-pill"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
