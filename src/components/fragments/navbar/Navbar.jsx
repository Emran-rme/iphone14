import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";

import logo from "./../../../assets/images/apple_14x14.svg";
import store from "./../../../assets/images/store.svg";
import mac from "./../../../assets/images/mac.svg";
import ipad from "./../../../assets/images/ipad.svg";
import iphone from "./../../../assets/images/iphone.svg";
import watch from "./../../../assets/images/watch.svg";
import airpods from "./../../../assets/images/airpods.svg";
import tvhome from "./../../../assets/images/tvhome.svg";
import onlyonapple from "./../../../assets/images/onlyonapple.svg";
import accessories from "./../../../assets/images/accessories.svg";
import support from "./../../../assets/images/support.svg";
import search from "./../../../assets/images/search.svg";
import bag from "./../../../assets/images/bag.svg";
import searchBtn from "./../../../assets/images/searchBtn.svg";

import styles from "./Navbar.module.css";
import Spinner from "../partials/Spinner";

const DropDownMenu = lazy(() => import("./DropDownMenu"));

const Navbar = () => {
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [seacrhStatus, setSearchStatus] = useState(false);
  const handleChangeDropDown = (e) => {
    e.preventDefault();
    setDropDownStatus(!dropDownStatus);
  };
  const handleSearchStatus = (e) => {
    e.preventDefault();
    setSearchStatus(!seacrhStatus);
  };

  return (
    <>
      <nav
        id="mobile_nav"
        className="min-w-[320px] bg-[rgba(0,0,0,.98)] absolute top-0 right-0 left-0 block md:hidden z-[9999] w-full h-[48px] text-lg"
      >
        <div className="absolute top-0 w-full h-full ">
          <ul className="block absolute z-[5] top-0 left-0 w-full h-[48px] overflow-hidden">
            <li className="header-menuicon box-border inline-block align-top h-[48px]">
              <Link
                to="#ac-gn-menustate"
                className="ac-gn-menuanchor ac-gn-menuanchor-open"
                id="ac-gn-menuanchor-open"
              >
                <span className="ac-gn-menuanchor-label">
                  Global Nav Open Menu
                </span>
              </Link>
              <Link
                to="#"
                role="button"
                className="ac-gn-menuanchor ac-gn-menuanchor-close"
                id="ac-gn-menuanchor-close"
              >
                <span className="ac-gn-menuanchor-label">
                  Global Nav Close Menu
                </span>
              </Link>
              <label className="ac-gn-menuicon-label" htmlFor="ac-gn-menustate">
                <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-top">
                  <span className="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-top"></span>
                </span>
                <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-bottom">
                  <span className="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-bottom"></span>
                </span>
              </label>
            </li>
            <li className="block h-[48px] ac-gn-apple">
              <Link
                className="ac-gn-link ac-gn-link-apple"
                to="/"
                id="ac-gn-firstfocus-small"
              >
                <span className="ac-gn-link-text">Apple</span>
              </Link>
            </li>
            <li className="h-[48px] w-auto absolute top-0  z-[2] ac-gn-bag-small">
              <div className="ac-gn-bag-wrapper">
                <Link
                  className="ac-gn-link ac-gn-link-bag h-[48px]"
                  to="/"
                  onClick={(e) => handleChangeDropDown(e)}
                >
                  <span className="ac-gn-link-text">Shopping Bag</span>
                </Link>
                <span className="ac-gn-bag-badge">
                  <span className="ac-gn-bag-badge-separator"></span>
                  <span className="ac-gn-bag-badge-number"></span>
                  <span className="ac-gn-bag-badge-unit">+</span>
                </span>
              </div>
              <span className="ac-gn-bagview-caret ac-gn-bagview-caret-large"></span>
            </li>
          </ul>
        </div>
      </nav>
      {dropDownStatus ? (
        <div className=" md:hidden">
          <span className={styles.dropDownArrow} />
          <div
            className="absolute z-[21] right-0 top-12 p-4 w-full  bg-white border border-[#d2d2d7]"
            role="menu"
          >
            <Suspense fallback={<Spinner />}>
              <DropDownMenu />
            </Suspense>
          </div>
        </div>
      ) : null}
      <nav className="hidden w-full min-w-[1024px] max-h-[44px] md:block absolute top-0 right-0 left-0 px-2 sm:px-24 h-12 bg-[rgba(0,0,0,.8)] z-[9999]">
        <div className="mx-auto mt-0 max-w-[980px] relative z-[2] pt-0 px-6 flex items-center h-full">
          <ul className="mt-0 -mx-2 w-full h-11 flex justify-between list-none">
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  textDecoration: "none",
                  backgroundImage: `url(${logo})`,
                  backgroundSize: "14px 44px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${store}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "2.5em",
                  maxWidth: "51px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${mac}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "1.91667em",
                  maxWidth: "39.1px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${ipad}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "2em",
                  maxWidth: "40.8px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${iphone}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "3.16667em",
                  maxWidth: "64.6px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${watch}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "2.91667em",
                  maxWidth: "59.5px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${airpods}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "3.58333em",
                  maxWidth: "73.1px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${tvhome}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "5.41667em",
                  maxWidth: "110.5px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${onlyonapple}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "6.66667em",
                  maxWidth: "136px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${accessories}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "5.58333em",
                  maxWidth: "113.9px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${support}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center center",
                  backgroundOrigin: "content-box",
                  backgroundSize: "cover",
                  width: "3.66667em",
                  maxWidth: "74.8px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anShowMenuItem : styles.anHideMenuItem
              }`}
            >
              <Link
                onClick={(e) => handleSearchStatus(e)}
                to="#"
                className="text-xs relative h-11 opacity-80 py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100"
                style={{
                  backgroundImage: `url(${search}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "15px 88px",
                  width: "15px",
                }}
              ></Link>
            </li>
            <li
              className={`cursor-auto box-border inline-block relative h-11 z-[1] align-top ${
                seacrhStatus ? styles.anBagItemShow : styles.anBagItemHide
              }`}
            >
              <Link
                onClick={(e) => handleChangeDropDown(e)}
                to="#"
                className={`text-xs relative h-11  py-0 px-2 whitespace-nowrap w-4 inline-block box-content hover:opacity-100 ${
                  dropDownStatus ? "opacity-100" : "opacity-80"
                }`}
                style={{
                  backgroundImage: `url(${bag}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "13px 44px",
                  width: "13px",
                  backgroundPosition: " center center",
                }}
              ></Link>
              {dropDownStatus ? (
                <>
                  <span className={styles.dropDownArrow} />
                  <div
                    className="absolute -mr-28 right-0 top-12 z-10 w-72 rounded-2xl bg-white border border-[#d2d2d7]"
                    role="menu"
                  >
                    <Suspense fallback={<Spinner />}>
                      <DropDownMenu />
                    </Suspense>
                  </div>
                </>
              ) : null}
            </li>
          </ul>

          <aside className={seacrhStatus ? "block" : "hidden"}>
            <div className={styles.searchBox}>
              <div>
                <div>
                  <form className="h-11 leading-[44px]">
                    <div className="relative z-[2]">
                      <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search apple.com"
                        autoFocus
                      />
                      <input type="hidden" name="search" />
                      <button
                        className="opacity-80 cursor-auto w-10 h-11 absolute z-[1] left-0"
                        style={{
                          backgroundSize: "15px 88px",
                          backgroundRepeat: "no-repeat",
                          backgroundImage: `url(${searchBtn})`,
                          backgroundPosition: "12.5px -44px",
                        }}
                      ></button>
                    </div>
                  </form>
                </div>
              </div>
              <aside className={`block ${styles.searchResult}`}>
                <section className={styles.searchSection}>
                  <div>
                    <h3
                      className={`text-gray-500 text-xs leading-[1.33] ${styles.anSearchResult}`}
                    >
                      Quick Links
                    </h3>
                    <ul className="pt-1 list-none">
                      <li
                        className={`${styles.searchListItem} ${styles.anSearchResult}`}
                      >
                        <Link
                          to="#"
                          className="overflow-hidden whitespace-nowrap text-ellipsis block px-12 text-gray-900 no-underline"
                        >
                          Visiting an Apple Store FAQ
                        </Link>
                      </li>
                      <li
                        className={`${styles.searchListItem} ${styles.anSearchResult}`}
                      >
                        <Link
                          to="#"
                          className="overflow-hidden whitespace-nowrap text-ellipsis block px-12 text-gray-900 no-underline"
                        >
                          Apple Gift Card
                        </Link>
                      </li>
                      <li
                        className={`${styles.searchListItem} ${styles.anSearchResult}`}
                      >
                        <Link
                          to="#"
                          className="overflow-hidden whitespace-nowrap text-ellipsis block px-12 text-gray-900 no-underline"
                        >
                          AirPods
                        </Link>
                      </li>
                      <li
                        className={`${styles.searchListItem} ${styles.anSearchResult}`}
                      >
                        <Link
                          to="#"
                          className="overflow-hidden whitespace-nowrap text-ellipsis block px-12 text-gray-900 no-underline"
                        >
                          AirTag
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
              </aside>
              <button
                onClick={() => setSearchStatus(false)}
                className="right-0 absolute opacity-80 z-20 w-9 h-11 top-0 text-[#86868b] cursor-pointer"
              >
                <span className="block w-full h-full">
                  <span className={styles.closeViewLeft}></span>
                  <span className={styles.closeViewRight}></span>
                </span>
              </button>
            </div>
          </aside>
        </div>
      </nav>
      {dropDownStatus && (
        <div
          className="w-full fixed right-0 left-0 top-0 h-screen z-20 bg-[rgba(0,0,0,.48)] md:bg-transparent "
          onClick={() => setDropDownStatus(false)}
        ></div>
      )}
      <div
        onClick={() => setSearchStatus(false)}
        className={`fixed top-0 right-0 bottom-0 left-0 w-full h-full z-[9998] bg-[rgba(0,0,0,.48)] ${
          seacrhStatus ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
