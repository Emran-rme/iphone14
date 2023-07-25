import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

const FirstSection = () => {
    const [offset, setOffset] = useState(0);
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    const [number, setNumber] = useState(0);
    const [isScrolling, setIsScrolling] = useState(null);

    const listener = (e) => {
        window.clearTimeout(isScrolling);
        setIsScrolling(
            setTimeout(() => {
                if (e.deltaY < 0) {
                    setNumber(Math.abs(number - 1));
                } else {
                    setNumber(number + 1);
                }
            }, 50)
        );
    };

    useEffect(() => {
        window.addEventListener("wheel", listener);
        return () => {
            window.removeEventListener("wheel", listener);
        };
    });

    useEffect(() => {
        const onScroll = () =>
            setOffset(parseInt(window.pageYOffset / 100) * 100);

        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (window.innerHeight < 662) {
            setInnerHeight(
                window.innerHeight + Math.abs(window.innerHeight - 662) * 0.5
            );
        } else {
            setInnerHeight(
                window.innerHeight - Math.abs(window.innerHeight - 662) * 0.5
            );
        }
    }, [window.innerHeight]);
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
            if (window.innerHeight < 662) {
                setInnerHeight(
                    window.innerHeight +
                        Math.abs(window.innerHeight - 662) * 0.5
                );
            } else {
                setInnerHeight(
                    window.innerHeight -
                        Math.abs(window.innerHeight - 662) * 0.5
                );
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const myLogo = useRef(null);
    useEffect(() => {
        const el = myLogo.current;
        gsap.to(el, {
            y: -200,
            opacity: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: el,
                start: "top 110px",
                toggleActions: "play pause resume reset",
            },
        });
    }, []);

    return (
        <section className="block pt-0 text-center first_section section-hero">
            <div className="first-section-container first_part">
                <div className="logo-first-section">
                    <h1 className="headline copy-gradient">
                        iPhone&nbsp;14 and iPhone&nbsp;14&nbsp;Plus
                    </h1>
                </div>
                <div className="hardware-fan-first-section">
                    <div className="hardware-fan-scroll-container">
                        <div className="hardware-fan-sticky-wrapper">
                            <div className="main-section-content">
                                <div className="link-container">
                                    <p className="headline copy-gradient">
                                        iPhone&nbsp;14 and
                                        iPhone&nbsp;14&nbsp;Plus
                                    </p>
                                    <h2 className="subheadline typography-hero-headline-super text-3xl md:text-[96px] md:my-12">
                                        Wonderfull.
                                    </h2>
                                    <div className="fan-image-container">
                                        <div className="rotate-wrapper">
                                            <picture className="overview-hero-hero-all-colors image-all-colors">
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_all_colors_small.jpg"),
                                                        require("./../../../assets/images/sections/firstSection/hero_all_colors_small_2x.jpg"))
                                                    }
                                                    media="(max-width:734px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_all_colors_medium.jpg"),
                                                        require("./../../../assets/images/sections/firstSection/hero_all_colors_medium_2x.jpg"))
                                                    }
                                                    media="(max-width:1068px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_all_colors_large.jpg"),
                                                        require("./../../../assets/images/sections/firstSection/hero_all_colors_large_2x.jpg"))
                                                    }
                                                    media="(min-width:0px)"
                                                />
                                                <img
                                                    src={require("./../../../assets/images/sections/firstSection/hero_all_colors_large.jpg")}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <p className="pricing typography-site-claim has-dynamic-content">
                                        <span className="sosumi-link-follows">
                                            From $33.29/mo. for 24 mo. or $799
                                            before trade‑in
                                        </span>
                                        <span className="footnote footnote-supglyph">
                                            <Link to="#">*</Link>
                                        </span>
                                    </p>
                                    <ul className="ctas-list links-inline typography-site-claim">
                                        <li>
                                            <Link
                                                to="#"
                                                className="icon-wrapper film-cta"
                                            >
                                                <span className="icon-copy">
                                                    Watch the{" "}
                                                    <span className="visuallyhidden">
                                                        iPhone 14
                                                    </span>{" "}
                                                    film
                                                </span>
                                                <span className="icon icon-after icon-playcircle"></span>
                                            </Link>{" "}
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="icon-wrapper event-cta"
                                            >
                                                <span className="icon-copy">
                                                    Watch the{" "}
                                                    <span className="visuallyhidden">
                                                        iPhone 14
                                                    </span>{" "}
                                                    event
                                                </span>
                                                <span className="icon icon-after more"></span>
                                            </Link>{" "}
                                        </li>
                                        <li className="ar-quicklook-cta">
                                            <p className="ar-quicklook-cta-ar-quicklook ar-quicklook-cta">
                                                <Link to="#">
                                                    <img />
                                                    <span>
                                                        View
                                                        <span className="visuallyhidden">
                                                            iPhone 14 and iPhone
                                                            14 Plus
                                                        </span>{" "}
                                                        in AR
                                                    </span>
                                                </Link>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="manifesto-section manifesto-bottom">
                    <div className="manifesto-text battery-container">
                        <div className="manifesto-text-container">
                            <p className="battery-text">
                                Our longest battery life ever.
                            </p>
                        </div>
                    </div>
                    <div className="manifesto-scroll-container">
                        <div className="manifesto-sticky-wrapper">
                            <div className="manifesto-text safety-container">
                                <p className="safety-text">
                                    Emergency SOS <span>via satellite.</span>
                                </p>
                            </div>
                            <div className="manifesto-text camera-container">
                                <p className="camera-text">
                                    A huge leap in low‑light photos.
                                </p>
                            </div>
                            <div className="manifesto-text size-container">
                                <p className="size-text ">Big and bigger.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-display-section">
                    <div className="devices-container">
                        <div className="iphone-14-phone-container md:w-1/2">
                            <div className="display-headline-container big-headline-container">
                                <div className="big-container">
                                    <p className="display-headline">Big</p>
                                </div>
                            </div>
                            <div className="position-wrapper phone-container">
                                <div className="specs-container-wrapper iphone-14-specs-container">
                                    <div className="specs-container">
                                        <p className="product-name">
                                            iPhone&nbsp;14
                                        </p>
                                        <p className="product-size">6.1″</p>
                                    </div>
                                </div>
                                <div className="image-container iphone-14-image-container">
                                    <picture className="overview-hero-hero-iphone-14">
                                        <source
                                            srcSet={
                                                (require("./../../../assets/images/sections/firstSection/iphone_14_small.jpg"),
                                                require("./../../../assets/images/sections/firstSection/iphone_14_small_2x.jpg"))
                                            }
                                            media="(max-width:734px)"
                                        />
                                        <source
                                            srcSet={
                                                (require("./../../../assets/images/sections/firstSection/iphone_14_medium.jpg"),
                                                require("./../../../assets/images/sections/firstSection/iphone_14_medium_2x.jpg"))
                                            }
                                            media="(max-width:1068px)"
                                        />
                                        <source
                                            srcSet={
                                                (require("./../../../assets/images/sections/firstSection/iphone_14_large.jpg"),
                                                require("./../../../assets/images/sections/firstSection/iphone_14_large_2x.jpg"))
                                            }
                                            media="(min-width:0px)"
                                        />
                                        <img
                                            src={require("./../../../assets/images/sections/firstSection/iphone_14_large_2x.jpg")}
                                            alt=""
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 iphone-14-plus-phone-container">
                            <div className="display-headline-container bigger-headline-container">
                                <div className="bigger-container">
                                    <p className="display-headline">
                                        and bigger.
                                    </p>
                                </div>
                            </div>
                            <div className="position-wrapper phone-container">
                                <div className="specs-container-wrapper iphone-14-plus-specs-container">
                                    <div className="specs-container">
                                        <p className="product-name typography-tout">
                                            iPhone&nbsp;14&nbsp;Plus
                                        </p>
                                        <p className="product-size">6.7″</p>
                                    </div>
                                </div>
                                <div className="image-container iphone-14-plus-image-container">
                                    <picture className="overview-hero-hero-iphone-14-plus">
                                        <source
                                            srcSet={
                                                (require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_small.jpg"),
                                                require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_small_2x.jpg"))
                                            }
                                            media="(max-width:734px)"
                                        />
                                        <source
                                            srcSet={
                                                (require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_medium.jpg"),
                                                require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_medium_2x.jpg"))
                                            }
                                            media="(max-width:1068px)"
                                        />
                                        <source
                                            srcSet={
                                                (require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_large.jpg"),
                                                require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_large_2x.jpg"))
                                            }
                                            media="(min-width:0px)"
                                        />
                                        <img
                                            src={require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_large_2x.jpg")}
                                            alt=""
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="first-section-container second_part hero-container hero-enhanced ready">
                <div className="logo-first-section logo-section">
                    <h1 className="headline copy-gradient">
                        iPhone&nbsp;14 and iPhone&nbsp;14&nbsp;Plus
                    </h1>
                    <picture
                        ref={myLogo}
                        className="overview-hero-hero-iphone-14-logo"
                    >
                        <source
                            srcSet={
                                (require("./../../../assets/images/sections/firstSection/iphone_14_small_734px.png"),
                                require("./../../../assets/images/sections/firstSection/iphone_14_small_2x_734px.png"))
                            }
                            media="(max-width:734px)"
                        />
                        <source
                            srcSet={
                                (require("./../../../assets/images/sections/firstSection/iphone_14_medium_1068px.png"),
                                require("./../../../assets/images/sections/firstSection/iphone_14_medium_2x_1068px.png"))
                            }
                            media="(max-width:1068px)"
                        />
                        <source
                            srcSet={
                                (require("./../../../assets/images/sections/firstSection/iphone_14_large_0px.png"),
                                require("./../../../assets/images/sections/firstSection/iphone_14_large_2x_0px.png"))
                            }
                            media="(min-width:0px)"
                        />
                        <img
                            src={require("./../../../assets/images/sections/firstSection/iphone_14_large_0px.png")}
                            alt=""
                        />
                    </picture>
                </div>
                <div className="sticky-container show-sticky-container">
                    <div className="sticky-wrapper">
                        <div
                            className="sticky-inner-wrapper"
                            style={{
                                transform: `matrix(1, 0, 0, 1, 0, ${
                                    offset > 0 && offset <= 100
                                        ? innerHeight +
                                          (offset / (offset / 100)) * -0.36055
                                        : offset > 100 && offset <= 200
                                        ? 625.945 +
                                          (offset / (offset / 100)) * -3.14269
                                        : offset > 200 && offset <= 300
                                        ? 311.676 +
                                          (offset / (offset / 100)) * -1.31066
                                        : offset > 300 && offset <= 400
                                        ? 180.61 +
                                          (offset / (offset / 100)) * -0.10547
                                        : offset > 300 && offset <= 400
                                        ? 170.063 +
                                          (offset / (offset / 100)) * -0.36341
                                        : offset > 300 && offset <= 400
                                        ? 133.722 +
                                          (offset / (offset / 100)) * -1.173687
                                        : offset > 300 && offset <= 400
                                        ? 16.3533 +
                                          (offset / (offset / 100)) * -0.1626961
                                        : offset > 400 && offset <= 500
                                        ? 0.08236842 +
                                          (offset / (offset / 100)) *
                                              -0.000836842
                                        : offset > 500
                                        ? 0
                                        : innerHeight
                                })`,
                            }}
                        >
                            <div className="hero-display-section">
                                <div className="devices-container">
                                    <div className="iphone-14-phone-container md:w-1/2">
                                        <div className="display-headline-container big-headline-container">
                                            <div
                                                className="big-container"
                                                style={{
                                                    transform: `matrix(${
                                                        offset > 0 &&
                                                        offset <= 200
                                                            ? offset *
                                                                  0.0033005533333333 +
                                                              0.3
                                                            : offset > 300 &&
                                                              offset <= 400
                                                            ? Math.abs(
                                                                  1 -
                                                                      offset *
                                                                          0.0033005533333333 *
                                                                          0.9
                                                              )
                                                            : offset > 400
                                                            ? 0
                                                            : 1
                                                    }, 0, 0, ${
                                                        offset > 0 &&
                                                        offset <= 200
                                                            ? offset *
                                                                  0.0033005533333333 +
                                                              0.3
                                                            : offset > 300 &&
                                                              offset <= 400
                                                            ? Math.abs(
                                                                  1 -
                                                                      offset *
                                                                          0.0033005533333333 *
                                                                          0.9
                                                              )
                                                            : offset > 400
                                                            ? 0
                                                            : 1
                                                    }, 0, ${
                                                        offset > 100 &&
                                                        offset <= 300
                                                            ? 50 -
                                                              (offset *
                                                                  0.3641791044776119 +
                                                                  19)
                                                            : offset > 300 &&
                                                              offset < 400
                                                            ? -72 +
                                                              (offset *
                                                                  0.3641791044776119 *
                                                                  0.6 +
                                                                  19)
                                                            : offset > 400
                                                            ? -72
                                                            : 50
                                                    })`,
                                                }}
                                            >
                                                <p className="display-headline">
                                                    Big
                                                </p>
                                            </div>
                                        </div>
                                        <div className="position-wrapper phone-container">
                                            <div
                                                className="specs-container-wrapper iphone-14-specs-container"
                                                style={{
                                                    transform: ` matrix(1, 0, 0, 1, ${
                                                        offset >= 300 &&
                                                        offset <= 400
                                                            ? -120 +
                                                              (offset - 300) *
                                                                  -1.65803
                                                            : offset >= 400 &&
                                                              offset <= 500
                                                            ? -289
                                                            : offset >= 500 &&
                                                              offset <= 600
                                                            ? -289 +
                                                              (offset - 500) *
                                                                  1.65803
                                                            : -120
                                                    }, 0)`,
                                                    opacity:
                                                        offset >= 500 &&
                                                        offset <= 600
                                                            ? 1 -
                                                              (offset - 500) *
                                                                  0.01
                                                            : offset >= 600
                                                            ? 0
                                                            : 1,
                                                }}
                                            >
                                                <div className="specs-container">
                                                    <p className="product-name">
                                                        iPhone&nbsp;14
                                                    </p>
                                                    <p className="product-size">
                                                        6.1″
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="image-container iphone-14-image-container"
                                                style={{
                                                    transform: `matrix(${
                                                        offset >= 500 &&
                                                        offset <= 600
                                                            ? 1 -
                                                              (offset - 500) *
                                                                  0.0000043
                                                            : offset > 600 &&
                                                              offset <= 700
                                                            ? 1 -
                                                              (offset - 600) *
                                                                  0.00026989 +
                                                              0.00043
                                                            : offset > 700 &&
                                                              offset <= 800
                                                            ? 1 -
                                                              (offset - 700) *
                                                                  0.00143218 +
                                                              0.026989
                                                            : offset > 800 &&
                                                              offset <= 900
                                                            ? 1 -
                                                              (offset - 800) *
                                                                  0.00325261 +
                                                              0.143218
                                                            : offset > 900
                                                            ? 0.5
                                                            : 1
                                                    }, 0, 0, ${
                                                        offset >= 500 &&
                                                        offset <= 600
                                                            ? 1 -
                                                              (offset - 500) *
                                                                  0.0000043
                                                            : offset > 600 &&
                                                              offset <= 700
                                                            ? 1 -
                                                              (offset - 600) *
                                                                  0.00026989 +
                                                              0.00043
                                                            : offset > 700 &&
                                                              offset <= 800
                                                            ? 1 -
                                                              (offset - 700) *
                                                                  0.00143218 +
                                                              0.026989
                                                            : offset > 800 &&
                                                              offset <= 900
                                                            ? 1 -
                                                              (offset - 800) *
                                                                  0.00325261 +
                                                              0.143218
                                                            : offset > 900
                                                            ? 0.5
                                                            : 1
                                                    }, ${
                                                        offset >= 500 &&
                                                        offset <= 600
                                                            ? (offset - 500) *
                                                              -0.37864215
                                                            : offset > 600 &&
                                                              offset <= 700
                                                            ? (offset - 600) *
                                                                  -2.009298 +
                                                              -37.864215
                                                            : offset > 700 &&
                                                              offset <= 800
                                                            ? (offset - 700) *
                                                                  -4.56328 +
                                                              -200.9298
                                                            : offset > 800 &&
                                                              offset <= 900
                                                            ? (offset - 800) *
                                                                  -0.05755 +
                                                              -456.328
                                                            : offset > 900
                                                            ? -701.48
                                                            : 0
                                                    }, 0)`,
                                                }}
                                            >
                                                <picture className="overview-hero-hero-iphone-14">
                                                    <source
                                                        srcSet={
                                                            (require("./../../../assets/images/sections/firstSection/iphone_14_small.jpg"),
                                                            require("./../../../assets/images/sections/firstSection/iphone_14_small_2x.jpg"))
                                                        }
                                                        media="(max-width:734px)"
                                                    />
                                                    <source
                                                        srcSet={
                                                            (require("./../../../assets/images/sections/firstSection/iphone_14_medium.jpg"),
                                                            require("./../../../assets/images/sections/firstSection/iphone_14_medium_2x.jpg"))
                                                        }
                                                        media="(max-width:1068px)"
                                                    />
                                                    <source
                                                        srcSet={
                                                            (require("./../../../assets/images/sections/firstSection/iphone_14_large.jpg"),
                                                            require("./../../../assets/images/sections/firstSection/iphone_14_large_2x.jpg"))
                                                        }
                                                        media="(min-width:0px)"
                                                    />
                                                    <img
                                                        src={require("./../../../assets/images/sections/firstSection/iphone_14_large_2x.jpg")}
                                                        alt=""
                                                    />
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 iphone-14-plus-phone-container">
                                        <div className="display-headline-container bigger-headline-container">
                                            <div
                                                className="bigger-container"
                                                style={{
                                                    transform: `matrix(${
                                                        offset >= 0 &&
                                                        offset <= 200
                                                            ? offset *
                                                              0.004154095
                                                            : offset > 300 &&
                                                              offset < 400
                                                            ? Math.abs(
                                                                  1 -
                                                                      offset *
                                                                          0.004154095
                                                              )
                                                            : offset > 400
                                                            ? 0
                                                            : 1
                                                    }, 0, 0, ${
                                                        offset >= 0 &&
                                                        offset <= 200
                                                            ? offset *
                                                              0.004154095
                                                            : offset > 300 &&
                                                              offset < 400
                                                            ? Math.abs(
                                                                  1 -
                                                                      offset *
                                                                          0.004154095
                                                              )
                                                            : offset >= 400
                                                            ? 0
                                                            : 1
                                                    }, 0, ${
                                                        offset > 100 &&
                                                        offset <= 300
                                                            ? 50 -
                                                              offset *
                                                                  0.5882352941176471 +
                                                              10
                                                            : offset > 300 &&
                                                              offset < 400
                                                            ? -120 +
                                                              offset *
                                                                  0.5882352941176471 +
                                                              10
                                                            : offset >= 400
                                                            ? -120
                                                            : 50
                                                    })`,
                                                }}
                                            >
                                                <p className="display-headline">
                                                    and bigger.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="position-wrapper phone-container">
                                            <div
                                                className="specs-container-wrapper iphone-14-plus-specs-container"
                                                style={{
                                                    transform: `matrix(1, 0, 0, 1, ${
                                                        offset >= 300 &&
                                                        offset <= 400
                                                            ? 80 +
                                                              (offset - 300) *
                                                                  2.13
                                                            : offset >= 400 &&
                                                              offset <= 500
                                                            ? 293
                                                            : offset >= 500 &&
                                                              offset <= 600
                                                            ? 293 -
                                                              (offset - 500) *
                                                                  2.13
                                                            : 80
                                                    }, 0)`,
                                                    opacity:
                                                        offset >= 500 &&
                                                        offset <= 600
                                                            ? 1 -
                                                              (offset - 500) *
                                                                  0.01
                                                            : offset >= 600
                                                            ? 0
                                                            : 1,
                                                }}
                                            >
                                                <div className="specs-container">
                                                    <p className="product-name typography-tout">
                                                        iPhone&nbsp;14&nbsp;Plus
                                                    </p>
                                                    <p className="product-size">
                                                        6.7″
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="image-container iphone-14-plus-image-container"
                                                style={{
                                                    transform: `matrix(${
                                                        offset >= 500 &&
                                                        offset <= 600
                                                            ? 1 -
                                                              (offset - 500) *
                                                                  0.0000043
                                                            : offset > 600 &&
                                                              offset <= 700
                                                            ? 1 -
                                                              (offset - 600) *
                                                                  0.00026989 +
                                                              0.00043
                                                            : offset > 700 &&
                                                              offset <= 800
                                                            ? 1 -
                                                              (offset - 700) *
                                                                  0.00143218 +
                                                              0.026989
                                                            : offset > 800 &&
                                                              offset <= 900
                                                            ? 1 -
                                                              (offset - 800) *
                                                                  0.00325261 +
                                                              0.143218
                                                            : offset > 900
                                                            ? 0.5
                                                            : 1
                                                    }, 0, 0, ${
                                                        offset >= 500 &&
                                                        offset <= 600
                                                            ? 1 -
                                                              (offset - 500) *
                                                                  0.0000043
                                                            : offset > 600 &&
                                                              offset <= 700
                                                            ? 1 -
                                                              (offset - 600) *
                                                                  0.00026989 +
                                                              0.00043
                                                            : offset > 700 &&
                                                              offset <= 800
                                                            ? 1 -
                                                              (offset - 700) *
                                                                  0.00143218 +
                                                              0.026989
                                                            : offset > 800 &&
                                                              offset <= 900
                                                            ? 1 -
                                                              (offset - 800) *
                                                                  0.00325261 +
                                                              0.143218
                                                            : offset > 900
                                                            ? 0.5
                                                            : 1
                                                    }, ${
                                                        offset >= 500 &&
                                                        offset <= 600
                                                            ? (offset - 500) *
                                                              0.37864215
                                                            : offset > 600 &&
                                                              offset <= 700
                                                            ? (offset - 600) *
                                                                  2.009298 +
                                                              37.864215
                                                            : offset > 700 &&
                                                              offset <= 800
                                                            ? (offset - 700) *
                                                                  4.56328 +
                                                              200.9298
                                                            : offset > 800 &&
                                                              offset <= 900
                                                            ? (offset - 800) *
                                                                  0.05755 +
                                                              456.328
                                                            : offset > 900
                                                            ? 701.48
                                                            : 0
                                                    }, 0)`,
                                                }}
                                            >
                                                <picture className="overview-hero-hero-iphone-14-plus">
                                                    <source
                                                        srcSet={
                                                            (require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_small.jpg"),
                                                            require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_small_2x.jpg"))
                                                        }
                                                        media="(max-width:734px)"
                                                    />
                                                    <source
                                                        srcSet={
                                                            (require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_medium.jpg"),
                                                            require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_medium_2x.jpg"))
                                                        }
                                                        media="(max-width:1068px)"
                                                    />
                                                    <source
                                                        srcSet={
                                                            (require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_large.jpg"),
                                                            require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_large_2x.jpg"))
                                                        }
                                                        media="(min-width:0px)"
                                                    />
                                                    <img
                                                        src={require("./../../../assets/images/sections/firstSection/hero_iphone_14_plus_large_2x.jpg")}
                                                        alt=""
                                                    />
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="manifesto-section manifesto-section-1">
                                <div
                                    className="manifesto-container battery-container"
                                    style={{
                                        transform: `matrix3d(${
                                            offset >= 500 && offset <= 600
                                                ? (offset - 500) * 0.0001856 +
                                                  0.125
                                                : offset > 600 && offset <= 700
                                                ? (offset - 600) * 0.0052009 +
                                                  0.14356
                                                : offset > 700 && offset <= 800
                                                ? (offset - 700) * 0.00153771 +
                                                  0.66365
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * 0.00028032 +
                                                  0.817421
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) * 0.001469 +
                                                  0.845453
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) * 0.00163775 +
                                                  0.992353
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) * 0.00016932 +
                                                  0.828578
                                                : offset > 1200
                                                ? 0.811646
                                                : 0.125
                                        }, ${
                                            offset >= 500 && offset <= 600
                                                ? (offset - 500) *
                                                  -0.00000020688
                                                : offset > 600 && offset <= 700
                                                ? (offset - 600) *
                                                      -0.00104522688 +
                                                  -0.000020688
                                                : offset > 700 && offset <= 800
                                                ? (offset - 700) * -0.00178724 +
                                                  -0.104502
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * -0.00522199 +
                                                  -0.283226
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) *
                                                      0.0024046437 +
                                                  -0.238973
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) *
                                                      -0.0045406237 +
                                                  0.00149137
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) *
                                                      -0.00035216 +
                                                  -0.452571
                                                : offset > 1200
                                                ? -0.487787
                                                : 0
                                        }, ${
                                            offset >= 500 && offset <= 600
                                                ? (offset - 500) * 0.000018614
                                                : offset > 600 && offset <= 700
                                                ? (offset - 600) * 0.002756336 +
                                                  0.0018614
                                                : offset > 700 && offset <= 800
                                                ? (offset - 700) * 0.00215865 +
                                                  0.277495
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * -0.00015761 +
                                                  0.49336
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) * -0.00601018 +
                                                  0.477599
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) *
                                                      -0.00206184 +
                                                  -0.123419
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) * 0.00008209 +
                                                  -0.329603
                                                : offset > 1200
                                                ? -0.321394
                                                : 0
                                        }, 0, ${
                                            offset >= 500 && offset <= 600
                                                ? 0
                                                : offset > 600 && offset <= 700
                                                ? 0
                                                : offset > 700 && offset <= 800
                                                ? 0
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * -0.0000274251
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) *
                                                      -0.0004347859 +
                                                  -0.00274251
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) *
                                                      0.000008338 +
                                                  -0.0462211
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) *
                                                      0.000018094 +
                                                  -0.0453873
                                                : offset > 1200
                                                ? -0.0435779
                                                : 0
                                        }, ${
                                            offset >= 500 && offset <= 600
                                                ? (offset - 500) * 0.00018546 +
                                                  0.125
                                                : offset > 600 && offset <= 700
                                                ? (offset - 600) * 0.00536679 +
                                                  0.143564
                                                : offset > 700 && offset <= 800
                                                ? (offset - 700) * 0.00183446 +
                                                  0.680243
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * 0.00028654 +
                                                  0.863689
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) * 0.00039316 +
                                                  0.892343
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) *
                                                      -0.00399184 +
                                                  0.931659
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) *
                                                      -0.00034378 +
                                                  0.532475
                                                : offset > 1200
                                                ? 0.498097
                                                : 0.125
                                        }, ${
                                            offset >= 500 && offset <= 600
                                                ? (offset - 500) * 0.0000159559
                                                : offset > 600 && offset <= 700
                                                ? (offset - 600) *
                                                      0.0025457741 +
                                                  0.00159559
                                                : offset > 700 && offset <= 800
                                                ? (offset - 700) * 0.0023965 +
                                                  0.256173
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * -0.00044473 +
                                                  0.495823
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) * -0.00811733 +
                                                  0.45135
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) *
                                                      -0.00484845 +
                                                  -0.360383
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) *
                                                      -0.00020797 +
                                                  -0.845228
                                                : offset > 1200
                                                ? -0.866025
                                                : 0
                                        }, 0,${
                                            offset >= 500 && offset <= 600
                                                ? (offset - 500) * -0.000129657
                                                : offset > 600 && offset <= 700
                                                ? (offset - 600) *
                                                      -0.003949703 +
                                                  -0.0129657
                                                : offset > 700 && offset <= 800
                                                ? (offset - 700) * -0.00163288 +
                                                  -0.407936
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * 0.00037181 +
                                                  -0.571224
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) * 0.0064849 +
                                                  -0.534043
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) * 0.00443584 +
                                                  0.114447
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) * 0.0002449 +
                                                  0.558031
                                                : offset > 1200
                                                ? 0.582521
                                                : 0
                                        }, ${
                                            offset >= 500 && offset <= 600
                                                ? (offset - 500) * -0.000111126
                                                : offset > 600 && offset <= 700
                                                ? (offset - 600) *
                                                      -0.003106584 +
                                                  -0.0111126
                                                : offset > 700 && offset <= 800
                                                ? (offset - 700) * -0.00086877 +
                                                  -0.321771
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * 0.00025743 +
                                                  -0.408648
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) * 0.00746237 +
                                                  -0.382905
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) * 0.00351965 +
                                                  0.363332
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) * 0.00001615 +
                                                  0.715297
                                                : offset > 1200
                                                ? 0.716912
                                                : 0
                                        }, ${
                                            offset >= 500 && offset <= 600
                                                ? (offset - 500) * -0.00000146 +
                                                  1
                                                : offset > 600 && offset <= 700
                                                ? (offset - 600) * -0.00145423 +
                                                  0.999854
                                                : offset > 700 && offset <= 800
                                                ? (offset - 700) * -0.00142595 +
                                                  0.854431
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * 0.00041942 +
                                                  0.711836
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) * 0.00170826 +
                                                  0.753778
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) *
                                                      -0.00503948 +
                                                  0.924604
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) *
                                                      -0.00037634 +
                                                  0.420656
                                                : offset > 1200
                                                ? 0.383022
                                                : 1
                                        }, 0, 0, ${
                                            offset >= 500 && offset <= 600
                                                ? 0
                                                : offset > 600 && offset <= 700
                                                ? 0
                                                : offset > 700 && offset <= 800
                                                ? 0
                                                : offset > 800 && offset <= 900
                                                ? (offset - 800) * -0.213951
                                                : offset > 900 && offset <= 1000
                                                ? (offset - 900) * -3.236899 +
                                                  -21.3951
                                                : offset > 1000 &&
                                                  offset <= 1100
                                                ? (offset - 1000) * -2.46865 +
                                                  -345.085
                                                : offset > 1100 &&
                                                  offset <= 1200
                                                ? (offset - 1100) * -0.1555 +
                                                  -591.95
                                                : offset > 1200
                                                ? -607.5
                                                : 0
                                        }, 0, 1)`,
                                        opacity:
                                            offset >= 500 && offset <= 600
                                                ? (offset - 500) * 0.00475354
                                                : offset > 600 && offset <= 700
                                                ? (offset - 600) * 0.00524646 +
                                                  0.475354
                                                : offset > 700
                                                ? 1
                                                : 0,
                                    }}
                                >
                                    <div className="battery-icon-container">
                                        <div
                                            className="overlay"
                                            style={{
                                                transform: `matrix(${
                                                    offset >= 500 &&
                                                    offset <= 600
                                                        ? (offset - 500) *
                                                          0.00178258
                                                        : offset > 600 &&
                                                          offset <= 700
                                                        ? (offset - 600) *
                                                              0.00366032 +
                                                          0.178258
                                                        : offset > 700 &&
                                                          offset <= 800
                                                        ? (offset - 700) *
                                                              0.00366032 +
                                                          0.54429
                                                        : offset > 800 &&
                                                          offset <= 900
                                                        ? (offset - 800) *
                                                              0.00089678 +
                                                          0.910322
                                                        : offset > 900
                                                        ? 1
                                                        : 0
                                                }, 0, 0, 1, 0, 0)`,
                                            }}
                                        >
                                            <div className="scaler">
                                                <picture className="overview-hero-hero-battery-fill">
                                                    <source
                                                        srcSet={
                                                            (require("./../../../assets/images/sections/firstSection/hero_battery_fill_small.png"),
                                                            require("./../../../assets/images/sections/firstSection/hero_battery_fill_small_2x.png"))
                                                        }
                                                        media="(max-width:734px)"
                                                    />
                                                    <source
                                                        srcSet={
                                                            (require("./../../../assets/images/sections/firstSection/hero_battery_fill_medium.png"),
                                                            require("./../../../assets/images/sections/firstSection/hero_battery_fill_medium_2x.png"))
                                                        }
                                                        media="(max-width:1068px)"
                                                    />
                                                    <source
                                                        srcSet={
                                                            (require("./../../../assets/images/sections/firstSection/hero_battery_fill_large.png"),
                                                            require("./../../../assets/images/sections/firstSection/hero_battery_fill_large_2x.png"))
                                                        }
                                                        media="(min-width:0px)"
                                                    />
                                                    <img
                                                        src={require("./../../../assets/images/sections/firstSection/hero_battery_fill_large.png")}
                                                        alt=""
                                                    />
                                                </picture>
                                            </div>
                                        </div>
                                        <picture className="overview-hero-hero-battery">
                                            <source
                                                srcSet={
                                                    (require("./../../../assets/images/sections/firstSection/hero_battery_small.png"),
                                                    require("./../../../assets/images/sections/firstSection/hero_battery_small_2x.png"))
                                                }
                                                media="(max-width:734px)"
                                            />
                                            <source
                                                srcSet={
                                                    (require("./../../../assets/images/sections/firstSection/hero_battery_medium.png"),
                                                    require("./../../../assets/images/sections/firstSection/hero_battery_medium_2x.png"))
                                                }
                                                media="(max-width:1068px)"
                                            />
                                            <source
                                                srcSet={
                                                    (require("./../../../assets/images/sections/firstSection/hero_battery_large.png"),
                                                    require("./../../../assets/images/sections/firstSection/hero_battery_large_2x.png"))
                                                }
                                                media="(min-width:0px)"
                                            />
                                            <img
                                                src={require("./../../../assets/images/sections/firstSection/hero_battery_large.png")}
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                    <div className="manifesto-text-container">
                                        <p className="battery-text manifesto-text">
                                            Our longest battery life ever.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="manifesto-section manifesto-bottom">
                    <div className="manifesto-text battery-container">
                        <div className="manifesto-text-container">
                            <p className="battery-text">
                                Our longest battery life ever.
                            </p>
                        </div>
                    </div>
                    <div className="manifesto-scroll-container">
                        <div className="manifesto-sticky-wrapper">
                            <div
                                className="manifesto-text safety-container"
                                style={{
                                    transform: `matrix3d(${
                                        offset >= 900 && offset <= 1000
                                            ? (offset - 900) * -0.002115 +
                                              1.59748
                                            : offset > 1000 && offset <= 1100
                                            ? (offset - 1000) * -0.0027601 +
                                              1.3859
                                            : offset > 1100 && offset <= 1200
                                            ? (offset - 1100) * -0.00145517 +
                                              1.10989
                                            : offset > 1200 && offset <= 1300
                                            ? (offset - 1200) * -0.00015672 +
                                              0.964373
                                            : offset > 1300 && offset <= 1400
                                            ? (offset - 1300) * 0.00102359 +
                                              0.948701
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * 0.0012308 +
                                              1.05106
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * 0.0002586 +
                                              1.17414
                                            : offset > 1700
                                            ? 1.2
                                            : 1.59748
                                    }, ${
                                        offset >= 900 && offset <= 1000
                                            ? (offset - 900) * 0.00026338 +
                                              -0.198862
                                            : offset > 1000 && offset <= 1100
                                            ? (offset - 1000) * 0.0003436 +
                                              -0.172524
                                            : offset > 1100 && offset <= 1200
                                            ? (offset - 1100) * 0.00018114 +
                                              -0.138164
                                            : offset > 1200 && offset <= 1300
                                            ? (offset - 1200) * 0.0000894 +
                                              -0.12005
                                            : offset > 1300 && offset <= 1400
                                            ? (offset - 1300) * 0.000615798 +
                                              -0.11111
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * 0.0004733607 +
                                              -0.0495302
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * 0.0000219413 +
                                              -0.00219413
                                            : offset > 1700
                                            ? 0
                                            : -0.198862
                                    },${
                                        offset >= 900 && offset <= 1000
                                            ? (offset - 900) * 0.00072362 +
                                              -0.546369
                                            : offset > 1000 && offset <= 1100
                                            ? (offset - 1000) * 0.00094404 +
                                              -0.172524
                                            : offset > 1100 && offset <= 1200
                                            ? (offset - 1100) * 0.00049768 +
                                              -0.138164
                                            : offset > 1200 && offset <= 1300
                                            ? (offset - 1200) * 0.00014528 +
                                              -0.12005
                                            : offset > 1300 && offset <= 1400
                                            ? (offset - 1300) * 0.00089814 +
                                              -0.11111
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * 0.001747603 +
                                              -0.0495302
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * 0.000507327 + 0
                                            : offset > 1700
                                            ? 0
                                            : 0
                                    }, 0, 0, ${
                                        offset >= 900 && offset <= 1000
                                            ? (offset - 900) * -0.0021158 +
                                              1.59748
                                            : offset > 1000 && offset <= 1100
                                            ? (offset - 1000) * -0.002761 +
                                              1.3859
                                            : offset > 1100 && offset <= 1200
                                            ? (offset - 1100) * -0.00145517 +
                                              1.10989
                                            : offset > 1200 && offset <= 1300
                                            ? (offset - 1200) * -0.00015672 +
                                              0.964373
                                            : offset > 1300 && offset <= 1400
                                            ? (offset - 1300) * 0.00102359 +
                                              0.948701
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * 0.0012308 +
                                              1.05106
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * 0.0002586 +
                                              1.17414
                                            : offset > 1700
                                            ? 1.2
                                            : 1.59748
                                    }, ${
                                        offset >= 900 && offset <= 1000
                                            ? (offset - 900) * 0.00077007 +
                                              -0.581434
                                            : offset > 1000 && offset <= 1100
                                            ? (offset - 1000) * 0.00100462 +
                                              -0.504427
                                            : offset > 1100 && offset <= 1200
                                            ? (offset - 1100) * 0.00052962 +
                                              -0.403965
                                            : offset > 1200 && offset <= 1300
                                            ? (offset - 1200) * 0.00016692 +
                                              -0.351003
                                            : offset > 1300 && offset <= 1400
                                            ? (offset - 1300) * 0.00334311 +
                                              -0.334311
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * 0.001800879 +
                                              -0.230868
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * 0.000507801 +
                                              -0.0507801
                                            : offset > 1700
                                            ? 0
                                            : -0.581434
                                    }, 0,${
                                        offset >= 900 && offset <= 1000
                                            ? 0.34202
                                            : offset > 1000 && offset <= 1100
                                            ? 0.34202
                                            : offset > 1100 && offset <= 1200
                                            ? 0.34202
                                            : offset > 1200 && offset <= 1300
                                            ? (offset - 1200) * -0.00009664 +
                                              0.34202
                                            : offset > 1300 && offset <= 1400
                                            ? (offset - 1300) * -0.00117817 +
                                              0.332356
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * -0.001713305 +
                                              0.214539
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * -0.000432085 +
                                              0.0432085
                                            : offset > 1700
                                            ? 0
                                            : 0.34202
                                    } , ${
                                        offset >= 900 && offset <= 1000
                                            ? 0.321394
                                            : offset > 1000 && offset <= 1100
                                            ? 0.321394
                                            : offset > 1100 && offset <= 1200
                                            ? 0.321394
                                            : offset > 1200 && offset <= 1300
                                            ? (offset - 1200) * -0.00007931 +
                                              0.321394
                                            : offset > 1300 && offset <= 1400
                                            ? (offset - 1300) * -0.0010392 +
                                              0.313463
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * -0.001663749 +
                                              0.209543
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * -0.000431681 +
                                              0.0431681
                                            : offset > 1700
                                            ? 0
                                            : 0.321394
                                    },${
                                        offset >= 900 && offset <= 1000
                                            ? 0.883022
                                            : offset > 1000 && offset <= 1100
                                            ? 0.883022
                                            : offset > 1100 && offset <= 1200
                                            ? 0.883022
                                            : offset > 1200 && offset <= 1300
                                            ? (offset - 1200) * 0.00006517 +
                                              0.883022
                                            : offset > 1300 && offset <= 1400
                                            ? (offset - 1300) * 0.00064434 +
                                              0.889539
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * 0.0004416 +
                                              0.953973
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * 0.00001867 +
                                              0.998133
                                            : offset > 1700
                                            ? 1
                                            : 0.883022
                                    } , 0, 0, ${
                                        offset >= 900 && offset <= 1000
                                            ? (offset - 900) * -3.81956 + 1187.5
                                            : offset > 1000 && offset <= 1100
                                            ? (offset - 1000) * -4.98294 +
                                              805.544
                                            : offset > 1100 && offset <= 1200
                                            ? (offset - 1100) * -2.62695 +
                                              307.25
                                            : offset > 1200 && offset <= 1300
                                            ? (offset - 1200) * -0.794769 +
                                              44.555
                                            : offset > 1300 && offset <= 1400
                                            ? (offset - 1300) * -4.170131 +
                                              -34.9219
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * -5.88525 +
                                              -451.935
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * -1.47034 +
                                              -1040.46
                                            : offset > 1700
                                            ? -1187.5
                                            : 1187.5
                                    }, 0, 1)`,
                                }}
                            >
                                <div className="safety-icon-container">
                                    <div className="icon-solid-circle">
                                        <picture className="overview-hero-hero-sos-icon image-sos-icon">
                                            <source
                                                srcSet={
                                                    (require("./../../../assets/images/sections/firstSection/hero_sos_icon_small.png"),
                                                    require("./../../../assets/images/sections/firstSection/hero_sos_icon_small_2x.png"))
                                                }
                                                media="(max-width:734px)"
                                            />
                                            <source
                                                srcSet={
                                                    (require("./../../../assets/images/sections/firstSection/hero_sos_icon_medium.png"),
                                                    require("./../../../assets/images/sections/firstSection/hero_sos_icon_medium_2x.png"))
                                                }
                                                media="(max-width:1068px)"
                                            />
                                            <source
                                                srcSet={
                                                    (require("./../../../assets/images/sections/firstSection/hero_sos_icon_large.png"),
                                                    require("./../../../assets/images/sections/firstSection/hero_sos_icon_large_2x.png"))
                                                }
                                                media="(min-width:0px)"
                                            />
                                            <img
                                                src={require("./../../../assets/images/sections/firstSection/hero_sos_icon_large.png")}
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                    <svg
                                        viewBox="0 0 150 150"
                                        className="icon-rings animate"
                                        data-animate-target=""
                                    >
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r="49"
                                            strokeWidth="1"
                                            fill="none"
                                            className="ring"
                                            style={{
                                                transform: ` matrix(${
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              0.000366 +
                                                          0.47
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              0.00109717 +
                                                          0.506602
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              0.00084142 +
                                                          0.616319
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              0.00058566 +
                                                          0.700461
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              0.00032992 +
                                                          0.759027
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              0.00007981 +
                                                          0.792019
                                                        : offset > 1700
                                                        ? 0.8
                                                        : 0.47
                                                }, 0, 0, ${
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              0.000366 +
                                                          0.47
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              0.00109717 +
                                                          0.506602
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              0.00084142 +
                                                          0.616319
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              0.00058566 +
                                                          0.700461
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              0.00032992 +
                                                          0.759027
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              0.00007981 +
                                                          0.792019
                                                        : offset > 1700
                                                        ? 0.8
                                                        : 0.47
                                                }, 0, 0)`,
                                                opacity:
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              -0.00083186 +
                                                          1
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              -0.00249357 +
                                                          0.916814
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              -0.00191231 +
                                                          0.667457
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              -0.00133107 +
                                                          0.476226
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              -0.00074981 +
                                                          0.343119
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              -0.00018138 +
                                                          0.268138
                                                        : offset > 1700
                                                        ? 0.25
                                                        : 1,
                                            }}
                                        ></circle>
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r="49"
                                            strokeWidth="1"
                                            fill="none"
                                            className="ring"
                                            style={{
                                                transform: ` matrix(${
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              0.0003882 +
                                                          0.55
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              0.00116366 +
                                                          0.58882
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              0.00089242 +
                                                          0.705186
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              0.00062116 +
                                                          0.794428
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              0.00034992 +
                                                          0.856544
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              -0.00891536 +
                                                          0.891536
                                                        : offset > 1700
                                                        ? 0.9
                                                        : 0.55
                                                }, 0, 0, ${
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              0.0003882 +
                                                          0.55
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              0.00116366 +
                                                          0.58882
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              0.00089242 +
                                                          0.705186
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              0.00062116 +
                                                          0.794428
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              0.00034992 +
                                                          0.856544
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              -0.00891536 +
                                                          0.891536
                                                        : offset > 1700
                                                        ? 0.9
                                                        : 0.55
                                                }, 0, 0)`,
                                                opacity:
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              -0.00066549 +
                                                          0.8
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              -0.00199485 +
                                                          0.733451
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              -0.00152985 +
                                                          0.533966
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              -0.00106486 +
                                                          0.380981
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              -0.00059985 +
                                                          0.274495
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              -0.00014511 +
                                                          0.21451
                                                        : offset > 1700
                                                        ? 0.2
                                                        : 0.8,
                                            }}
                                        ></circle>
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r="49"
                                            strokeWidth="1"
                                            fill="none"
                                            className="ring"
                                            style={{
                                                transform: ` matrix(${
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              0.0003882 +
                                                          0.65
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              0.00116367 +
                                                          0.68882
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              0.00089241 +
                                                          0.805187
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              0.00062116 +
                                                          0.894428
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              0.00034992 +
                                                          0.956544
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              0.00008464 +
                                                          0.991536
                                                        : offset > 1700
                                                        ? 1
                                                        : 0.65
                                                }, 0, 0, ${
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              0.0003882 +
                                                          0.65
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              0.00116367 +
                                                          0.68882
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              0.00089241 +
                                                          0.805187
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              0.00062116 +
                                                          0.894428
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              0.00034992 +
                                                          0.956544
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              0.00008464 +
                                                          0.991536
                                                        : offset > 1700
                                                        ? 1
                                                        : 0.65
                                                }, 0, 0)`,
                                                opacity:
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              -0.00055457 +
                                                          0.65
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              -0.00166238 +
                                                          0.594543
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              -0.00127488 +
                                                          0.428305
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              -0.00088737 +
                                                          0.300817
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              -0.00049988 +
                                                          0.21208
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              -0.00012092 +
                                                          0.162092
                                                        : offset > 1700
                                                        ? 0.15
                                                        : 0.65,
                                            }}
                                        ></circle>
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r="49"
                                            strokeWidth="1"
                                            fill="none"
                                            className="ring"
                                            style={{
                                                transform: ` matrix(${
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              0.0003882 +
                                                          0.75
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              0.00116366 +
                                                          0.78882
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              0.000892412 +
                                                          0.905186
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              0.00062112 +
                                                          0.994428
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              0.00035 +
                                                          1.05654
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              0.0000846 +
                                                          1.09154
                                                        : offset > 1700
                                                        ? 1.1
                                                        : 0.75
                                                }, 0, 0, ${
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              0.0003882 +
                                                          0.75
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              0.00116366 +
                                                          0.78882
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              0.000892412 +
                                                          0.905186
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              0.00062112 +
                                                          0.994428
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              0.00035 +
                                                          1.05654
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              0.0000846 +
                                                          1.09154
                                                        : offset > 1700
                                                        ? 1.1
                                                        : 0.75
                                                }, 0, 0)`,
                                                opacity:
                                                    offset >= 1100 &&
                                                    offset <= 1200
                                                        ? (offset - 1100) *
                                                              -0.00044366 +
                                                          0.5
                                                        : offset > 1200 &&
                                                          offset <= 1300
                                                        ? (offset - 1200) *
                                                              -0.0013299 +
                                                          0.455634
                                                        : offset > 1300 &&
                                                          offset <= 1400
                                                        ? (offset - 1300) *
                                                              -0.0010199 +
                                                          0.322644
                                                        : offset > 1400 &&
                                                          offset <= 1500
                                                        ? (offset - 1400) *
                                                              -0.0007099 +
                                                          0.220654
                                                        : offset > 1500 &&
                                                          offset <= 1600
                                                        ? (offset - 1500) *
                                                              -0.0003999 +
                                                          0.149664
                                                        : offset > 1600 &&
                                                          offset <= 1700
                                                        ? (offset - 1600) *
                                                              -0.00009674 +
                                                          0.109674
                                                        : offset > 1700
                                                        ? 0.1
                                                        : 0.5,
                                            }}
                                        ></circle>
                                    </svg>
                                </div>
                                <p className="safety-text">
                                    Emergency SOS <span>via satellite.</span>
                                </p>
                            </div>
                            <div
                                className="manifesto-text camera-container"
                                style={{
                                    transform: `matrix(1, 0, 0, 1, 0, ${
                                        offset >= 1300 && offset <= 1400
                                            ? (offset - 1300) * -0.55658 + 782.5
                                            : offset > 1400 && offset <= 1500
                                            ? (offset - 1400) * -3.97436 +
                                              726.842
                                            : offset > 1500 && offset <= 1600
                                            ? (offset - 1500) * -2.421875 +
                                              329.406
                                            : offset > 1600 && offset <= 1700
                                            ? (offset - 1600) * -0.86939053 +
                                              87.2185
                                            : offset > 1700 && offset <= 1800
                                            ? (offset - 1700) * -0.99546847 +
                                              0.279447
                                            : offset > 1800 && offset <= 1900
                                            ? (offset - 1800) * -3.235516 +
                                              -99.2674
                                            : offset > 1900 && offset <= 2000
                                            ? (offset - 1900) * -5.4824 +
                                              -422.819
                                            : offset > 2000 && offset <= 2100
                                            ? (offset - 2000) * -1.61441 +
                                              -971.059
                                            : offset > 2100
                                            ? -1132.5
                                            : 782.5
                                    })`,
                                }}
                            >
                                <p
                                    className="camera-text"
                                    tabIndex="-1"
                                    style={{
                                        transform:
                                            "matrix3d(1.02186, -0.000870237, -0.0298141, 0, 0, 1.02186, -0.0298268, 0, 0.0291764, 0.029164, 0.999149, 0, 0, 0, 0, 1)",
                                    }}
                                >
                                    A huge leap in low‑light photos.
                                </p>
                                <picture className="overview-hero-hero-low-light image-low-light mt-3">
                                    <source
                                        srcSet={
                                            (require("./../../../assets/images/sections/firstSection/hero_low_light_small.jpg"),
                                            require("./../../../assets/images/sections/firstSection/hero_low_light_small_2x.jpg"))
                                        }
                                        media="(max-width:734px)"
                                    />
                                    <source
                                        srcSet={
                                            (require("./../../../assets/images/sections/firstSection/hero_low_light_medium.jpg"),
                                            require("./../../../assets/images/sections/firstSection/hero_low_light_medium_2x.jpg"))
                                        }
                                        media="(max-width:1068px)"
                                    />
                                    <source
                                        srcSet={
                                            (require("./../../../assets/images/sections/firstSection/hero_low_light_large.jpg"),
                                            require("./../../../assets/images/sections/firstSection/hero_low_light_large_2x.jpg"))
                                        }
                                        media="(min-width:0px)"
                                    />
                                    <img
                                        src={require("./../../../assets/images/sections/firstSection/hero_low_light_large.jpg")}
                                        alt=""
                                    />
                                </picture>
                            </div>
                            <div className="manifesto-text size-container">
                                <p className="size-text ">Big and bigger.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hardware-fan-first-section">
                    <div className="hardware-fan-scroll-container">
                        <div
                            className="hardware-fan-sticky-wrapper"
                            style={{ perspectiveOrigin: "50% 291.5px" }}
                        >
                            <div className="main-section-content">
                                <div className="link-container">
                                    <p
                                        className="headline copy-gradient"
                                        style={{
                                            opacity:
                                                offset > 2000 && offset <= 2100
                                                    ? (offset - 2000) *
                                                      0.00423212
                                                    : offset > 2100 &&
                                                      offset <= 2200
                                                    ? (offset - 2100) *
                                                          0.0057688 +
                                                      0.423212
                                                    : offset > 2200
                                                    ? 1
                                                    : 0,
                                        }}
                                    >
                                        iPhone&nbsp;14 and
                                        iPhone&nbsp;14&nbsp;Plus
                                    </p>
                                    <h2
                                        className="subheadline typography-hero-headline-super text-3xl md:text-[96px] md:my-12"
                                        style={{
                                            transform: `matrix3d(${
                                                offset >= 1900 && offset <= 2000
                                                    ? (offset - 1900) *
                                                          0.0149994 +
                                                      1
                                                    : offset > 2000 &&
                                                      offset <= 2100
                                                    ? (offset - 2000) *
                                                          -0.0119484 +
                                                      2.49994
                                                    : offset > 2100 &&
                                                      offset <= 2200
                                                    ? (offset - 2100) *
                                                          0.003051 +
                                                      1.3051
                                                    : offset > 2200
                                                    ? 1
                                                    : 1
                                            }, 0, 0, 0, 0, ${
                                                offset >= 1900 && offset <= 2000
                                                    ? (offset - 1900) *
                                                          0.0228383 +
                                                      6.12323e-17
                                                    : offset > 2000 &&
                                                      offset <= 2100
                                                    ? (offset - 2000) *
                                                          -0.0098347 +
                                                      2.28383
                                                    : offset > 2100 &&
                                                      offset <= 2200
                                                    ? (offset - 2100) *
                                                          -0.0030036 +
                                                      1.30036
                                                    : offset > 2200
                                                    ? 1
                                                    : 6.12323e-17
                                            }, ${
                                                offset >= 1900 && offset <= 2000
                                                    ? (offset - 1900) *
                                                          -0.0001678 +
                                                      -1
                                                    : offset > 2000 &&
                                                      offset <= 2100
                                                    ? (offset - 2000) *
                                                          0.00905721 +
                                                      -1.01678
                                                    : offset > 2100 &&
                                                      offset <= 2200
                                                    ? (offset - 2100) *
                                                          0.00111059 +
                                                      -0.111059
                                                    : offset > 2200
                                                    ? 0
                                                    : -1
                                            }, 0, 0, ${
                                                offset >= 1900 && offset <= 2000
                                                    ? (offset - 1900) *
                                                          -0.00593279 +
                                                      1
                                                    : offset > 2000 &&
                                                      offset <= 2100
                                                    ? (offset - 2000) *
                                                          -0.003216246 +
                                                      0.406721
                                                    : offset > 2100 &&
                                                      offset <= 2200
                                                    ? (offset - 2100) *
                                                          -0.000850964 +
                                                      0.0850964
                                                    : offset > 2200
                                                    ? 0
                                                    : 1
                                            }, ${
                                                offset >= 1900 && offset <= 2000
                                                    ? (offset - 1900) *
                                                          0.00913552 +
                                                      6.12323e-17
                                                    : offset > 2000 &&
                                                      offset <= 2100
                                                    ? (offset - 2000) *
                                                          0.00082821 +
                                                      0.913552
                                                    : offset > 2100 &&
                                                      offset <= 2200
                                                    ? (offset - 2100) *
                                                          0.00003627 +
                                                      0.996373
                                                    : offset > 2200
                                                    ? 1
                                                    : 6.12323e-17
                                            }, 0, 0, ${
                                                offset >= 1900 && offset <= 2000
                                                    ? (offset - 1900) *
                                                          0.26496 +
                                                      73.5
                                                    : offset > 2000 &&
                                                      offset <= 2100
                                                    ? (offset - 2000) *
                                                          -0.796561 +
                                                      99.996
                                                    : offset > 2100 &&
                                                      offset <= 2200
                                                    ? (offset - 2100) *
                                                          -0.203399 +
                                                      20.3399
                                                    : offset > 2200
                                                    ? 0
                                                    : 73.5
                                            }, 0, 1)`,
                                            opacity: offset < 1900 ? 0 : 1,
                                        }}
                                    >
                                        Wonderfull.
                                    </h2>
                                    <div className="fan-image-container">
                                        <div className="rotate-wrapper">
                                            <picture className="overview-hero-hero-all-colors image-all-colors">
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_all_colors_small.jpg"),
                                                        require("./../../../assets/images/sections/firstSection/hero_all_colors_small_2x.jpg"))
                                                    }
                                                    media="(max-width:734px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_all_colors_medium.jpg"),
                                                        require("./../../../assets/images/sections/firstSection/hero_all_colors_medium_2x.jpg"))
                                                    }
                                                    media="(max-width:1068px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_all_colors_large.jpg"),
                                                        require("./../../../assets/images/sections/firstSection/hero_all_colors_large_2x.jpg"))
                                                    }
                                                    media="(min-width:0px)"
                                                />
                                                <img
                                                    src={require("./../../../assets/images/sections/firstSection/hero_all_colors_large.jpg")}
                                                    alt=""
                                                />
                                            </picture>
                                            <picture
                                                className="overview-hero-hero-midnight image-hardware-enhanced image-midnight"
                                                style={{
                                                    "--starburst-radius":
                                                        " 160%",
                                                    transform: ` matrix(${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.000000904513
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.008536435487 +
                                                              9.04513e-5
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  0.00146266 +
                                                              0.853734
                                                            : offset > 2200
                                                            ? 1
                                                            : 0
                                                    }, 0, 0, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.000000904513
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.008536435487 +
                                                              9.04513e-5
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  0.00146266 +
                                                              0.853734
                                                            : offset > 2200
                                                            ? 1
                                                            : 0
                                                    }, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                                  -0.00042 +
                                                              460
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  -3.926757 +
                                                              459.958
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  -0.0672823 +
                                                              67.2823
                                                            : offset > 2200
                                                            ? 0
                                                            : 460
                                                    }, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                                  -0.00058 +
                                                              640
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  -5.463318 +
                                                              639.942
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  -0.936102 +
                                                              93.6102
                                                            : offset > 2200
                                                            ? 0
                                                            : 640
                                                    })`,
                                                }}
                                            >
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_midnight_small.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_midnight_small_2x.png"))
                                                    }
                                                    media="(max-width:734px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_midnight_medium.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_midnight_medium_2x.png"))
                                                    }
                                                    media="(max-width:1068px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_midnight_large.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_midnight_large_2x.png"))
                                                    }
                                                    media="(min-width:0px)"
                                                />
                                                <img
                                                    src={require("./../../../assets/images/sections/firstSection/hero_midnight_large.png")}
                                                    alt=""
                                                />
                                            </picture>
                                            <picture
                                                className="overview-hero-hero-blue image-hardware-enhanced image-blue"
                                                style={{
                                                    "--starburst-radius":
                                                        "151%",
                                                    transform: `matrix(${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.00113869
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.00884096 +
                                                              0.113869
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  0.00002035 +
                                                              0.997965
                                                            : offset > 2200
                                                            ? 1
                                                            : 0
                                                    }, 0, 0, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.00113869
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.00884096 +
                                                              0.113869
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  0.00002035 +
                                                              0.997965
                                                            : offset > 2200
                                                            ? 1
                                                            : 0
                                                    }, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                                  -0.29606 +
                                                              260
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  -2.29864973 +
                                                              230.394
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  -0.00529027 +
                                                              0.529027
                                                            : offset > 2200
                                                            ? 0
                                                            : 260
                                                    }, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                                  -0.86541 +
                                                              760
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  -6.7191261 +
                                                              673.459
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  -0.0154639 +
                                                              1.54639
                                                            : offset > 2200
                                                            ? 0
                                                            : 760
                                                    })`,
                                                }}
                                            >
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_blue_small.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_blue_small_2x.png"))
                                                    }
                                                    media="(max-width:734px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_blue_medium.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_blue_medium_2x.png"))
                                                    }
                                                    media="(max-width:1068px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_blue_large.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_blue_large_2x.png"))
                                                    }
                                                    media="(min-width:0px)"
                                                />
                                                <img
                                                    src={require("./../../../assets/images/sections/firstSection/hero_blue_large.png")}
                                                    alt=""
                                                />
                                            </picture>
                                            <picture
                                                className="overview-hero-hero-starlight image-hardware-enhanced image-starlight"
                                                data-lazy=""
                                                style={{
                                                    "--starburst-radius":
                                                        "151%",
                                                    transform: `matrix(${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.00516408
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.00483592 +
                                                              0.516408
                                                            : offset > 2000
                                                            ? 1
                                                            : 0
                                                    }, 0, 0, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.00516408
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.00483592 +
                                                              0.516408
                                                            : offset > 2000
                                                            ? 1
                                                            : 0
                                                    }, 0, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                                  -4.13126 +
                                                              800
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  -3.86874 +
                                                              386.874
                                                            : offset > 2000
                                                            ? 0
                                                            : 800
                                                    })`,
                                                }}
                                            >
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_starlight_small.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_starlight_small_2x.png"))
                                                    }
                                                    media="(max-width:734px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_starlight_medium.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_starlight_medium_2x.png"))
                                                    }
                                                    media="(max-width:1068px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_starlight_large.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_starlight_large_2x.png"))
                                                    }
                                                    media="(min-width:0px)"
                                                />
                                                <img
                                                    src={require("./../../../assets/images/sections/firstSection/hero_starlight_large.png")}
                                                    alt=""
                                                />
                                            </picture>
                                            <picture
                                                className="overview-hero-hero-purple image-hardware-enhanced image-purple"
                                                data-lazy=""
                                                style={{
                                                    "--starburst-radius":
                                                        "151%",
                                                    transform: ` matrix(${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.00280218
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.00719782 +
                                                              0.0267878
                                                            : offset > 2000
                                                            ? 1
                                                            : 0
                                                    }, 0, 0, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.00280218
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.00719782 +
                                                              0.0267878
                                                            : offset > 2000
                                                            ? 1
                                                            : 0
                                                    }, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                                  0.72857 +
                                                              -260
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  1.87143 +
                                                              -187.143
                                                            : offset > 2000
                                                            ? 0
                                                            : -260
                                                    }
                          , ${
                              offset >= 1900 && offset <= 2000
                                  ? (offset - 1900) * -2.12966 + 760
                                  : offset > 2000 && offset <= 2100
                                  ? (offset - 2000) * -5.47034 + 547.034
                                  : offset > 2000
                                  ? 0
                                  : 760
                          })`,
                                                }}
                                            >
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_purple_small.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_purple_small_2x.png"))
                                                    }
                                                    media="(max-width:734px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_purple_medium.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_purple_medium_2x.png"))
                                                    }
                                                    media="(max-width:1068px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_purple_large.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_purple_large_2x.png"))
                                                    }
                                                    media="(min-width:0px)"
                                                />
                                                <img
                                                    src={require("./../../../assets/images/sections/firstSection/hero_purple_large.png")}
                                                    alt=""
                                                />
                                            </picture>
                                            <picture
                                                className="overview-hero-hero-red image-hardware-enhanced image-red"
                                                data-lazy=""
                                                aria-hidden="true"
                                                style={{
                                                    "--starburst-radius":
                                                        "160%",
                                                    transform: ` matrix(${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.000267878
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.009316992 +
                                                              0.0267878
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  0.00041513 +
                                                              0.958487
                                                            : offset > 2200
                                                            ? 1
                                                            : 0
                                                    }, 0, 0, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                              0.000267878
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  0.009316992 +
                                                              0.0267878
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  0.00041513 +
                                                              0.958487
                                                            : offset > 2200
                                                            ? 1
                                                            : 0
                                                    }, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                                  0.12322 +
                                                              -460
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  4.285818 +
                                                              -447.678
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  0.190962 +
                                                              -19.0962
                                                            : offset > 2200
                                                            ? 0
                                                            : -460
                                                    }, ${
                                                        offset >= 1900 &&
                                                        offset <= 2000
                                                            ? (offset - 1900) *
                                                                  -0.17144 +
                                                              640
                                                            : offset > 2000 &&
                                                              offset <= 2100
                                                            ? (offset - 2000) *
                                                                  -5.962874 +
                                                              622.856
                                                            : offset > 2100 &&
                                                              offset <= 2200
                                                            ? (offset - 2100) *
                                                                  -0.265686 +
                                                              26.5686
                                                            : offset > 2200
                                                            ? 0
                                                            : 640
                                                    })`,
                                                }}
                                            >
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_red_small.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_red_small_2x.png"))
                                                    }
                                                    media="(max-width:734px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_red_medium.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_red_medium_2x.png"))
                                                    }
                                                    media="(max-width:1068px)"
                                                />
                                                <source
                                                    srcSet={
                                                        (require("./../../../assets/images/sections/firstSection/hero_red_large.png"),
                                                        require("./../../../assets/images/sections/firstSection/hero_red_large_2x.png"))
                                                    }
                                                    media="(min-width:0px)"
                                                />
                                                <img
                                                    src={require("./../../../assets/images/sections/firstSection/hero_red_large.png")}
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <p className="pricing typography-site-claim has-dynamic-content">
                                        <span
                                            className="sosumi-link-follows"
                                            data-pricing-product="iphone-14"
                                            data-pricing=""
                                        >
                                            From $33.29/mo. for 24 mo. or $799
                                            before trade‑in
                                        </span>
                                        <span className="footnote footnote-supglyph">
                                            <Link to="#">*</Link>
                                        </span>
                                    </p>
                                    <ul
                                        className="ctas-list links-inline typography-site-claim mt-4 text-blue-500"
                                        style={{ opacity: 1 }}
                                    >
                                        <li>
                                            <Link
                                                to="#"
                                                className="icon-wrapper film-cta"
                                            >
                                                <span className="icon-copy">
                                                    Watch the{" "}
                                                    <span className="visuallyhidden">
                                                        iPhone 14
                                                    </span>{" "}
                                                    film
                                                </span>
                                                <span className="fa fa-play-circle-o ml-2"></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="icon-wrapper event-cta"
                                            >
                                                <span className="icon-copy">
                                                    Watch the{" "}
                                                    <span className="visuallyhidden">
                                                        iPhone 14
                                                    </span>{" "}
                                                    event
                                                </span>
                                                <span className="fa fa-chevron-right ml-2"></span>
                                            </Link>
                                        </li>
                                        <li className="ar-quicklook-cta">
                                            <p className="ar-quicklook-cta-ar-quicklook ar-quicklook-cta">
                                                <Link to="#">
                                                    <img />
                                                    <span>
                                                        View
                                                        <span className="visuallyhidden">
                                                            iPhone 14 and iPhone
                                                            14 Plus
                                                        </span>{" "}
                                                        in AR
                                                    </span>
                                                </Link>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
