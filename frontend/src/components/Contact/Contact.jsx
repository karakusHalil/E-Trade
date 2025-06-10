import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-top">
          <ContactMap />
        </div>
        <div className="contact-bottom">
          <div className="container">
            <div className="contact-titles">
              <h4>Contact with us</h4>
              <h2>Get In Touch</h2>
              <p>
                In hac habitasse platea dictumst. Pellentesque viverra sem nec
                orci lacinia, in bibendum urna mollis. Quisque nunc lacus,
                varius vel leo a, pretium lobortis metus. Vivamus consectetur
                consequat justo.
              </p>
            </div>
            <div className="contact-elements">
              <ContactForm />
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong> Clotya Store</strong>
                    <p className="contact-street">
                      Clotya Store Germany — 785 15h Street, Office 478/B Green
                      Mall Berlin, De 81566
                    </p>
                    <a href="tel:Phone: +1 1234 567 88">
                      Phone: +1 1234 567 88
                    </a>
                    <a href="mailto:Email: contact@example.com">
                      Email: contact@example.com
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong> Opening Hours</strong>
                    <p className="contact-date">Monday - Friday : 9am - 5pm</p>
                    <p>Weekend Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
