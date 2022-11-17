export default function HeaderComponent() {
  return (
    <section className="header-section">
      <div className="header-div">
        <img src="images/logo.svg" alt="" />
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <button className="green-btn">Download for iOS</button>
        <button className="blue-btn">Download for Mac</button>
      </div>
    </section>
  );
}
