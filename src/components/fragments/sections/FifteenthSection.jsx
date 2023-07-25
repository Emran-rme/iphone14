import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const FifteenthSection = () => {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] overflow-hidden py-[114px] section-even-more">
      <div className="section-content">
        <h2 className="headline">
          Have even more fun
          <br /> with your iPhone.
        </h2>
      </div>
      <div className="gallery">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          centeredSlides={true}
          className="mySwiper "
        >
          <SwiperSlide className="gallery-item app-store">
            <div className="tile">
              <div className="tile-header">
                <picture className="overview-even-more-icon-app-store item-icon ">
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_app_store__chtwyx9om6j6_small.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_app_store__chtwyx9om6j6_small_2x.png"))
                    }
                    media="(max-width:734px)"
                  />
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_app_store__chtwyx9om6j6_large.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_app_store__chtwyx9om6j6_large_2x.png"))
                    }
                    media="(min-width:0px)"
                  />
                  <img
                    src={require("./../../../assets/images/sections/fifteenthSection/icon_app_store__chtwyx9om6j6_large.png")}
                    alt=""
                  />
                </picture>
              </div>
              <p className="tile-copy text-left text-xs">
                The <strong>App&nbsp;Store</strong> offers nearly 1.8 million
                apps — all held to the highest privacy standards.
              </p>
              <Link
                to="#"
                className="icon-wrapper tile-cta text-[#06c] hover:underline "
              >
                <span>Learn more</span>
                <span className="fa fa-chevron-right ml-2 text-xs"></span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery-item apple-fitness">
            <div className="tile">
              <div className="tile-header">
                <picture className="overview-even-more-icon-apple-fitness item-icon ">
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_apple_fitness__c1pb3re62d2e_small.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_apple_fitness__c1pb3re62d2e_small_2x.png"))
                    }
                    media="(max-width:734px)"
                  />
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_apple_fitness__c1pb3re62d2e_large.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_apple_fitness__c1pb3re62d2e_large_2x.png"))
                    }
                    media="(min-width:0px)"
                  />
                  <img
                    src={require("./../../../assets/images/sections/fifteenthSection/icon_apple_fitness__c1pb3re62d2e_large.png")}
                    alt=""
                  />
                </picture>
              </div>

              <p className="tile-copy text-left text-xs">
                <strong>Apple&nbsp;Fitness+</strong> for thousands of workouts,
                even if you don’t yet have an Apple&nbsp;Watch.
                <sup className="footnote footnote-number">
                  <Link to="#footnote-10">8</Link>
                </sup>
              </p>
              <Link
                to="#"
                className="icon-wrapper tile-cta text-[#06c] hover:underline "
              >
                <span>Learn more</span>
                <span className="fa fa-chevron-right ml-2 text-xs"></span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery-item apple-one">
            <div className="tile">
              <div className="tile-header">
                <picture className="overview-even-more-icon-apple-one item-icon ">
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_apple_one__dd0m1am5q7yq_small.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_apple_one__dd0m1am5q7yq_small_2x.png"))
                    }
                    media="(max-width:734px)"
                  />
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_apple_one__dd0m1am5q7yq_large.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_apple_one__dd0m1am5q7yq_large_2x.png"))
                    }
                    media="(min-width:0px)"
                  />
                  <img
                    src={require("./../../../assets/images/sections/fifteenthSection/icon_apple_one__dd0m1am5q7yq_large.png")}
                    alt=""
                  />
                </picture>
              </div>
              <p className="tile-copy text-left text-xs">
                <strong>Apple&nbsp;One</strong> bundles up to six services for
                music, movies, games, and more in one easy&nbsp;subscription.
              </p>

              <Link
                to="#"
                className="icon-wrapper tile-cta text-[#06c] hover:underline "
              >
                <span>Learn more</span>
                <span className="fa fa-chevron-right ml-2 text-xs"></span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery-item magsafe">
            <div className="tile">
              <div className="tile-header">
                <picture className="overview-even-more-icon-magsafe item-icon ">
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_magsafe__blycm27mui82_small.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_magsafe__blycm27mui82_small_2x.png"))
                    }
                    media="(max-width:734px)"
                  />
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_magsafe__blycm27mui82_large.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_magsafe__blycm27mui82_large_2x.png"))
                    }
                    media="(min-width:0px)"
                  />
                  <img
                    src={require("./../../../assets/images/sections/fifteenthSection/icon_magsafe__blycm27mui82_large.png")}
                    alt=""
                  />
                </picture>
              </div>
              <p className="tile-copy text-left text-xs">
                <strong>MagSafe</strong> cases and wallets let you MagSafe also
                gives you faster wireless charging.
                <sup className="footnote footnote-number">
                  <a
                    href="#footnote-7"
                    aria-label="Footnote 5"
                    data-modal-close=""
                  >
                    5
                  </a>
                </sup>
              </p>
              <Link
                to="#"
                className="icon-wrapper tile-cta text-[#06c] hover:underline "
              >
                <span>Learn more</span>
                <span className="fa fa-chevron-right ml-2 text-xs"></span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery-item usbc-adapter">
            <div className="tile">
              <div className="tile-header">
                <picture className="overview-even-more-icon-usbc-adapter item-icon ">
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_usbc_adapter__cjkk72gxj8ia_small.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_usbc_adapter__cjkk72gxj8ia_small_2x.png"))
                    }
                    media="(max-width:734px)"
                  />
                  <source
                    srcSet={
                      (require("./../../../assets/images/sections/fifteenthSection/icon_usbc_adapter__cjkk72gxj8ia_large.png"),
                      require("./../../../assets/images/sections/fifteenthSection/icon_usbc_adapter__cjkk72gxj8ia_large_2x.png"))
                    }
                    media="(min-width:0px)"
                  />
                  <img
                    src={require("./../../../assets/images/sections/fifteenthSection/icon_usbc_adapter__cjkk72gxj8ia_large.png")}
                    alt=""
                  />
                </picture>
              </div>
              <p className="tile-copy text-left text-xs">
                <strong>MagSafe</strong> cases and wallets let you MagSafe also
                gives you faster wireless charging.
                <sup className="footnote footnote-number">
                  <a
                    href="#footnote-7"
                    aria-label="Footnote 5"
                    data-modal-close=""
                  >
                    5
                  </a>
                </sup>
              </p>
              <Link
                to="#"
                className="icon-wrapper tile-cta text-[#06c] hover:underline "
              >
                <span>Learn more</span>
                <span className="fa fa-chevron-right ml-2 text-xs"></span>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FifteenthSection;
