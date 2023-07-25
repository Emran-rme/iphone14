import { useRef } from "react";
import { useIsInViewport } from "../../../helpers/helpers";

const EleventhSection = () => {
  const textRef = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const isVisible = useIsInViewport(textRef);
  const isVisible2 = useIsInViewport(textRef2);
  const isVisible3 = useIsInViewport(textRef3);

  return (
    <section className=" bg-[#f5f5f7] py-[130px] overflow-hidden section-chip fill-alt">
      <div className="scroll-direction">
        <div className="block">
          <div className="section-content">
            <div className="flex flex-wrap flex-row w-full">
              <div className="basis-3/4 max-w-[75%] ml-[8.3333333333%] box-border m-0 p-0 min-w-[0px]">
                <h2
                  ref={textRef}
                  data-parallax=""
                  className="typography-site-headline-reduced headline"
                  style={
                    isVisible
                      ? { transform: "translateY(0px)", opacity: 1 }
                      : {}
                  }
                >
                  A15&nbsp;Bionic. <strong>Fast that lasts.</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-media-wrap-chip">
          <picture className="overview-chip-a15-startframe picture loaded">
            <source
              srcSet={
                (require("./../../../assets/images/sections/EleventhSection//a15_startframe__cg8gbtked0pe_small.jpg"),
                require("./../../../assets/images/sections/EleventhSection//a15_startframe__cg8gbtked0pe_small_2x.jpg"))
              }
              media="(max-width:734px)"
            />
            <source
              srcSet={
                (require("./../../../assets/images/sections/EleventhSection//a15_startframe__cg8gbtked0pe_medium.jpg"),
                require("./../../../assets/images/sections/EleventhSection//a15_startframe__cg8gbtked0pe_medium_2x.jpg"))
              }
              media="(max-width:1068px)"
            />
            <source
              srcSet={
                (require("./../../../assets/images/sections/EleventhSection//a15_startframe__cg8gbtked0pe_large.jpg"),
                require("./../../../assets/images/sections/EleventhSection//a15_startframe__cg8gbtked0pe_large_2x.jpg"))
              }
              media="(min-width:0px)"
            />
            <img
              src={require("./../../../assets/images/sections/EleventhSection//a15_startframe__cg8gbtked0pe_large.jpg")}
              alt=""
            />
          </picture>
          <video
            className="inline-media chip-video"
            preload="none"
            // autoPlay="true"
            muted="muted"
            ref={(el) => {
              if (!el) return;
              if (el.getBoundingClientRect().top - window.innerHeight < 0) {
                el.play();
              } else {
                el.pause();
                el.currentTime = 0;
              }
            }}
            role="img"
            src={require("./../../../assets/video/eleventh/large.mp4")}
          ></video>
          <picture className="overview-chip-a15-endframe picture ">
            <source
              srcSet={
                (require("./../../../assets/images/sections/EleventhSection/a15_endframe__c37735zy57ue_small.jpg"),
                require("./../../../assets/images/sections/EleventhSection/a15_endframe__c37735zy57ue_small_2x.jpg"))
              }
              media="(max-width:734px)"
            />
            <source
              srcSet={
                (require("./../../../assets/images/sections/EleventhSection/a15_endframe__c37735zy57ue_medium.jpg"),
                require("./../../../assets/images/sections/EleventhSection/a15_endframe__c37735zy57ue_medium_2x.jpg"))
              }
              media="(max-width:1068px)"
            />
            <source
              srcSet={
                (require("./../../../assets/images/sections/EleventhSection/a15_endframe__c37735zy57ue_large.jpg"),
                require("./../../../assets/images/sections/EleventhSection/a15_endframe__c37735zy57ue_large_2x.jpg"))
              }
              media="(min-width:0px)"
            />
            <img
              src={require("./../../../assets/images/sections/EleventhSection/a15_endframe__c37735zy57ue_large.jpg")}
              alt=""
            />
          </picture>
          <picture className="overview-chip-chip-a15-hw media-static picture-chip-hw ">
            <source
              srcSet={
                (require("./../../../assets/images/sections/EleventhSection/chip_a15_hw__dpj1gy8f1sqe_small.png"),
                require("./../../../assets/images/sections/EleventhSection/chip_a15_hw__dpj1gy8f1sqe_small_2x.png"))
              }
              media="(max-width:734px)"
            />
            <source
              srcSet={
                (require("./../../../assets/images/sections/EleventhSection/chip_a15_hw__dpj1gy8f1sqe_medium.png"),
                require("./../../../assets/images/sections/EleventhSection/chip_a15_hw__dpj1gy8f1sqe_medium_2x.png"))
              }
              media="(max-width:1068px)"
            />
            <source
              srcSet={
                (require("./../../../assets/images/sections/EleventhSection/chip_a15_hw__dpj1gy8f1sqe_large.png"),
                require("./../../../assets/images/sections/EleventhSection/chip_a15_hw__dpj1gy8f1sqe_large_2x.png"))
              }
              media="(min-width:0px)"
            />
            <img
              src={require("./../../../assets/images/sections/EleventhSection/chip_a15_hw__dpj1gy8f1sqe_large.png")}
              alt=""
            />
          </picture>
        </div>
        <div className="copy-container">
          <div className="section-content">
            <div className="flex flex-wrap flex-row w-full">
              <div
                className="basis-2/4 max-w-[50%] ml-[8.3333333333%] box-border m-0 p-0 min-w-0"
                ref={textRef2}
                style={
                  isVisible2 ? { transform: "translateY(0px)", opacity: 1 } : {}
                }
              >
                <p
                  data-parallax=""
                  className="subheadline typography-site-headline-reduced "
                  ref={textRef2}
                  style={
                    isVisible2
                      ? { transform: "translateY(0px)", opacity: 1 }
                      : {}
                  }
                >
                  iPhone&nbsp;14 has the same superspeedy chip that’s in
                  iPhone&nbsp;13&nbsp;Pro.
                </p>
              </div>
              <div className="basis-[66.6666666667%] max-w-[66.6666666667%] ml-[8.3333333333%]  box-border m-0 p-0 min-w-0">
                <p
                  data-parallax=""
                  className="copy typography-site-body"
                  ref={textRef3}
                  style={
                    isVisible3
                      ? { transform: " translateY(0px)", opacity: 1 }
                      : {}
                  }
                >
                  A15&nbsp;Bionic, with a 5‑core GPU, powers all the latest
                  features and makes graphically intense games and AR apps
                  feel&nbsp;ultrafluid.
                </p>
                <p
                  data-parallax=""
                  className="copy typography-site-body"
                  style={
                    isVisible3
                      ? { transform: " translateY(0px)", opacity: 1 }
                      : {}
                  }
                >
                  An updated internal design delivers better thermal efficiency,
                  so you can stay in the action&nbsp;longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EleventhSection;
