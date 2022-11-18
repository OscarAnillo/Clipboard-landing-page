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
        x: 300,
        duration: 2,
        ease: "back",
        scrollTrigger: {
          trigger: ".brand",
          toggleActions: "restart pause resume reset",
        },
      },
      {
        x: 0,
        duration: 2,
        ease: "back",
        scrollTrigger: {
          trigger: ".brand",
          toggleActions: "restart pause resume reset",
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
