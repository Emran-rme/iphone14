const Modal = () => {
  return (
    <div
      className="absolute block invisible overflow-hidden m-0 w-full h-full deep-dive selfies active"
      data-component-list="DeepDive"
      data-modal-container
    >
      <div className="visible fixed w-screen h-screen bg-white deep-dive-scrim"></div>
      <div className="z-[2] absolute w-screen p-0 box-border deep-dive-panel show">
        <h2 className="visuallyhidden">Selfies</h2>
        <div className="h-screen overflow-y-auto deep-dive-content horizontal-scroll-container-y">
          <div
            className="overflow-hidden horizontal-scroll"
            style={{ "--modal-wrap-height": "491px" }}
          >
            <div className="relative overflow-y-hidden overflow-x-auto pb-[180px] horizontal-scroll-container-x">
              <div className="relative horizontal-scroll-content">
                <div className="relative my-0 h-full picture-pair picture-pair-overview-selfies-deep-dive-selfie-1 landscape image-1 fluid-large fluid-medium">
                  {/* <picture className="overview-selfies-deep-dive-selfie-1 image">
                    <source
                      srcSet={
                        (require("./../../../assets/images/modal/selfie_1__cn6ao1t02lyu_small.jpg"),
                        require("./../../../assets/images/modal/selfie_1__cn6ao1t02lyu_small_2x.jpg"))
                      }
                      media="(max-width: 734px), (max-height:799px)"
                    />
                    <source
                      srcSet={
                        (require("./../../../assets/images/modal/selfie_1__cn6ao1t02lyu_medium.jpg"),
                        require("./../../../assets/images/modal/selfie_1__cn6ao1t02lyu_medium_2x.jpg"))
                      }
                      media="(min-width: 735px) and (max-width: 1068px), (min-height: 800px) and (max-height: 999px)"
                    />
                    <source
                      srcSet={
                        (require("./../../../assets/images/modal/selfie_1__cn6ao1t02lyu_large.jpg"),
                        require("./../../../assets/images/modal/selfie_1__cn6ao1t02lyu_large_2x.jpg"))
                      }
                      media="(min-width:0px)"
                    />
                    <img
                      src={require("./../../../assets/images/modal/selfie_1__cn6ao1t02lyu_large.jpg")}
                      alt="A group selfie of three woman posing together taken with the TrueDepth camera."
                    />
                  </picture> */}
                  {/* <picture className="overview-selfies-deep-dive-stacked-selfie-1-vertical image-stacked">
                    <source
                      data-empty=""
                      srcSet="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      media="(min-width:0px)"
                    />
                    <source
                      srcSet={
                        (require("./../../../assets/images/modal/selfie_1_vertical__bsqpdvjlxws2_small.jpg"),
                        require("./../../../assets/images/modal/selfie_1_vertical__bsqpdvjlxws2_small_2x.jpg"))
                      }
                      media="(max-width:734px)"
                    />
                    <source
                      srcSet={
                        (require("./../../../assets/images/modal/selfie_1_vertical__bsqpdvjlxws2_medium.jpg"),
                        require("./../../../assets/images/modal/selfie_1_vertical__bsqpdvjlxws2_medium_2x.jpg"))
                      }
                      media="(max-width:1068px)"
                    />
                    <source
                      srcSet={
                        (require("./../../../assets/images/modal/selfie_1_vertical__bsqpdvjlxws2_large.jpg"),
                        require("./../../../assets/images/modal/selfie_1_vertical__bsqpdvjlxws2_large_2x.jpg"))
                      }
                      media="(min-width:0px)"
                    />
                    <img
                      src={require("./../../../assets/images/modal/selfie_1_vertical__bsqpdvjlxws2_large.jpg")}
                      alt="A group selfie of three woman posing together taken with the TrueDepth camera."
                    />
                  </picture> */}
                </div>
                <p className="typography-site-body copy copy-2 portrait">
                  On the count of three, say “we.” Now that the TrueDepth camera
                  can automatically focus on multiple subjects at once, all your
                  selfies — from stunning close‑ups to group shots — look
                  their&nbsp;sharpest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
