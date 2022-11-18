import { useEffect } from "react";
import { gsap } from "gsap";

export default function KeepTrack() {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      ".keep-track-section h1",
      { opacity: 0, y: 100, duration: 0.5, delay: 2.5, ease: "back" },
      { opacity: 1, y: 0, duration: 0.5, delay: 2.5, ease: "back" }
    );
    tl.fromTo(
      ".main-text",
      { opacity: 0, y: 100, duration: 1, ease: "back" },
      { opacity: 1, y: 0, duration: 1, ease: "back" }
    );
    //eslint-disable-next-line
  }, []);
  return (
    <section className="keep-track-section">
      <div>
        <h1>Keep track of your snippets</h1>
        <p className="main-text">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className="keep-track-row">
        <div>
          <img src="images/image-computer.png" alt="" />
        </div>
        <div>
          <div className="inner-row-div">
            <h2>Quick Search</h2>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="inner-row-div">
            <h2>iCloud Sync</h2>
            <p>Instantly saves and syncs snippets accros all your devices.</p>
          </div>
          <div className="inner-row-div">
            <h2>Complete History</h2>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
