import { useRef } from "react";
import { useIsInViewport } from "../../../helpers/helpers";

const TenthSection = () => {
  const myRef = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();
  const visibility = useIsInViewport(myRef);
  const visibility2 = useIsInViewport(myRef2);
  const visibility3 = useIsInViewport(myRef3);

  return (
    <section className="block overflow-hidden pt-[86px] pb-[135px] section-selfies">
      <div className="block deep-dive-container">
        <div className="block startframe">
          <div className="section-content">
            <h2 className="headline visuallyhidden">TrueDepth</h2>
            <picture
              className="overview-selfies-selfie-icon "
              style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
            >
              <source
                srcSet={
                  (require("./../../../assets/images/sections/tenthSection/selfie_icon__drhctsv0lx2e_small.jpg"),
                  require("./../../../assets/images/sections/tenthSection/selfie_icon__drhctsv0lx2e_small_2x.jpg"))
                }
                media="(max-width:734px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/tenthSection/selfie_icon__drhctsv0lx2e_medium.jpg"),
                  require("./../../../assets/images/sections/tenthSection/selfie_icon__drhctsv0lx2e_medium_2x.jpg"))
                }
                media="(max-width:1068px)"
              />
              <source
                srcSet={
                  (require("./../../../assets/images/sections/tenthSection/selfie_icon__drhctsv0lx2e_large.jpg"),
                  require("./../../../assets/images/sections/tenthSection/selfie_icon__drhctsv0lx2e_small_2x.jpg"))
                }
                media="(min-width:0px)"
              />
              <img
                src={require("./../../../assets/images/sections/tenthSection/selfie_icon__drhctsv0lx2e_large.jpg")}
                alt="img"
              />{" "}
            </picture>
            <p
              className="mt-10 text-center selfies-headline basis-[58.3333333333%] max-w-[58.3333333333%] large-centered medium-8 small-10 typography-site-headline-super"
              style={{
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
              }}
            >
              Selfies you’ll flip over.
            </p>
            <div className="grid mx-auto gap-x-6 selfies-grid">
              <p
                data-parallax=""
                className="pr-[30px] selfies-copy relative box-border typography-site-body small-10"
                style={
                  visibility2
                    ? { transform: "translateY(0px)", opacity: 1 }
                    : {}
                }
              >
                Snap your sharpest, most colorful close-ups and group shots,
                thanks to a new TrueDepth front camera with autofocus and a
                larger aperture.
              </p>
              <div className="mt-0 relative enhanced-media-selfies video-disabled">
                <picture className="overview-selfies-selfie-startframe ">
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/tenthSection/selfie_startframe__ex2suisayck2_small.jpg"),
                      require("./../../../assets/images/sections/tenthSection/selfie_startframe__ex2suisayck2_small_2x.jpg"))
                    }
                    media="(max-width:734px)"
                  />
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/tenthSection/selfie_startframe__ex2suisayck2_medium.jpg"),
                      require("./../../../assets/images/sections/tenthSection/selfie_startframe__ex2suisayck2_medium_2x.jpg"))
                    }
                    media="(max-width:1068px)"
                  />
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/tenthSection/selfie_startframe__ex2suisayck2_large.jpg"),
                      require("./../../../assets/images/sections/tenthSection/selfie_startframe__ex2suisayck2_large_2x.jpg"))
                    }
                    media="(min-width:0px)"
                  />
                  <img
                    src={require("./../../../assets/images/sections/tenthSection/selfie_startframe__ex2suisayck2_large.jpg")}
                    alt=""
                  />
                </picture>
                <video
                  className="selfies-video"
                  controls
                  src={require("./../../../assets/video/tenth/large.mp4")}
                ></video>
                <picture className="overview-selfies-selfie-endframe loaded">
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/tenthSection/selfie_endframe__ec8avnt8hcia_small.jpg"),
                      require("./../../../assets/images/sections/tenthSection/selfie_endframe__ec8avnt8hcia_small_2x.jpg"))
                    }
                    media="(max-width:734px)"
                  />
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/tenthSection/selfie_endframe__ec8avnt8hcia_medium.jpg"),
                      require("./../../../assets/images/sections/tenthSection/selfie_endframe__ec8avnt8hcia_medium_2x.jpg"))
                    }
                    media="(max-width:1068px)"
                  />
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/tenthSection/selfie_endframe__ec8avnt8hcia_large.jpg"),
                      require("./../../../assets/images/sections/tenthSection/selfie_endframe__ec8avnt8hcia_large_2x.jpg"))
                    }
                    media="(min-width:0px)"
                  />
                  <img
                    src={require("./../../../assets/images/sections/tenthSection/selfie_endframe__ec8avnt8hcia_large.jpg")}
                    alt=""
                  />
                </picture>
              </div>
              <div
                ref={myRef2}
                data-parallax=""
                className="stat-wrapper"
                style={
                  visibility3
                    ? { transform: "translateY(0px)", opacity: 1 }
                    : {}
                }
              >
                <figure className="stat">
                  <div className="stat-content stat-custom">
                    <span className="stat-caption">Up to</span>
                    <span className="stat-value" ref={myRef3}>
                      2x better <br className="large" />
                      low‑light&nbsp;photos
                    </span>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div
            className="flex justify-end relative mx-auto deep-dive-button-open-container deep-dive-button-container"
            ref={myRef}
          >
            <button
              className={`relative z-[1] flex items-center text-right deep-dive-button deep-dive-button-open ${
                visibility ? "show" : ""
              }`}
              style={{ "--deep-dive-button-mask-progress": 1 }}
            >
              <span className="deep-dive-button-copy typography-shared-deep-dive-cta">
                See how spectacular your selfies can look
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
      <div className="section-content">
        <div className="flex mt-[160px] gap-[70px] relative aside-container">
          <div className="pt-6 flex justify-between relative aside-item">
            <figure className="aside-image aside-image-privacy play"></figure>
            <p className="w-[326px] typography-site-callout">
              The TrueDepth camera and A15&nbsp;Bionic also power Face&nbsp;ID,
              the most secure facial authentication in a&nbsp;smartphone
            </p>
          </div>
          <div className="pt-6 flex justify-between relative aside-item">
            <figure className="aside-image aside-image-environment"></figure>
            <p className="w-[326px] typography-site-callout">
              iPhone 14 uses 100% recycled gold wire in all its cameras to
              reduce mining of precious resources{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenthSection;
