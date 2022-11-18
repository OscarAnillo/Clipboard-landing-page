import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AccessClipboard() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".access-title",
      {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: ".access-section",
          toggleActions: "restart none none pause",
        },
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".access-section",
          toggleActions: "restart none none pause",
        },
      }
    );
    gsap.fromTo(
      ".access-text",
      {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: ".access-section",
          toggleActions: "restart none none pause",
        },
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".access-section",
          toggleActions: "restart none none pause",
        },
      }
    );
    gsap.fromTo(
      ".access-img",
      {
        x: 200,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".access-section",
          toggleActions: "restart pause resume reset",
          scrub: true,
        },
      },
      {
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".access-section",
          toggleActions: "restart pause resume reset",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="access-section">
      <div>
        <h1 className="access-title" ref={titleRef}>
          Access Clipboard Anywhere
        </h1>
        <p className="access-text">
          Whether you're on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>
      <div className="access-img">
        <img src="images/image-devices.png" alt="" />
      </div>
      <div>
        <h1 className="access-title">Supercharge your workflow</h1>
        <p className="access-text">We've got the tools your productivity.</p>
      </div>
    </section>
  );
}
