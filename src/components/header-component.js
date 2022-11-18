import { useEffect } from "react";
import { gsap } from "gsap";

export default function HeaderComponent({
  className,
  image,
  title,
  paragraph,
  btnTxtOne,
  btnTxtTwo,
}) {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      ".header-div img",
      { opacity: 0, duration: 0.5, scale: 5, ease: "back" },
      { opacity: 1, duration: 0.5, scale: 1, ease: "back" }
    );
    tl.fromTo(
      ".header-div h1",
      { opacity: 0, duration: 0.5, x: -100, ease: "back" },
      { opacity: 1, duration: 0.5, x: 0, ease: "back" }
    );
    tl.fromTo(
      ".header-div p",
      { opacity: 0, duration: 0.5, x: 100, ease: "back" },
      { opacity: 1, duration: 0.5, x: 0, ease: "back" }
    );
    tl.fromTo(
      ".green-btn",
      { opacity: 0, duration: 0.5, y: 100, ease: "back" },
      { opacity: 1, duration: 0.5, y: 0, ease: "back" }
    );
    tl.fromTo(
      ".blue-btn",
      { opacity: 0, duration: 0.5, y: 100, ease: "back" },
      { opacity: 1, duration: 0.5, y: 0, ease: "back" }
    );
    // eslint-disable-next-line
  }, []);

  return (
    <section className={className}>
      <div className="header-div">
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <button className="green-btn">{btnTxtOne}</button>
        <button className="blue-btn">{btnTxtTwo}</button>
      </div>
    </section>
  );
}
