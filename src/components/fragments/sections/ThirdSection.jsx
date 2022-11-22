import { useEffect, useState } from "react";
import styles from "./Sections.module.css";

const ThirdSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [offset, setOffset] = useState(0);
  const [galleryItem, setGalleryItem] = useState([
    { id: 1, current: true, transform: "matrix(1, 0, 0, 1, 0, 0)" },
    { id: 2, current: false, transform: "matrix(1, 0, 0, 1, 0, 0)" },
  ]);

  const handleNext = (step) => {
    setActiveStep(step);
    if (step > 3) {
      setActiveStep(0);
    }
    galleryItem[step - 1].transform = "matrix(1, 0, 0, 1, 0, 0)";
    galleryItem[step].transform = "matrix(1, 0, 0, 1, -400, 0)";
  };

  const handleBack = (step) => {
    setActiveStep(step);
    if (step < 0) {
      setActiveStep(0);
      return;
    }
    galleryItem[step].transform = "matrix(1, 0, 0, 1, 0, 0)";
    galleryItem[step + 1].transform = "matrix(1, 0, 0, 1, 0, 0)";
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="bg-[#f5f5f7] mt-[98px] pt-[166px] pb-[82px] overflow-hidden section section-lock-screen">
      <div className="mx-auto w-[980px] section-content">
        <h2 className="headline visuallyhidden">Lock Screen</h2>
        <div className="flex flex-wrap flex-row w-full">
          <div className={styles.large7}>
            <p className="headline typography-site-headline-super">
              <strong
                data-parallax
                style={
                  offset >= 4400
                    ? { transform: "translateY(0px)", opacity: 1 }
                    : {}
                }
              >
                Your photo.
              </strong>{" "}
              <br />
              <strong
                data-parallax
                style={
                  offset >= 4500
                    ? { transform: "translateY(0px)", opacity: 1 }
                    : {}
                }
              >
                Your font.
              </strong>{" "}
              <br />
              <strong
                data-parallax
                style={
                  offset >= 4600
                    ? { transform: "translateY(0px)", opacity: 1 }
                    : {}
                }
              >
                Your widgets.
              </strong>{" "}
              <br />
              <strong
                data-parallax
                style={
                  offset >= 4700
                    ? { transform: "translateY(0px)", opacity: 1 }
                    : {}
                }
              >
                Your iPhone.
              </strong>
            </p>
            <p
              data-parallax
              style={
                offset >= 4800
                  ? { transform: "translateY(0px)", opacity: 1 }
                  : {}
              }
              className={`${styles.lock_screen_copy} ${styles.typography_site_body}`}
            >
              iOS 16 lets you customize your Lock Screen in fun new ways. Layer
              a photo to make it pop. Track your Activity rings. And see live
              updates from your favorite&nbsp;apps.
            </p>
          </div>
          <div className={`lock-screen-gallery ${styles.large5} `}>
            <div className="item-container">
              {galleryItem.map((item, index) => (
                <div
                  key={index}
                  className={`gallery-item ${
                    item.id === activeStep + 1 ? "current" : ""
                  }`}
                  id={`lock-screen-gallery-item-${item.id}`}
                  style={{
                    transform: item.transform,
                    opacity: 1,
                  }}
                >
                  <div className="device"></div>
                </div>
              ))}
            </div>
            <div
              data-analytics-gallery-interaction-type="paddlenav"
              className="paddlenav paddlenav-framed paddlenav-compact"
            >
              <ul>
                <li>
                  <button
                    onClick={() => handleBack(activeStep - 1)}
                    aria-label="Previous"
                    className="paddlenav-arrow paddlenav-arrow-previous"
                  ></button>
                </li>
                <li>
                  <button
                    onClick={() => handleNext(activeStep + 1)}
                    aria-label="Next"
                    className="paddlenav-arrow paddlenav-arrow-next"
                  ></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="aside-container">
          <div className="aside-item aside-item-privacy">
            <figure className="aside-image aside-image-privacy play"></figure>
            <p className="aside-copy typography-site-callout">
              App Tracking Transparency lets you decide which apps are allowed
              to track your activity — it’s just one example of how iPhone is
              designed to put you in control of what you share and who you share
              it with
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
