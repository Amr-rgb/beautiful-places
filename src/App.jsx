import gsap from "gsap";
import { useEffect, useRef } from "react";

function App() {
  let app = useRef(null);
  let heading = useRef(null);
  let btns = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let overlay1 = useRef(null);
  let overlay2 = useRef(null);
  let overlay3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(app, { duration: 0, css: { visibility: "visible" } })
      .fromTo(
        heading.children,
        {
          opacity: 0,
          y: 50,
          skewX: -30,
          rotateZ: 1,
          stagger: 0.1,
        },
        {
          duration: 0.7,
          opacity: 0.9,
          y: 0,
          skewX: 0,
          rotateZ: 0,
          stagger: 0.2,
        },
        "+=.5"
      )
      .fromTo(
        btns.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 0.7,
          opacity: 1,
          y: 0,
          stagger: 0.2,
        },
        "-=.2"
      )
      .fromTo(
        [img1, img2, img3],
        {
          y: 100,
          scale: 1.2,
        },
        {
          duration: 1.1,
          y: 0,
          scale: 1,
          stagger: 0.2,
        },
        "-=1.3"
      )
      .to(
        [overlay1, overlay2, overlay3],
        {
          duration: 1.4,
          height: 0,
          stagger: 0.2,
        },
        "-=1.6"
      );
  }, []);

  return (
    <div
      ref={app}
      className="container mx-auto px-4 flex flex-col justify-center h-screen min-h-[850px] relative"
    >
      <div>
        <div className="space-y-8">
          <h1
            ref={(el) => (heading = el)}
            className="text-[calc(1rem+5vw)] leading-tight md:text-6xl md:leading-tight"
          >
            <span className="opacity-0 block">See The Most</span>
            <span className="opacity-0 block">Beautiful Places</span>
          </h1>
          <div
            ref={(el) => (btns = el)}
            className="flex space-x-2 font-['Poppins']"
          >
            <button className="opacity-0 rounded-xl py-[15px] px-[50px] bg-[#2F2820] text-white">
              Set A Plan
            </button>
            <button className="opacity-0 rounded-xl px-[15px] aspect-square text-center bg-[#390000] text-white">
              <img src="/assets/play.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="-z-10 absolute inset-0">
          <div className="absolute top-20 left-5 md:scale-125 md:origin-left xl:scale-150 overflow-hidden">
            <div ref={(el) => (img1 = el)} className="overflow-hidden">
              <div className="bg-[url(/assets/img1.jpg)] bg-cover bg-center w-40 h-48">
                <div
                  ref={(el) => (overlay1 = el)}
                  className="absolute inset-0 bg-white"
                ></div>
              </div>
            </div>
          </div>

          <div className="opacity-30 md:opacity-100 absolute top-[35%] right-5 md:scale-125 md:origin-right xl:scale-150 overflow-hidden">
            <div ref={(el) => (img2 = el)} className="overflow-hidden">
              <div className="bg-[url(/assets/img2.jpg)] bg-cover bg-center w-52 h-72">
                <div
                  ref={(el) => (overlay2 = el)}
                  className="absolute inset-0 bg-white"
                ></div>
              </div>
            </div>
          </div>

          <div className="absolute top-[70%] left-[15%] md:scale-125 md:origin-left xl:scale-150 overflow-hidden">
            <div ref={(el) => (img3 = el)} className="overflow-hidden">
              <div className="bg-[url(/assets/img3.jpg)] bg-cover bg-center w-44 h-40">
                <div
                  ref={(el) => (overlay3 = el)}
                  className="absolute inset-0 bg-white"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
