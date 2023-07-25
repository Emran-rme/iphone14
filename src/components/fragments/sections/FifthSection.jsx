import { useEffect, useRef, useState } from "react";
import { useIsInViewport } from "../../../helpers/helpers";
import styles from "./Sections.module.css";

const FifthSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const battryRef = useRef();
  const isVisible = useIsInViewport(battryRef);
  const battryRef2 = useRef();
  const isVisible2 = useIsInViewport(battryRef2);
  return (
    <section className="section section-battery pt-[84px] pb-[66px] w-full overflow-hidden">
      <div className="section-content">
        <h2 className="visuallyhidden">Battery</h2>
        <div className="visuallyhidden">A huge Plus for battery life.</div>
        <div className="flex flex-row flex-wrap w-full">
          <div className={`column column-first ml-0 `}>
            <span className="start typography-site-headline-super">
              A huge{" "}
            </span>
          </div>
          <div
            ref={battryRef}
            className={`column column-second ${styles.large10} large-center medium-offset-2 small-offset-0`}
          >
            <span
              className="plus"
              style={isVisible ? { "--wipe": "0%" } : { "--wipe": "100%" }}
            >
              Plus{" "}
            </span>
          </div>
          <div
            ref={battryRef2}
            className={`column column-third basis-[91.6666666667%] max-w-[91.6666666667%] ml-[8.3333333333%] md:basis-[66.6666666667%] md:max-w-[66.6666666667%] md:ml-[33.3333333333%]  large-center `}
          >
            <span className="end typography-site-headline-super">
              for
              <div
                className="battery "
                style={
                  isVisible2
                    ? { transform: " matrix(1, 0, 0, 1, 0, 0)" }
                    : { transform: " matrix(0, 0, 0, 1, 0, 0)" }
                }
              >
                <div className="scaler" style={{ transform: " scale(1, 1)" }}>
                  <picture
                    id="overview-battery-battery-static-1"
                    className="overview-battery-battery-static loaded"
                  >
                    <source
                      srcSet={
                        (require("./../../../assets/images/sections/fifthSection/battery_static_small.jpg"),
                        require("./../../../assets/images/sections/fifthSection/battery_static_small_2x.jpg"))
                      }
                      media="(max-width:734px)"
                    />
                    <source
                      srcSet={
                        (require("./../../../assets/images/sections/fifthSection/battery_static_medium.jpg"),
                        require("./../../../assets/images/sections/fifthSection/battery_static_medium_2x.jpg"))
                      }
                      media="(max-width:1068px)"
                    />
                    <source
                      srcSet={
                        (require("./../../../assets/images/sections/fifthSection/battery_static_large.jpg"),
                        require("./../../../assets/images/sections/fifthSection/battery_static_large_2x.jpg"))
                      }
                      media="(min-width:0px)"
                    />
                    <img
                      src={require("./../../../assets/images/sections/fifthSection/battery_static_large.jpg")}
                      alt=""
                    />
                  </picture>
                </div>
              </div>
              <picture
                id="overview-battery-battery-1"
                className="overview-battery-battery battery-outline loaded"
              >
                <source
                  srcSet={
                    (require("./../../../assets/images/sections/fifthSection/battery_small.png"),
                    require("./../../../assets/images/sections/fifthSection/battery_small_2x.png"))
                  }
                  media="(max-width:734px)"
                />
                <source
                  srcSet={
                    (require("./../../../assets/images/sections/fifthSection/battery_medium.png"),
                    require("./../../../assets/images/sections/fifthSection/battery_medium_2x.png"))
                  }
                  media="(max-width:1068px)"
                />
                <source
                  srcSet={
                    (require("./../../../assets/images/sections/fifthSection/battery_large.png"),
                    require("./../../../assets/images/sections/fifthSection/battery_large_2x.png"))
                  }
                  media="(min-width:0px)"
                />
                <img
                  src={require("./../../../assets/images/sections/fifthSection/battery_large.png")}
                  alt=""
                />
              </picture>
            </span>
          </div>
        </div>
        <p
          data-parallax=""
          style={{ opacity: 0.5 }}
          className="column basis-full max-w-full md:basis-[70%] md:max-w-[70%] typography-site-headline-reduced large-centered"
        >
          Get our best battery life ever on iPhone&nbsp;14&nbsp;Plus.{" "}
          <br className="large-hide small-show" />
          And awesome all-day battery life on iPhone&nbsp;14.
        </p>
        <div className="row-stats flex flex-wrap flex-row w-full ">
          <div
            data-parallax=""
            className="column basis-full max-w-full md:basis-4/12 md:max-w-[33.3333333%] flex justify-center"
            style={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <figure className="stat">
              <div className="stat-content stat-battery">
                <span className="stat-caption">Up to</span>
                <span className="stat-value">
                  26 <br className="medium" />
                  hours
                </span>
                <span className="stat-caption">
                  video playback on <br className="small-hide" />{" "}
                  iPhone&nbsp;14&nbsp;Plus
                  <sup className="footnote footnote-number">
                    <a
                      href="#footnote-6"
                      aria-label="Footnote 4"
                      data-modal-close=""
                    >
                      4
                    </a>
                  </sup>
                </span>
              </div>
            </figure>
          </div>
          <div
            data-parallax=""
            className="column basis-full max-w-full md:basis-4/12 md:max-w-[33.3333333%] flex justify-center"
            style={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <figure className="stat">
              <div className="stat-content stat-battery">
                <span className="stat-caption">Up to</span>
                <span className="stat-value">
                  26 <br className="medium" />
                  hours
                </span>
                <span className="stat-caption">
                  video playback on <br className="small-hide" />{" "}
                  iPhone&nbsp;14&nbsp;Plus
                  <sup className="footnote footnote-number">
                    <a
                      href="#footnote-6"
                      aria-label="Footnote 4"
                      data-modal-close=""
                    >
                      4
                    </a>
                  </sup>
                </span>
              </div>
            </figure>
          </div>
          <div
            data-parallax=""
            className="column basis-full max-w-full md:basis-4/12 md:max-w-[33.3333333%] flex justify-center"
            style={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <figure className="stat">
              <div className="stat-content stat-battery">
                <span className="stat-caption">Up to</span>
                <span className="stat-value">
                  26 <br className="medium" />
                  hours
                </span>
                <span className="stat-caption">
                  video playback on <br className="small-hide" />{" "}
                  iPhone&nbsp;14&nbsp;Plus
                  <sup className="footnote footnote-number">
                    <a
                      href="#footnote-6"
                      aria-label="Footnote 4"
                      data-modal-close=""
                    >
                      4
                    </a>
                  </sup>
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
