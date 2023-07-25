import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <section className="ac-gf-footer text-sm">
      <div className="ac-gf-footer-shop" x-ms-format-detection="none">
        More ways to shop: <Link to="/retail/">Find an Apple Store</Link> or{" "}
        <Link to="https://locate.apple.com/">other retailer</Link> near you.{" "}
        <span className="nowrap">Or call 1-800-MY-APPLE.</span>
      </div>
      <div className="ac-gf-footer-locale">
        <Link className="ac-gf-footer-locale-link" to="/choose-country-region/">
          United States
        </Link>
      </div>
      <div className="ac-gf-footer-legal">
        <div className="ac-gf-footer-legal-copyright">
          Copyright © 2022 Apple Inc. All rights reserved.
        </div>
        <div className="ac-gf-footer-legal-links">
          <Link className="ac-gf-footer-legal-link" to="/legal/privacy/">
            Privacy Policy
          </Link>
          <Link
            className="ac-gf-footer-legal-link"
            to="/legal/internet-services/terms/site.html"
          >
            Terms of Use
          </Link>
          <Link
            className="ac-gf-footer-legal-link"
            to="/us/shop/goto/help/sales_refunds"
          >
            Sales and Refunds
          </Link>
          <Link className="ac-gf-footer-legal-link" to="/legal/">
            Legal
          </Link>
          <Link className="ac-gf-footer-legal-link" to="/sitemap/">
            Site Map
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CopyRight;
