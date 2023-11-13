const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact_Title Heading primary-color">CONTACT US</div>
      <div className="Contact_Text Text">
        We offer the best <span>Security Services,</span> Security Services,
        Integrated Facility Management Services. Please call us at the numbers
        below or send us an email and we will get back to you as soon as we can.
      </div>
      <div className="Contact_Block">
        <div className="Conatct_Card Conatct__Card">
          <i className="material-icons Contact__Card_Icon">phone</i>
          <p className="Contact__Card_Text">
            <a href="tel:+919959604030">+919959604030</a>
          </p>
        </div>
        <div className="Conatct_Card Conatct__Card">
          <i className="material-icons Contact__Card_Icon">message</i>
          <p className="Contact__Card_Text">
            <a href="sms:+919959604030?body=Hi i am looking forward to be in touch with you">
              +919959604030
            </a>
          </p>
        </div>
        <div className="Conatct_Card Conatct__Card">
          <i className="material-icons Contact__Card_Icon">mail</i>
          <p className="Contact__Card_Text">
            <a href="mailto:rssroyal68@gmail.com">rssroyal68@gmail.com</a>
          </p>
        </div>
        <div className="Conatct_Card Conatct__Card">
          <i className="material-icons Contact__Card_Icon">map</i>
          <p className="Contact__Card_Text">
            <a
              href="https://www.google.com/maps/@17.5962279,78.4912246,20z"
              rel="noreferrer"
              target="_blank"
            >
              H.no 2-73, Kandlakoya Vil, Mechal mdl, Medchal Dist - 501401
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
