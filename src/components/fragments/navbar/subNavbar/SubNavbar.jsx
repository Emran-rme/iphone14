import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SubNavbar.module.css";
const SubNavbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`top-0 left-0 w-full h-[52px] min-w-[1024px] z-[9997] sticky ${
        offset > 44 ? styles.activeSticky : " "
      }`}
    >
      <div className={styles.subNavBlurBg}></div>
      <div className="absolute top-0 left-0 w-full h-auto min-h-full z-[1]">
        <div className="mx-auto mt-0 max-w-[980px] px-[22px] relative z-[2]">
          <div className="text-xl font-semibold cursor-auto block float-left mt-[14px] mb-[-14px] h-[52px] whitespace-nowrap">
            <Link
              to="#"
              className="flex flex-col-reverse whitespace-nowrap opacity-90"
            >
              IPhone 14
            </Link>
          </div>
          <div className="text-xs leading-none font-normal float-right mt-[-3px]">
            <div className="float-left pt-[18px]">
              <ul className="tracking-[inherit]">
                <li className="ml-6 float-left list-none">
                  <span className="text-black opacity-50 cursor-auto inline-block leading-[22px] whitespace-nowrap">
                    Overview
                  </span>
                </li>
                <li className="ml-6 float-left list-none">
                  <Link
                    to="#"
                    className="text-black opacity-80 cursor-pointer inline-block leading-[22px] whitespace-nowrap hover:text-[#06c] hover:opacity-100"
                  >
                    Switching to iPhone
                  </Link>
                </li>
                <li className="ml-6 float-left list-none">
                  <Link
                    to="#"
                    className="text-black opacity-80 cursor-pointer inline-block leading-[22px] whitespace-nowrap hover:text-[#06c] hover:opacity-100"
                  >
                    Tech Specs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="float-left pt-[18px]">
              <div className="ml-6 float-left">
                <Link
                  to="#"
                  className="mt-[-1px] cursor-pointer inline-block whitespace-nowrap bg-[#0071e3] text-white rounded-[980px] text-xs font-normal tracking-[-.01em] min-w-[23px] px-[11px] py-1 active:bg-[#0068d1] hover:bg-[#0068d1]"
                >
                  Buy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
