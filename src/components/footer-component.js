export default function FooterComponent() {
  return (
    <footer className="footer">
      <section>
        <div>
          <img src="images/logo.svg" alt="" className="footer-logo" />
        </div>
        <div>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p>Privacy Policy</p>
          <p>Press Kit</p>
        </div>
        <div>
          <p>Install Guide</p>
        </div>
        <div className="socials">
          <img src="images/icon-facebook.svg" alt="" />
          <img src="images/icon-twitter.svg" alt="" />
          <img src="images/icon-instagram.svg" alt="" />
        </div>
      </section>
    </footer>
  );
}
