import { useEffect, useState } from "react";
import styles from "./Sections.module.css";

const FourthSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="section section-safety block">
      <h2 className="visuallyhidden">Safety Features</h2>
      <div
        className="safety-sos-section"
        style={{
          "--safety-intro-border-width": "100px",
          "--safety-intro-subhead-offset": "433px",
          "--safety-intro-min-height": "1333px",
          "--safety-intro-scale-start": 1,
          "--safety-intro-scale-end": 1,
          "--safety-intro-internal-offset": -150,
          "--safety-intro-border-progress": 1,
          "--safety-intro-button-offset-x": "674.5px",
        }}
      >
        <div className="sticky-container">
          <div className="sticky">
            <div className="sticky-overflow sos-layout">
              <div className="hero-group">
                <div
                  className="headline section-content"
                  style={{ transform: "matrix(1, 0, 0, 1, 0, 0)", opacity: 1 }}
                >
                  <p
                    className={`typography-site-headline-super ${styles.large9}`}
                  >
                    Vital new safety features we hope you’ll never need.
                  </p>
                </div>
                <div
                  className="media media-video-container"
                  style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                >
                  <div className="media-position-container video-safety">
                    <div className="media-container loaded ended">
                      <picture
                        id="overview-safety-safety-startframe-1"
                        className="overview-safety-safety-startframe startframe loaded"
                      >
                        <source
                          srcSet={
                            (require("./../../../assets/images/sections/fourthSection/safety_startframe_small.jpg"),
                            require("./../../../assets/images/sections/fourthSection/safety_startframe_small_2x.jpg"))
                          }
                          media="(max-width:734px)"
                        />
                        <source
                          srcSet={
                            (require("./../../../assets/images/sections/fourthSection/safety_startframe_medium.jpg"),
                            require("./../../../assets/images/sections/fourthSection/safety_startframe_medium_2x.jpg"))
                          }
                          media="(max-width:1068px)"
                        />
                        <source
                          srcSet={
                            (require("./../../../assets/images/sections/fourthSection/safety_startframe_large.jpg"),
                            require("./../../../assets/images/sections/fourthSection/safety_startframe_large_2x.jpg"))
                          }
                          media="(min-width:0px)"
                        />
                        <img
                          src={require("./../../../assets/images/sections/fourthSection/safety_startframe_large.jpg")}
                          alt="safety inline-media image"
                        />
                      </picture>
                      <video
                        id="safety-video"
                        preload="none"
                        src={require("./../../../assets/video/large.mp4")}
                      ></video>
                      <picture
                        id="overview-safety-safety-endframe-1"
                        className="overview-safety-safety-endframe endframe loaded"
                      >
                        <source
                          srcSet={
                            (require("./../../../assets/images/sections/fourthSection/safety_endframe_small.jpg"),
                            require("./../../../assets/images/sections/fourthSection/safety_endframe_small_2x.jpg"))
                          }
                          media="(max-width:734px)"
                        />
                        <source
                          srcSet={
                            (require("./../../../assets/images/sections/fourthSection/safety_endframe_medium.jpg"),
                            require("./../../../assets/images/sections/fourthSection/safety_endframe_medium_2x.jpg"))
                          }
                          media="(max-width:1068px)"
                        />
                        <source
                          srcSet={
                            (require("./../../../assets/images/sections/fourthSection/safety_endframe_large.jpg"),
                            require("./../../../assets/images/sections/fourthSection/safety_endframe_large_2x.jpg"))
                          }
                          media="(min-width:0px)"
                        />
                        <img
                          src={require("./../../../assets/images/sections/fourthSection/safety_endframe_large.jpg")}
                          alt="safety inline-media image"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="borders">
                    <div className="border"></div>
                    <div className="border end"></div>
                  </div>
                </div>
                <div
                  className="play-pause-position"
                  style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                >
                  <div className="inline-media-ui inline-media-ui-button loaded paused">
                    <button
                      className="play-pause-button disabled"
                      data-inline-media-control="PlayPause"
                      data-aria-playing="pause safety animation"
                      data-aria-paused="play safety animation"
                      data-aria-ended="replay safety animation"
                      data-analytics-title-play="play safety animation"
                      data-analytics-click-play="prop3:play safety animation"
                      data-analytics-title-pause="pause safety animation"
                      data-analytics-click-pause="prop3:pause safety animation"
                      data-analytics-title-replay="replay safety animation"
                      data-analytics-click-replay="prop3:replay safety animation"
                      data-analytics-intrapage-link=""
                      aria-label="play safety animation"
                      data-analytics-click="prop3:play safety animation"
                      data-analytics-title="play safety animation"
                    ></button>
                  </div>
                </div>
              </div>
              <div
                className="subheadline-group section-content"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 100)", opacity: 0 }}
              >
                <p
                  className={`subheadline column ${styles.large9} typography-site-headline-elevated`}
                >
                  Emergency SOS via&nbsp;satellite.
                </p>
              </div>
              <picture
                id="overview-safety-safety-endframe-2"
                className="overview-safety-safety-endframe image-media-fallback"
              >
                <source
                  data-empty=""
                  srcSet="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  media="(min-width:0px)"
                />
                <source
                  srcSet={
                    (require("./../../../assets/images/sections/fourthSection/safety_endframe_small.jpg"),
                    require("./../../../assets/images/sections/fourthSection/safety_endframe_small_2x.jpg"))
                  }
                  media="(max-width:734px)"
                />
                <source
                  srcSet={
                    (require("./../../../assets/images/sections/fourthSection/safety_endframe_medium.jpg"),
                    require("./../../../assets/images/sections/fourthSection/safety_endframe_medium_2x.jpg"))
                  }
                  media="(max-width:1068px)"
                />
                <source
                  srcSet={
                    (require("./../../../assets/images/sections/fourthSection/safety_endframe_large.jpg"),
                    require("./../../../assets/images/sections/fourthSection/safety_endframe_large_2x.jpg"))
                  }
                  media="(min-width:0px)"
                />
                <img
                  src={require("./../../../assets/images/sections/fourthSection/safety_endframe_large.jpg")}
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="body-group section-content">
          <p
            data-parallax=""
            className={`body-headline ${styles.large9} copy typography-site-headline-elevated`}
            style={
              offset >= 7600 ? { transform: "translateY(0px)", opacity: 1 } : {}
            }
          >
            Peace of mind when you’re off the grid.
          </p>
          <p
            data-parallax=""
            style={
              offset >= 7800 ? { transform: "translateY(0px)", opacity: 1 } : {}
            }
            className={`body ${styles.large8}  typography-site-body`}
          >
            If you don’t have cell service or Wi‑Fi, iPhone lets you text
            emergency services over&nbsp;satellite.
            <sup className="footnote footnote-number">
              <a href="#footnote-4" aria-label="Footnote 2" data-modal-close="">
                2
              </a>
            </sup>
          </p>
        </div>
        <div className="vertical-type deep-dive-container">
          <div className="startframe">
            <div className="deep-dive-button-open-container deep-dive-button-container">
              <button
                className="deep-dive-button deep-dive-button-open show"
                data-modal-open="deep-dive-sos"
                data-analytics-title="open side scroll | text over satellite"
                data-analytics-click="prop3:open side scroll | text over satellite"
                data-analytics-intrapage-link=""
                style={{ "--deep-dive-button-mask-progress": 1 }}
              >
                <span className="deep-dive-button-copy typography-shared-deep-dive-cta">
                  See how it works and what makes it all&nbsp;possible
                </span>
                <span className="deep-dive-button-image">
                  <svg
                    className="deep-dive-button-image-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                  >
                    <path
                      className="arrow"
                      d="M45.79,32.24l0,.12s0,.1,0,.14a.91.91,0,0,1-.07.14.53.53,0,0,1-.06.1,1.2,1.2,0,0,1-.17.21l-9.59,9.6a1.4,1.4,0,0,1-2,0,1.38,1.38,0,0,1,0-2l7.21-7.22H20a1.39,1.39,0,1,1,0-2.78H41.06l-7.21-7.22a1.38,1.38,0,0,1,0-2,1.4,1.4,0,0,1,2,0L45.41,31a1.84,1.84,0,0,1,.17.22.53.53,0,0,1,.06.1.91.91,0,0,1,.07.14s0,.09,0,.14,0,.07,0,.12a1.23,1.23,0,0,1,0,.54Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="safety-crash-detection">
        <div className="deep-dive-container">
          <div className="startframe">
            <div className="section-content">
              <div className="flex flex-wrap flex-row w-full">
                <div className={`column-copy ${styles.large6} small-12 column`}>
                  <h3
                    data-parallax=""
                    className="typography-site-headline-elevated headline"
                    style={
                      offset >= 8400
                        ? { transform: "translateY(0px)", opacity: 1 }
                        : {}
                    }
                  >
                    <span className="wrapper">Crash Detection</span> calls for
                    help when you can’t.
                  </h3>
                  <p
                    data-parallax=""
                    className="typography-site-body copy"
                    style={
                      offset >= 8700
                        ? { transform: "translateY(0px)", opacity: 1 }
                        : {}
                    }
                  >
                    iPhone&nbsp;14 can detect a <br className="medium" />
                    severe car crash, then call 911 and notify your
                    emergency&nbsp;contacts.
                    <sup className="footnote footnote-number">
                      <a
                        href="#footnote-5"
                        aria-label="Footnote 3"
                        data-modal-close=""
                      >
                        3
                      </a>
                    </sup>
                  </p>
                </div>
                <div
                  className={`column-hardware ${styles.large6} small-12 column`}
                >
                  <picture
                    id="overview-safety-crash-detection-1"
                    className="overview-safety-crash-detection loaded"
                  >
                    <source
                      srcSet={
                        (require("./../../../assets/images/sections/fourthSection/crash_detection_small.jpg"),
                        require("./../../../assets/images/sections/fourthSection/crash_detection_small_2x.jpg"))
                      }
                      media="(max-width:734px)"
                    />
                    <source
                      srcSet={
                        (require("./../../../assets/images/sections/fourthSection/crash_detection_medium.jpg"),
                        require("./../../../assets/images/sections/fourthSection/crash_detection_medium_2x.jpg"))
                      }
                      media="(max-width:1068px)"
                    />
                    <source
                      srcSet={
                        (require("./../../../assets/images/sections/fourthSection/crash_detection_large.jpg"),
                        require("./../../../assets/images/sections/fourthSection/crash_detection_large_2x.jpg"))
                      }
                      media="(min-width:0px)"
                    />
                    <img
                      src={require("./../../../assets/images/sections/fourthSection/crash_detection_large.jpg")}
                      alt=""
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="deep-dive-button-open-container deep-dive-button-container">
              <button
                className="deep-dive-button deep-dive-button-open show"
                data-modal-open="deep-dive-crash-detection"
                data-analytics-title="open side scroll | crash detection"
                data-analytics-click="prop3:open side scroll | crash detection"
                data-analytics-intrapage-link=""
                style={{ "--deep-dive-button-mask-progress": 1 }}
              >
                <span className="deep-dive-button-copy typography-shared-deep-dive-cta">
                  See how the tech in iPhone&nbsp;14 recognizes a severe car
                  crash
                </span>
                <span className="deep-dive-button-image">
                  <svg
                    className="deep-dive-button-image-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                  >
                    <path
                      className="arrow"
                      d="M45.79,32.24l0,.12s0,.1,0,.14a.91.91,0,0,1-.07.14.53.53,0,0,1-.06.1,1.2,1.2,0,0,1-.17.21l-9.59,9.6a1.4,1.4,0,0,1-2,0,1.38,1.38,0,0,1,0-2l7.21-7.22H20a1.39,1.39,0,1,1,0-2.78H41.06l-7.21-7.22a1.38,1.38,0,0,1,0-2,1.4,1.4,0,0,1,2,0L45.41,31a1.84,1.84,0,0,1,.17.22.53.53,0,0,1,.06.1.91.91,0,0,1,.07.14s0,.09,0,.14,0,.07,0,.12a1.23,1.23,0,0,1,0,.54Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
