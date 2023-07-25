import { useRef } from "react";
import { useIsInViewport } from "../../../helpers/helpers";
import styles from "./Sections.module.css";

const SixthSection = () => {
  const textRef = useRef();
  const isVisible = useIsInViewport(textRef);
  const textRef2 = useRef();
  const isVisible2 = useIsInViewport(textRef2);
  return (
    <section className="section section-display overflow-hidden">
      <div className="section-background">
        <div
          className="parallax-container"
          style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
        >
          <div className="section-content section-header">
            <h2 className="headline visuallyhidden">Display</h2>
            <div className="flex flex-wrap flex-row w-full">
              <div className={`column ${styles.large12} large-centered`}>
                <p
                  data-parallax=""
                  className="typography-site-headline-super"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  21% more screen.
                </p>
                <p
                  data-parallax=""
                  className="headline-two typography-site-headline-super"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <strong>Now that’s big.</strong>
                </p>
              </div>
              <div
                className={`column column-copy ${styles.large8} medium-11 large-centered`}
              >
                <p
                  data-parallax=""
                  className="typography-site-headline-reduced"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  iPhone&nbsp;14&nbsp;Plus has a supersized
                  Super&nbsp;Retina&nbsp;XDR display.
                  <sup className="footnote footnote-number">
                    <a
                      href="#footnote-8"
                      aria-label="Footnote 6"
                      data-modal-close=""
                    >
                      6
                    </a>
                  </sup>
                </p>
              </div>
            </div>
            <div className="image-wrapper parallax-anchor">
              <picture
                id="overview-display-xdr-display-1"
                className="overview-display-xdr-display loaded"
              >
                <source
                  srcSet={
                    (require("./../../../assets/images/sections/sixthSection/xdr_display_small.jpg"),
                    require("./../../../assets/images/sections/sixthSection/xdr_display_small_2x.jpg"))
                  }
                  media="(max-width:734px)"
                />
                <source
                  srcSet={
                    (require("./../../../assets/images/sections/sixthSection/xdr_display_medium.jpg"),
                    require("./../../../assets/images/sections/sixthSection/xdr_display_medium_2x.jpg"))
                  }
                  media="(max-width:1068px)"
                />
                <source
                  srcSet={
                    (require("./../../../assets/images/sections/sixthSection/xdr_display_large.jpg"),
                    require("./../../../assets/images/sections/sixthSection/xdr_display_large_2x.jpg"))
                  }
                  media="(min-width:0px)"
                />
                <img
                  src={require("./../../../assets/images/sections/sixthSection/xdr_display_large.jpg")}
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content section-copy">
        <div className="flex flex-wrap flex-row w-full" ref={textRef}>
          <div
            data-parallax=""
            className="column column-oled  basis-full max-w-full md:basis-1/3 md:max-w-[33.3333333%]"
            style={
              isVisible ? { transform: "translateY(0px)", opacity: 1 } : {}
            }
          >
            <p className="typography-site-body">
              <strong>OLED&nbsp;technology</strong> delivers incredible contrast
              for bright whites and true&nbsp;blacks.
            </p>
          </div>
          <div
            data-parallax
            className="column column-resolution basis-full max-w-full md:basis-1/3 md:max-w-[33.3333333%]"
            style={
              isVisible ? { transform: "translateY(0px)", opacity: 1 } : {}
            }
          >
            <p className="typography-site-body">
              <strong>High resolution and color accuracy</strong> make
              everything look sharp and true to&nbsp;life.
            </p>
          </div>
          <div
            data-parallax
            className="column column-color basis-full max-w-full md:basis-1/3 md:max-w-[33.3333333%]"
            style={
              isVisible ? { transform: "translateY(0px)", opacity: 1 } : {}
            }
          >
            <p className="typography-site-body">
              <strong>True&nbsp;Tone</strong> makes your display easier on the
              eyes <br className="small" />
              by adjusting to the ambient&nbsp;light.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-row w-full">
          <div
            ref={textRef2}
            className="column basis-full max-w-full mt-8 md:basis-[58.3333333333%] md:max-w-[58.3333333333%]"
            data-parallax
            style={
              isVisible2 ? { transform: "translateY(0px)", opacity: 1 } : {}
            }
          >
            <picture
              id="overview-display-xdr-display-icon-1"
              className="overview-display-xdr-display-icon loaded"
            >
              <source
                srcSet={
                  (require("./../../../assets/images/sections/sixthSection/display_icon_small.jpg"),
                  require("./../../../assets/images/sections/sixthSection/display_icon_small_2x.jpg"))
                }
                media="(max-width:734px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/sixthSection/display_icon_large.jpg"),
                  require("./../../../assets/images/sections/sixthSection/display_icon_large_2x.jpg"))
                }
                media="(min-width:0px)"
              />
              <img
                src={require("./../../../assets/images/sections/sixthSection/display_icon_large.jpg")}
                alt=""
              />
            </picture>
            <p className="callout typography-site-callout">
              <strong>Looking for an even more advanced&nbsp;display?</strong>{" "}
              iPhone&nbsp;14&nbsp;Pro has Dynamic&nbsp;Island, a magical new way
              to interact with iPhone. And an Always‑On display, which keeps
              your important info at a&nbsp;glance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
