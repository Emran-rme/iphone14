import { Link } from "react-router-dom";

const Iphone14Pro = () => {
  return (
    <>
      <div className="iphone-14-pro device pb-[35px] border-b border-[#d2d2d7] mb-0">
        <div className="block">
          <div className="min-h-[257px] flex justify-end items-center flex-col mb-[22px]">
            <Link to="/">
              <figure className="image-compare-iphone-14-pro" />
            </Link>
          </div>
        </div>
        <div className="mx-auto flex justify-end items-center flex-col mb-[35px]">
          <figure className="image-swatch-iphone-14-pro" />
        </div>
        <div className="relative z-[1] flex flex-col items-center device-content">
          <h3>
            <span className="violator-frameless violator-frameless-reduced">
              New
            </span>
            <span className="visuallyhidden">iPhone 14 Pro</span>
            <figure className="image-logo image-logo-iphone-14-pro" />
          </h3>
          <p className="typography-body-tight tout">
            The&nbsp;ultimate iPhone.
          </p>
          <p className="typography-body-reduced pricing has-dynamic-content">
            <span>From $999</span>
          </p>
          <Link to="/o" className="button button-reduced button-shop">
            Buy
          </Link>
          <div className="pt-[11px]">
            <p className="typography-body-reduced">
              <Link to="#" className="text-[#06c] hover:underline ">
                <span>Learn more</span>
                <span className="fa fa-chevron-right ml-2 text-xs"></span>
              </Link>
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full pt-1 flex-col iphone-14-pro display">
        <h4 className="typography-compare-size mb-[2px]">6.7″ or 6.1″</h4>
        <p className="typography-body-reduced box-border m-0 p-0 min-w-0 ">
          Super Retina XDR <br className="hidden" />
          display
          <sup className="footnote footnote-number">
            <Link to="#footnote-8">6</Link>
          </sup>
        </p>
        <p className="typography-body-reduced pt-[0.8em]">
          ProMotion technology
        </p>
        <p className="typography-body-reduced pt-[0.8em]">Always-On display</p>
      </div>
      <div className="flex flex-wrap w-full pt-1 flex-col iphone-14-pro dynamic-island">
        <figure className="image-icon-dynamic-island mx-auto mb-2" />
        <p className="typography-body-reduced box-border m-0 p-0 min-w-0 ">
          Dynamic Island
        </p>
        <p className="typography-body-reduced text-[#6e6e73] box-border m-0 p-0 min-w-0">
          A new way to <br />
          interact with iPhone
        </p>
      </div>
      <div className="flex flex-wrap w-full pt-1 flex-col iphone-14-pro sos">
        <figure className="image-icon-sos mx-auto mb-2" />
        <p className="typography-body-reduced box-border m-0 p-0 min-w-0  ">
          Emergency SOS <br className="hidden" />
          via satellite
          <sup className="footnote footnote-number">
            <Link to="#footnote-4">2</Link>
          </sup>
        </p>
        <p className="typography-body-reduced mt-[0.8em]">Emergency SOS</p>
        <p className="typography-body-reduced mt-[0.8em]">Crash Detection</p>
      </div>
      <div className="flex flex-wrap w-full pt-1 flex-col iphone-14-pro camera">
        <figure className="image-icon-14-pro-camera mx-auto mb-2" />
        <p className="typography-body-reduced box-border m-0 p-0 min-w-0">
          Pro camera <br className="hidden" />
          system
        </p>
        <p className="typography-body-reduced mt-[0.8em]">Emergency SOS</p>
        <p className="typography-body-reduced text-[#6e6e73] box-border m-0 p-0 min-w-0">
          48MP Main <span>Ultra Wide</span>{" "}
          <span className="block">Telephoto</span> Photonic Engine for
          incredible detail and color <br />
          Autofocus <br className="hidden" />
          on TrueDepth <br />
          front camera
        </p>
      </div>
      <div className="flex flex-wrap w-full pt-1 flex-col iphone-14-pro battery">
        <figure className="image-icon-battery mx-auto mb-2" />
        <p className="typography-body-reduced  box-border m-0 p-0 min-w-0">
          Up to 29 hours <br />
          video playback
          <sup className="footnote footnote-number">
            <Link to="#footnote-6">4</Link>
          </sup>
        </p>
      </div>
      <div className="flex flex-wrap w-full pt-1 flex-col iphone-14-pro chip">
        <figure className="image-icon-a16 mx-auto mb-2" />
        <p className="typography-body-reduced  box-border m-0 p-0 min-w-0">
          A16 Bionic chip
        </p>
      </div>
      <div className="flex flex-wrap w-full pt-1 flex-col iphone-14-pro authentication">
        <figure className="image-icon-face-id mx-auto mb-2" />
        <p className="typography-body-reduced  box-border m-0 p-0 min-w-0">
          Face ID
        </p>
      </div>
      <div className="flex flex-wrap w-full pt-1 flex-col iphone-14-pro cellular">
        <figure className="image-icon-5g mx-auto mb-2" />
        <p className="typography-body-reduced  box-border m-0 p-0 min-w-0">
          Superfast 5G cellular
          <sup className="footnote footnote-number">
            <Link to="#footnote-11">9</Link>
          </sup>
        </p>
      </div>
    </>
  );
};

export default Iphone14Pro;
