import { Link } from "react-router-dom";

const TwelfthSection = () => {
  return (
    <section className="block section-sim">
      <div className="pt-14 section-wrapper with-link">
        <h2 className="visuallyhidden">eSIM</h2>
        <div className="section-content">
          <div className="flex flex-wrap flex-row w-full">
            <div className="basis-[83.3333333333%] max-w-[83.3333333333%] ml-[8.3333333333%] md:ml-0 md:basis-1/4 md:max-w-[25%] box-border m-0 p-0 min-w-0">
              <div className="icon icon-sim"></div>
              <p className="typography-site-headline sim-headline">
                So long, <br className="large-hide small-show" />
                SIM tray.
              </p>
            </div>
            <div className="pt-[94px] md:basis-[58.3333333333%] md:max-w-[58.3333333333%] ml-[16.6666666667%] box-border m-0 p-0 min-w-0">
              <p className="typography-site-body">
                eSIM makes things simple. It’s an industry-standard technology
                that lets you activate your new iPhone or add carriers
                digitally. So you’re calling and texting in no&nbsp;time.
                <sup className="footnote footnote-number">
                  <Link to="#footnote-9">7</Link>
                </sup>
              </p>
              <p className="typography-site-body">
                And unlike a physical card, eSIM can’t be removed if your iPhone
                is lost or&nbsp;stolen.
              </p>
              <div className="stat-wrapper">
                <figure className="stat stat-stat">
                  <div className="stat-content stat-custom">
                    <span className="stat-caption">eSIM lets you have</span>
                    <span className="stat-value">
                      multiple phone <br className="large-hide small-show" />
                      numbers and data&nbsp;plans
                    </span>
                    <span className="stat-caption">on one phone</span>
                  </div>
                </figure>
                <figure className="stat stat-stat2">
                  <div className="stat-content stat-custom">
                    <span className="stat-value">
                      Traveling is a&nbsp;breeze
                    </span>
                    <span className="stat-caption">
                      Before you go, activate an eSIM for the{" "}
                      <Link to="3">country or region</Link> you’re&nbsp;visiting
                    </span>
                  </div>
                </figure>
                <div className="stat-link">
                  <p className="typography-stat-link">
                    <Link to="3" className="icon-wrapper">
                      <span className="icon-copy">
                        Learn more
                        <span className="visuallyhidden">
                          {" "}
                          about traveling with eSIM
                        </span>
                      </span>
                      <span className="icon icon-after more"></span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwelfthSection;
