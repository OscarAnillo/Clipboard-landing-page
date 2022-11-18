import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../Data/product-data.json";

gsap.registerPlugin(ScrollTrigger);

export default function ProductComponent() {
  const divRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".product-row",
      {
        opacity: 0,
        x: -300,
        duration: 1,
        ease: "back",
        scrollTrigger: {
          trigger: ".product-row",
          toggleActions: "restart none none pause",
          start: "20% top",
        },
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back",
        scrollTrigger: {
          trigger: ".product-row",
          toggleActions: "restart none none pause",
        },
      }
    );
  }, []);

  return (
    <section className="product-section" ref={divRef}>
      <div className="product-row">
        {data.map((item) => (
          <div key={item.id} className="map-div">
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
