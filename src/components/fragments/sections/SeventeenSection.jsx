import { Link } from "react-router-dom";
import Iphone13 from "../common/seventeenSection/Iphone13";
import Iphone14 from "../common/seventeenSection/Iphone14";
import Iphone14Pro from "../common/seventeenSection/Iphone14Pro";
import IphoneSE from "../common/seventeenSection/IphoneSE";

const SeventeenSection = () => {
  return (
    <section
      className="bg-white md:pt-[70px] md:pb-[30px] pt-[65px]
    pb-[66px] relative z-[1] text-center block section-compare"
    >
      <div className="section-content">
        <h2 className="typography-headline tile-headline">
          Which iPhone is&nbsp;right&nbsp;for&nbsp;you?
        </h2>
        <div className="md:max-w-[940px] max-w-[500px] md:mt-[68px] mt-[43px] mx-auto grid custom-grid-col-row compare-table">
          <Iphone14Pro />
          <Iphone14 />
          <Iphone13 />
          <IphoneSE />
        </div>
        <ul className="mt-10 typography-compare-all-cta">
          <li className="block md:inline-block mt-0 mx-[18px]">
            <Link to="#" className="text-[#06c] hover:underline ">
              <span>Compare all iPhone models</span>
              <span className="fa fa-chevron-right ml-2 text-xs"></span>
            </Link>
          </li>
          <li className="block md:inline-block mt-0 mx-[18px]">
            <Link to="#" className="text-[#06c] hover:underline ">
              <span>Shop iPhone</span>
              <span className="fa fa-chevron-right ml-2 text-xs"></span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SeventeenSection;
