import { useEffect, useState } from "react";
const SecondSection = () => {
  const [index, setIndex] = useState({ previous: -1, current: 0 });
  const [offset, setOffset] = useState(0);
  const colors = ["blue", "purple", "midnight", "starlight", "red"];
  const handleSetIndex = (previous, current) => setIndex({ previous, current });

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative pt-[98px] block ">
      <div className="w-[980px] mx-auto">
        <h2 className="second-section-headline">Design</h2>
        <div className="mt-[0.8em]">
          <div className="block ">
            <div
              className="item-container item-container-medium-up-fade gallery"
              data-current-name={colors[index.current]}
              data-direction="right"
              data-previous-name={colors[index.previous]}
              data-anim-state="animate"
              data-current-index={index.current}
              data-previous-index={index.previous}
            >
              <div
                className="gallery-tile gallery-tile-bento-4-color-picker"
                style={{
                  transform: `matrix(1, 0, 0, 1, 0, ${
                    offset > 3000 && offset <= 3100
                      ? (offset - 3000) * -1.30097 + 350
                      : offset > 3100 && offset <= 3200
                      ? (offset - 3100) * -1.948177 + 219.903
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3200) * -0.250853 + 25.0853
                      : offset > 3300
                      ? 0
                      : 350
                  })`,

                  opacity:
                    offset > 3000 && offset <= 3100
                      ? (offset - 3000) * 0.00371705
                      : offset > 3100 && offset <= 3200
                      ? (offset - 3000) * 0.00556623 + 0.371705
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3100) * 0.00071672 + 0.928328
                      : offset > 3300
                      ? 1
                      : 0,
                }}
              >
                <div className="w-full grow">
                  <div className="color-picker-copy">
                    <p className="pt-[67px] text-center text-[#6e6e73] tile-copy typography-site-design-tile-copy">
                      Five fantastic colors
                    </p>
                    <div className="w-full h-auto relative py-[30px] grow">
                      <p className="color-name color-name-blue typography-site-design-tile-picker">
                        Blue
                      </p>
                      <p className="color-name color-name-purple typography-site-design-tile-picker">
                        Purple
                      </p>
                      <p className="color-name color-name-midnight typography-site-design-tile-picker">
                        Midnight
                      </p>
                      <p className="color-name color-name-starlight typography-site-design-tile-picker">
                        Starlight
                      </p>
                      <picture
                        id="overview-design-gallery-logo-product-red-1"
                        className="overview-design-gallery-logo-product-red color-name color-name-red loaded"
                      >
                        <source
                          srcSet={
                            (require("./../../../assets/images/sections/secondSection/product_red_small.png"),
                            require("./../../../assets/images/sections/secondSection/product_red_small_2x.png"))
                          }
                          media="(max-width:734px)"
                        />
                        <source
                          srcSet={
                            (require("./../../../assets/images/sections/secondSection/product_red_medium.png"),
                            require("./../../../assets/images/sections/secondSection/product_red_medium_2x.png"))
                          }
                          media="(max-width:1068px)"
                        />
                        <source
                          srcSet={
                            (require("./../../../assets/images/sections/secondSection/product_red_large.png"),
                            require("./../../../assets/images/sections/secondSection/product_red_large_2x.png"))
                          }
                          media="(min-width:0px)"
                        />
                        <img
                          src={require("./../../../assets/images/sections/secondSection/product_red_large.png")}
                          alt="(Product) Red"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <fieldset className="colornav colornav-neutral tablist-wrapper has-product-red">
                  <ul
                    role="tablist"
                    className="colornav-items"
                    aria-label="Select a color"
                  >
                    <li
                      role="presentation"
                      className={
                        colors[index.current] === "blue"
                          ? "colornav-item current"
                          : "colornav-item "
                      }
                      onClick={() => handleSetIndex(-1, 0)}
                    >
                      <a
                        href="#gallery-small-fade-item-blue"
                        id="gallery-small-fade-item-blue-trigger"
                        className="colornav-anchor"
                        data-ac-gallery-trigger="gallery-small-fade-item-blue"
                        role="tab"
                        aria-controls="gallery-small-fade-item-blue"
                        aria-selected="false"
                      >
                        <span className="safari-ghost-tab">&nbsp;</span>
                        <span className="colornav-link">
                          <span className="colornav-swatch colornav-swatch-blue">
                            <span className="colornav-label typography-caption">
                              <span className="colornav-label-text">Blue</span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li
                      role="presentation"
                      className={
                        colors[index.current] === "purple"
                          ? "colornav-item current"
                          : "colornav-item "
                      }
                      onClick={() => handleSetIndex(0, 1)}
                    >
                      <a
                        href="#gallery-small-fade-item-purple"
                        id="gallery-small-fade-item-purple-trigger"
                        className="colornav-anchor"
                        data-ac-gallery-trigger="gallery-small-fade-item-purple"
                        role="tab"
                        aria-controls="gallery-small-fade-item-purple"
                        aria-selected="false"
                      >
                        <span className="safari-ghost-tab">&nbsp;</span>
                        <span className="colornav-link">
                          <span className="colornav-swatch colornav-swatch-purple">
                            <span className="colornav-label typography-caption">
                              <span className="colornav-label-text">
                                Purple
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li
                      role="presentation"
                      className={
                        colors[index.current] === "midnight"
                          ? "colornav-item current"
                          : "colornav-item "
                      }
                      onClick={() => handleSetIndex(1, 2)}
                    >
                      <a
                        href="#gallery-small-fade-item-midnight"
                        id="gallery-small-fade-item-midnight-trigger"
                        className="colornav-anchor"
                        data-ac-gallery-trigger="gallery-small-fade-item-midnight"
                        role="tab"
                        aria-controls="gallery-small-fade-item-midnight"
                        aria-selected="false"
                      >
                        <span className="safari-ghost-tab">&nbsp;</span>
                        <span className="colornav-link">
                          <span className="colornav-swatch colornav-swatch-midnight">
                            <span className="colornav-label typography-caption">
                              <span className="colornav-label-text">
                                Midnight
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li
                      role="presentation"
                      className={
                        colors[index.current] === "starlight"
                          ? "colornav-item current"
                          : "colornav-item "
                      }
                      onClick={() => handleSetIndex(2, 3)}
                    >
                      <a
                        href="#gallery-small-fade-item-starlight"
                        id="gallery-small-fade-item-starlight-trigger"
                        className="colornav-anchor"
                        data-ac-gallery-trigger="gallery-small-fade-item-starlight"
                        role="tab"
                        aria-controls="gallery-small-fade-item-starlight"
                        aria-selected="false"
                      >
                        <span className="safari-ghost-tab">&nbsp;</span>
                        <span className="colornav-link">
                          <span className="colornav-swatch colornav-swatch-starlight">
                            <span className="colornav-label typography-caption">
                              <span className="colornav-label-text">
                                Starlight
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li
                      role="presentation"
                      className={
                        colors[index.current] === "red"
                          ? "colornav-item current"
                          : "colornav-item "
                      }
                      onClick={() => handleSetIndex(3, 4)}
                    >
                      <a
                        href="#gallery-small-fade-item-red"
                        id="gallery-small-fade-item-red-trigger"
                        className="colornav-anchor current"
                        data-ac-gallery-trigger="gallery-small-fade-item-red"
                        role="tab"
                        aria-controls="gallery-small-fade-item-red"
                        aria-selected="true"
                      >
                        <span className="safari-ghost-tab">&nbsp;</span>
                        <span className="colornav-link">
                          <span className="colornav-swatch colornav-swatch-red">
                            <span className="colornav-label typography-caption">
                              <span className="colornav-label-text">
                                (Product) Red
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </fieldset>
              </div>

              <div
                className="gallery-tile gallery-tile-bento-1"
                style={{
                  "--bento-width": "317px",
                  transform: `matrix(1, 0, 0, 1, 0, ${
                    offset > 2900 && offset <= 3000
                      ? (offset - 2900) * -0.58032 + 200
                      : offset > 3000 && offset <= 3100
                      ? (offset - 3000) * -1.217959 + 141.968
                      : offset > 3100
                      ? 0
                      : 200
                  })`,
                  opacity:
                    offset > 2900 && offset <= 3000
                      ? (offset - 2900) * 0.00290161
                      : offset > 3000 && offset <= 3100
                      ? (offset - 3000) * 0.00608979 + 0.290161
                      : offset > 3100 && offset <= 3200
                      ? (offset - 3100) * 0.0010086 + 0.89914
                      : offset > 3200
                      ? 1
                      : 0,
                }}
              >
                <div className="asset-list asset-list-xdr asset-list-animate">
                  <div className="asset-wrap asset-wrap-blue">
                    <picture
                      id="overview-design-gallery-xdr-blue-1"
                      className="overview-design-gallery-xdr-blue picture picture-blue picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_blue_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_blue_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_blue_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_blue_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_blue_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_blue_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_blue_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-purple">
                    <picture
                      id="overview-design-gallery-xdr-purple-1"
                      className="overview-design-gallery-xdr-purple picture picture-purple picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_purple_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_purple_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_purple_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_purple_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_purple_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_purple_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_purple_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-midnight">
                    <picture
                      id="overview-design-gallery-xdr-midnight-1"
                      className="overview-design-gallery-xdr-midnight picture picture-midnight picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_midnight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_midnight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_midnight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_midnight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_midnight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_midnight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_midnight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-starlight">
                    <picture
                      id="overview-design-gallery-xdr-starlight-1"
                      className="overview-design-gallery-xdr-starlight picture picture-starlight picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_starlight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_starlight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_starlight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_starlight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_starlight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_starlight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_starlight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-red">
                    <picture
                      id="overview-design-gallery-xdr-red-1"
                      className="overview-design-gallery-xdr-red picture picture-red picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_red_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_red_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_red_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_red_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_red_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_red_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_red_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
                <p className="mt-8 tile-copy typography-site-design-tile-copy">
                  Vibrant Super <br />
                  Retina XDR display
                </p>
              </div>
              <div
                className="gallery-tile gallery-tile-bento-2"
                style={{
                  "--bento-width": "317px",
                  transform: `matrix(1, 0, 0, 1, 0, ${
                    offset > 3000 && offset <= 3100
                      ? (offset - 3000) * -1.44076 + 250
                      : offset > 3100 && offset <= 3200
                      ? (offset - 3100) * -1.01956 + 105.924
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3200) * -0.0396801 + 3.96801
                      : offset > 3300
                      ? 0
                      : 250
                  })`,
                  opacity:
                    offset > 3000 && offset <= 3100
                      ? (offset - 3000) * -0.576305
                      : offset > 3100 && offset <= 3200
                      ? (offset - 3000) * 0.407823 + 0.576305
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3100) * 0.015872 + 0.984128
                      : offset > 3300
                      ? 1
                      : 0,
                }}
              >
                <div className="asset-list asset-list-durable asset-list-animate">
                  <div className="asset-wrap asset-wrap-blue">
                    <picture
                      id="overview-design-gallery-durable-blue-1"
                      className="overview-design-gallery-durable-blue picture picture-blue picture-durable loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_blue_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_blue_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_blue_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_blue_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_blue_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_blue_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_durable_blue_large.jpg")}
                        alt="image for site"
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-purple">
                    <picture
                      id="overview-design-gallery-durable-purple-1"
                      className="overview-design-gallery-durable-purple picture picture-purple picture-durable loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_purple_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_purple_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_purple_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_purple_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_purple_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_purple_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_durable_purple_large.jpg")}
                        alt="image for site"
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-midnight">
                    <picture
                      id="overview-design-gallery-durable-midnight-1"
                      className="overview-design-gallery-durable-midnight picture picture-midnight picture-durable loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_midnight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_midnight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_midnight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_midnight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_midnight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_midnight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_durable_midnight_large.jpg")}
                        alt="image for site"
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-starlight">
                    <picture
                      id="overview-design-gallery-durable-starlight-1"
                      className="overview-design-gallery-durable-starlight picture picture-starlight picture-durable loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_starlight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_starlight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_starlight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_starlight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_starlight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_starlight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_durable_starlight_large.jpg")}
                        alt="image for site"
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-red">
                    <picture
                      id="overview-design-gallery-durable-red-1"
                      className="overview-design-gallery-durable-red picture picture-red picture-durable loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_red_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_red_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_red_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_red_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_durable_red_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_durable_red_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_durable_red_large.jpg")}
                        alt="image for site"
                      />
                    </picture>
                  </div>
                </div>
                <div className="tile-copy-wrap">
                  <p className="tile-title typography-site-design-tile-title">
                    Beautifully durable
                  </p>
                  <p className="tile-copy typography-site-design-tile-copy">
                    aerospace‑grade aluminum
                  </p>
                </div>
              </div>
              <div
                className="gallery-tile gallery-tile-bento-3"
                style={{
                  "--bento-width": "317px",
                  transform: `matrix(1, 0, 0, 1, 0, ${
                    offset > 3000 && offset <= 3100
                      ? (offset - 3000) * -0.09374 + 300
                      : offset > 3100 && offset <= 3200
                      ? (offset - 3100) * -2.273342 + 290.626
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3200) * -0.632918 + 63.2918
                      : offset > 3300
                      ? 0
                      : 300
                  })`,
                  opacity:
                    offset > 3000 && offset <= 3100
                      ? (offset - 3000) * 0.000312481
                      : offset > 3100 && offset <= 3200
                      ? (offset - 3000) * 0.007577789 + 0.0312481
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3100) * 0.00210973 + 0.789027
                      : offset > 3300
                      ? 1
                      : 0,
                }}
              >
                <div className="asset-list asset-list-lockscreen asset-list-animate">
                  <div className="asset-wrap asset-wrap-blue">
                    <picture
                      id="overview-design-gallery-xdr-blue-1"
                      className="overview-design-gallery-xdr-blue picture picture-blue picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_blue_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_blue_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_blue_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_blue_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_blue_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_blue_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_lockscreen_blue_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-purple">
                    <picture
                      id="overview-design-gallery-xdr-purple-1"
                      className="overview-design-gallery-xdr-purple picture picture-purple picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_purple_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_purple_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_purple_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_purple_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_purple_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_purple_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_lockscreen_purple_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-midnight">
                    <picture
                      id="overview-design-gallery-xdr-midnight-1"
                      className="overview-design-gallery-xdr-midnight picture picture-midnight picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_midnight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_midnight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_midnight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_midnight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_midnight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_midnight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_lockscreen_midnight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-starlight">
                    <picture
                      id="overview-design-gallery-xdr-starlight-1"
                      className="overview-design-gallery-xdr-starlight picture picture-starlight picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_starlight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_starlight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_starlight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_starlight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_starlight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_starlight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_lockscreen_starlight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-red">
                    <picture
                      id="overview-design-gallery-xdr-red-1"
                      className="overview-design-gallery-xdr-red picture picture-red picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_red_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_red_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_red_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_red_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/gallery_lockscreen_red_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/gallery_lockscreen_red_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/gallery_lockscreen_red_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div
                className="gallery-tile gallery-tile-bento-5"
                style={{
                  "--bento-width": "317px",
                  transform: `matrix(1, 0, 0, 1, 0, ${
                    offset > 3100 && offset <= 3200
                      ? (offset - 3100) * -2.55496 + 400
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3200) * -1.4218657 + 144.504
                      : offset > 3300 && offset <= 3400
                      ? (offset - 3300) * -0.0231743 + 2.31743
                      : offset > 3400
                      ? 0
                      : 400
                  })`,
                  opacity:
                    offset > 3100 && offset <= 3200
                      ? (offset - 3100) * 0.00638739
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3200) * 0.00355467 + 0.638739
                      : offset > 3300 && offset <= 3400
                      ? (offset - 3300) * 0.000058 + 0.994206
                      : offset > 3400
                      ? 1
                      : 0,
                }}
              >
                <div className="asset-list asset-list-camera asset-list-animate">
                  <div className="asset-wrap asset-wrap-blue">
                    <picture
                      id="overview-design-gallery-xdr-blue-1"
                      className="overview-design-gallery-xdr-blue picture picture-blue picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_blue_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_blue_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_blue_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_blue_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_blue_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_blue_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/camera_blue_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-purple">
                    {" "}
                    <picture
                      id="overview-design-gallery-xdr-purple-1"
                      className="overview-design-gallery-xdr-purple picture picture-purple picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_purple_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_purple_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_purple_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_purple_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_purple_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_purple_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/camera_purple_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-midnight">
                    {" "}
                    <picture
                      id="overview-design-gallery-xdr-midnight-1"
                      className="overview-design-gallery-xdr-midnight picture picture-midnight picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_midnight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_midnight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_midnight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_midnight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_midnight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_midnight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/camera_midnight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-starlight">
                    {" "}
                    <picture
                      id="overview-design-gallery-xdr-starlight-1"
                      className="overview-design-gallery-xdr-starlight picture picture-starlight picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_starlight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_starlight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_starlight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_starlight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_starlight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_starlight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/camera_starlight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-red">
                    {" "}
                    <picture
                      id="overview-design-gallery-xdr-red-1"
                      className="overview-design-gallery-xdr-red picture picture-red picture-xdr loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_red_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_red_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_red_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_red_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/camera_red_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/camera_red_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/camera_red_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div
                className="gallery-tile gallery-tile-bento-6"
                style={{
                  transform: `matrix(1, 0, 0, 1, 0, ${
                    offset > 3100 && offset <= 3200
                      ? (offset - 3100) * -0.57118 + 450
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3200) * -3.174403 + 392.882
                      : offset > 3300 && offset <= 3400
                      ? (offset - 3300) * -0.754417 + 75.4417
                      : offset > 3400
                      ? 0
                      : 450
                  })`,
                  opacity:
                    offset > 3100 && offset <= 3200
                      ? (offset - 3100) * 0.126928
                      : offset > 3200 && offset <= 3300
                      ? (offset - 3200) * 0.705424 + 0.126928
                      : offset > 3300 && offset <= 3400
                      ? (offset - 3300) * 0.167648 + 0.832352
                      : offset > 3400
                      ? 1
                      : 0,
                }}
              >
                <div className="asset-list asset-list-spills">
                  <div className="asset-wrap asset-wrap-blue">
                    <picture
                      id="overview-design-gallery-spills-blue-1"
                      className="overview-design-gallery-spills-blue picture picture-blue picture-spills loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_blue_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_blue_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_blue_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_blue_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_blue_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_blue_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/spills_blue_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-purple">
                    <picture
                      id="overview-design-gallery-spills-purple-1"
                      className="overview-design-gallery-spills-purple picture picture-purple picture-spills loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_purple_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_purple_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_purple_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_purple_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_purple_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_purple_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/spills_purple_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-midnight">
                    <picture
                      id="overview-design-gallery-spills-midnight-1"
                      className="overview-design-gallery-spills-midnight picture picture-midnight picture-spills loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_midnight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_midnight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_midnight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_midnight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_midnight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_midnight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/spills_midnight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-starlight">
                    <picture
                      id="overview-design-gallery-spills-starlight-1"
                      className="overview-design-gallery-spills-starlight picture picture-starlight picture-spills loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_starlight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_starlight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_starlight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_starlight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_starlight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_starlight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/spills_starlight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-red">
                    <picture
                      id="overview-design-gallery-spills-red-1"
                      className="absolute overview-design-gallery-spills-red picture picture-red picture-spills loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_red_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_red_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_red_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_red_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/spills_red_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/spills_red_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/spills_red_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
                <p className="tile-copy typography-site-design-tile-copy">
                  <span className="visuallyhidden">Sails through spills</span>{" "}
                  with water resistance
                  <sup className="footnote footnote-number">
                    <a href="#footnote-3">1</a>
                  </sup>
                </p>
              </div>
              <div
                className="gallery-tile gallery-tile-bento-7"
                style={{
                  "--bento-width": "648px",

                  transform: `matrix(1, 0, 0, 1, 0, ${
                    offset > 3200 && offset <= 3300
                      ? (offset - 3200) * -2.24137 + 500
                      : offset > 3300 && offset <= 3400
                      ? (offset - 3300) * -2.521342 + 275.863
                      : offset > 3300
                      ? 0
                      : 500
                  })`,
                  opacity:
                    offset > 3200 && offset <= 3300
                      ? (offset - 3200) * 0.00448275
                      : offset > 3300 && offset <= 3400
                      ? (offset - 3300) * 0.00504267 + 0.448275
                      : offset > 3300
                      ? 1
                      : 0,
                }}
              >
                <div className="tile-copy-wrap">
                  <p className="tile-title typography-site-design-tile-title">
                    Ceramic Shield
                  </p>
                  <p className="tile-copy typography-site-design-tile-copy">
                    is tougher than any smartphone&nbsp;glass
                  </p>
                </div>
                <div className="asset-list asset-list-ceramic asset-list-animate">
                  <div className="asset-wrap asset-wrap-blue">
                    <picture
                      id="overview-design-gallery-spills-blue-1"
                      className="overview-design-gallery-ceramic-blue picture picture-blue picture-ceramic loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_blue_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_blue_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_blue_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_blue_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_blue_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_blue_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/ceramic_blue_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-purple">
                    <picture
                      id="overview-design-gallery-spills-purple-1"
                      className="overview-design-gallery-ceramic-purple picture picture-purple picture-ceramic loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_purple_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_purple_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_purple_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_purple_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_purple_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_purple_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/ceramic_purple_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-midnight">
                    <picture
                      id="overview-design-gallery-spills-midnight-1"
                      className="overview-design-gallery-ceramic-midnight picture picture-midnight picture-ceramic loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_midnight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_midnight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_midnight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_midnight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_midnight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_midnight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/ceramic_midnight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-starlight">
                    <picture
                      id="overview-design-gallery-spills-starlight-1"
                      className="overview-design-gallery-ceramic-starlight picture picture-starlight picture-ceramic loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_starlight_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_starlight_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_starlight_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_starlight_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_starlight_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_starlight_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/ceramic_starlight_large.jpg")}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="asset-wrap asset-wrap-red">
                    <picture
                      id="overview-design-gallery-spills-red-1"
                      className="overview-design-gallery-ceramic-red picture picture-red picture-ceramic loaded"
                    >
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_red_small.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_red_small_2x.jpg"))
                        }
                        media="(max-width:734px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_red_medium.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_red_medium_2x.jpg"))
                        }
                        media="(max-width:1068px)"
                      />
                      <source
                        srcSet={
                          (require("./../../../assets/images/sections/secondSection/ceramic_red_large.jpg"),
                          require("./../../../assets/images/sections/secondSection/ceramic_red_large_2x.jpg"))
                        }
                        media="(min-width:0px)"
                      />
                      <img
                        src={require("./../../../assets/images/sections/secondSection/ceramic_red_large.jpg")}
                        alt=""
                      />
                    </picture>
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

export default SecondSection;
