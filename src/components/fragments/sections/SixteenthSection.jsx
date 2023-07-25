import { Link } from "react-router-dom";

const SixteenthSection = () => {
  return (
    <section className="block pb-[70px] pt-[110px] section-guided-tour section-endcap">
      <div className="mx-auto max-w-[1440px] pt-0 px-0 md:px-[15px] box-border overflow-hidden flex flex-wrap flex-row w-full">
        <div className="tile-guided-tour basis-full max-w-full">
          <div className="overflow-hidden">
            <div className="flex flex-wrap flex-row w-full">
              <div className="flex background-container basis-full max-w-full small-order-1">
                <figure className="tour-guide" />
              </div>
              <div className="absolute top-0 z-[2] h-full basis-full max-w-full content-container small-order-0">
                <div className="text-left pt-[302px] pl-[218px] content-wrapper">
                  <h2>
                    <span className="typography-guided-tour-eyebrow tile-copy basis-full max-w-full">
                      A Guided Tour of
                    </span>
                    <span className="typography-guided-tour-headline tile-headline basis-full max-w-full">
                      iPhone&nbsp;14&nbsp;&amp; <br />
                      iPhone&nbsp;14&nbsp;Pro
                    </span>
                  </h2>
                  <div className="mt-[21px] guided-tours-triggers">
                    <Link to="#" className="icon-wrapper film-link ">
                      <span className="icon-copy">Watch the film</span>
                      <span className="icon icon-after icon icon-playcircle"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixteenthSection;
