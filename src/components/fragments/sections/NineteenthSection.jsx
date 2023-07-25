import { Link } from "react-router-dom";

const NineteenthSection = () => {
  return (
    <section className="pt-[160px] pb-[135px] buystrip-hero block">
      <div className="section-content">
        <div className="grid mx-auto gap-x-6 gap-y-6 px-6 grid-cols-12 ">
          <div className="trade-in text-center col-span-12 md:col-span-6 relative box-border">
            <h3 className="max-w-[12em] mx-auto typography-buystrip-hero-subhead">
              Trade in your smartphone for credit.
            </h3>
            <p className="max-w-[19em] mx-auto typography-buystrip-hero-copy mt-[0.8em]">
              <span>
                With Apple&nbsp;Trade&nbsp;In, you can get credit toward a new
                iPhone when you trade in an eligible smartphone.
                <sup className="footnote footnote-number">
                  <Link to="#footnote-13">11</Link>
                </sup>{" "}
                It’s good for you and the planet.
              </span>
            </p>
            <p className="typography-buystrip-hero-copy mt-[0.8em]">
              <Link to="#" className="text-[#06c] hover:underline ">
                <span>Learn more</span>
                <span className="fa fa-chevron-right ml-2 text-xs"></span>
              </Link>
            </p>
          </div>
          <div className="upgrade text-center col-span-12 md:col-span-6 relative box-border">
            <h3 className="max-w-[13em] mx-auto typography-buystrip-hero-subhead">
              The easiest way to upgrade to the latest iPhone.
            </h3>
            <p className="max-w-[21em] mx-auto typography-buystrip-hero-copy mt-[0.8em]">
              <span>
                Join the iPhone Upgrade Program to get the latest iPhone every
                year, low monthly payments, and AppleCare+.
                <sup className="footnote footnote-number">
                  <Link to="#footnote-13">12</Link>
                </sup>
              </span>
            </p>
            <p className="typography-buystrip-hero-copy mt-[0.8em]">
              <Link to="#" className="text-[#06c] hover:underline ">
                <span>Learn more</span>
                <span className="fa fa-chevron-right ml-2 text-xs"></span>
              </Link>
            </p>
          </div>
          <div className="help text-center col-span-12 md:col-span-6 relative box-border">
            <h3 className="max-w-[19em] mx-auto typography-buystrip-hero-subhead">
              Still have questions? Just ask.
            </h3>
            <p className="max-w-[23em] mx-auto typography-buystrip-hero-copy mt-[0.8em]">
              You won’t find a better place to buy iPhone. We know about
              carriers, payment options, and more. And we make it easy to
              understand.
            </p>
            <p className="typography-buystrip-hero-copy mt-[0.8em]">
              <Link to="#" className="text-[#06c] hover:underline ">
                <span>Learn more</span>
                <span className="fa fa-chevron-right ml-2 text-xs"></span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NineteenthSection;
