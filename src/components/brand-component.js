import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandComponent() {
  const divRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".brand",
      {
        opacity: 0,
        x: 300,
        duration: 1.5,
        ease: "back",
        scrollTrigger: {
          trigger: ".brand",
          toggleActions: "restart none none pause",
          start: "20% top",
        },
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "back",
        scrollTrigger: {
          trigger: ".brand",
          toggleActions: "restart none none pause",
        },
      }
    );
  }, []);

  return (
    <div className="brand" ref={divRef}>
      <div>
        <img src="images/logo-google.png" alt="" />
      </div>
      <div>
        <img src="images/logo-ibm.png" alt="" />
      </div>
      <div>
        <img src="images/logo-microsoft.png" alt="" />
      </div>
      <div>
        <img src="images/logo-hp.png" alt="" />
      </div>
      <div>
        <img src="images/logo-vector-graphics.png" alt="" />
      </div>
    </div>
  );
}
