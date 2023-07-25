import { useRef } from "react";
import { useIsInViewport } from "../../../helpers/helpers";

const SeventhSection = () => {
  const textRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  const isVisible = useIsInViewport(textRef);
  const isVisible1 = useIsInViewport(textRef1);
  const isVisible2 = useIsInViewport(textRef2);
  return (
    <section className="block section-camera">
      <div className="camera-campacked-wrap parallax-anchor">
        <div
          className="parallax-container"
          style={{ transform: " matrix(1, 0, 0, 1, 0, 0)" }}
        >
          <div className="section-content">
            <h2 className="headline visuallyhidden">Camera</h2>
            <p className="camera-headline typography-site-headline-super headline-alignment mt-5">
              Cam-<strong>packed.</strong>
            </p>
          </div>
          <div className="enhanced-media-camera">
            <picture
              id="overview-camera-camera-hero-startframe-1"
              className="overview-camera-camera-hero-startframe loaded"
            >
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_hero_startframe_small.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_hero_startframe_small_2x.jpg"))
                }
                media="(max-width:734px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_hero_startframe_medium.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_hero_startframe_medium_2x.jpg"))
                }
                media="(max-width:1068px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_hero_startframe_large.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_hero_startframe_large_2x.jpg"))
                }
                media="(min-width:0px)"
              />
              <img
                src={require("./../../../assets/images/sections/seventhSection/camera_hero_startframe_large.jpg")}
                alt=""
              />
            </picture>
            {/* <video
              id="camera-hero"
              className="camera-hero js-will-change"
              muted=""
              playsinline=""
              preload="auto"
              src="blob:https://www.apple.com/de3f8623-73fe-4bd5-8684-9656abcab06d"
            ></video> */}
            <picture
              id="overview-camera-camera-hero-endframe-1"
              className="overview-camera-camera-hero-endframe loaded"
            >
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_hero_small.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_hero_small_2x.jpg"))
                }
                media="(max-width:734px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_hero_medium.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_hero_medium_2x.jpg"))
                }
                media="(max-width:1068px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_hero_large.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_hero_large_2x.jpg"))
                }
                media="(min-width:0px)"
              />
              <img
                src={require("./../../../assets/images/sections/seventhSection/camera_hero_large.jpg")}
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="camera-gallery section-content enhanced">
        <h3 className="headline visuallyhidden">Camera Gallery</h3>
        <p
          className="rotating-headlines-wrap"
          style={{ "--headline-height": "103px" }}
          data-start="3"
          data-end="2"
        >
          <span
            className="rotating-headline rotating-headline-1 typography-site-headline-super"
            aria-label="More detailed details."
            role="img"
          >
            <span className="inner-wrap" aria-hidden="true">
              <span className="root">More </span> <br className="small" />
              <strong>
                <span className="enhanced" data-text="detailed details.">
                  detailed details.
                </span>
              </strong>
            </span>
          </span>
          <span
            className="rotating-headline rotating-headline-2 typography-site-headline-super"
            aria-label="More colorful colors."
            role="img"
          >
            <span className="inner-wrap" aria-hidden="true">
              <span className="root">More </span> <br className="small" />
              <strong>
                <span className="enhanced" data-text="colorful colors.">
                  colorful colors.
                </span>
              </strong>
            </span>
          </span>
          <span
            className="rotating-headline rotating-headline-3 typography-site-headline-super"
            aria-label="More epic pics."
            role="img"
          >
            <span className="inner-wrap" aria-hidden="true">
              <span className="root">More </span> <br className="small" />
              <strong>
                <span className="enhanced" data-text="epic pics.">
                  epic pics.
                </span>
              </strong>
            </span>
          </span>
        </p>
        <div className="main-group-picture-wrap">
          <div className="picture-wrap basis-full max-w-full md:basis-3/6 md:max-w-[50%] medium-up-crop-left">
            <picture
              id="overview-camera-gallery-camera-main-1"
              className="overview-camera-gallery-camera-main picture loaded"
            >
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_main_small.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_main_small_2x.jpg"))
                }
                media="(max-width:734px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_main_medium.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_main_medium_2x.jpg"))
                }
                media="(max-width:1068px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_main_large.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_main_large_2x.jpg"))
                }
                media="(min-width:0px)"
              />
              <img
                src={require("./../../../assets/images/sections/seventhSection/camera_main_large.jpg")}
                alt="A photo of two woman in brightly colored dresses, taken with the Main camera."
              />
            </picture>
          </div>
          <div className="picture-wrap basis-full max-w-full md:basis-3/6 md:max-w-[50%]">
            <picture
              id="overview-camera-gallery-camera-low-light-1"
              className="overview-camera-gallery-camera-low-light picture loaded"
            >
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_low_light_small.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_low_light_small_2x.jpg"))
                }
                media="(max-width:734px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_low_light_medium.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_low_light_medium_2x.jpg"))
                }
                media="(max-width:1068px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/seventhSection/camera_low_light_large.jpg"),
                  require("./../../../assets/images/sections/seventhSection/camera_low_light_large_2x.jpg"))
                }
                media="(min-width:0px)"
              />
              <img
                src={require("./../../../assets/images/sections/seventhSection/camera_low_light_large.jpg")}
                alt="A low-light photo of a woman in red dress posing against a rocky backdrop, taken with the Main camera."
              />
            </picture>
          </div>
        </div>
        <div className="content-description">
          <p
            data-parallax=""
            className="content-title typography-site-body  basis-full max-w-full md:basis-3/6 md:max-w-[50%]"
            style={
              isVisible ? { transform: "translateY(0px)", opacity: 1 } : {}
            }
          >
            A new Main camera and improved image processing let you capture even
            more sensational shots in all kinds of light — especially
            low&nbsp;light.
          </p>
          <div
            ref={textRef}
            className="content-stats stats-wrap content-title typography-site-body  basis-full max-w-full md:basis-3/6 md:max-w-[50%]"
          >
            <div
              data-parallax='{"type":"secondLarge"}'
              className="stat-wrapper"
              style={
                isVisible1 ? { transform: "translateY(0px)", opacity: 1 } : {}
              }
            >
              <figure className="stat">
                <div className="stat-content stat-custom">
                  <span className="stat-caption">Up to</span>
                  <span className="stat-value">
                    2.5x better low‑light&nbsp;photos
                  </span>
                  <span className="stat-caption">on the Main camera</span>
                </div>
              </figure>
            </div>
          </div>

          <div
            ref={textRef1}
            className="content-stats stats-wrap stats-wrap-ultra content-title typography-site-body  basis-full max-w-full md:basis-3/6 md:max-w-[50%]"
          >
            <div
              data-parallax='{"type":"camStatTwo"}'
              className="stat-wrapper"
              style={
                isVisible2 ? { transform: "translateY(0px)", opacity: 1 } : {}
              }
            >
              <figure className="stat">
                <div className="stat-content stat-custom">
                  <span className="stat-caption">Up to</span>
                  <span className="stat-value">
                    2x better low‑light&nbsp;photos
                  </span>
                  <span className="stat-caption" ref={textRef2}>
                    on the Ultra Wide camera
                  </span>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
