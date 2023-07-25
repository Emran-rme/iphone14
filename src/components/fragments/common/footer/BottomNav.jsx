import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav
      className="ac-gf-directory with-5-columns"
      aria-label="Apple Directory"
      role="navigation"
    >
      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-products"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-products"
          >
            <h3 className="ac-gf-directory-column-section-title">
              Shop and Learn
            </h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-products"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/store"
              >
                Store
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link className="ac-gf-directory-column-section-link" to="/mac/">
                Mac
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link className="ac-gf-directory-column-section-link" to="/ipad/">
                iPad
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/iphone/"
              >
                iPhone
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/watch/"
              >
                Watch
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/airpods/"
              >
                AirPods
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/tv-home/"
              >
                TV &amp; Home
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/airtag/"
              >
                AirTag
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/buy_accessories"
              >
                Accessories
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/giftcards"
              >
                Gift Cards
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-services"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-services"
          >
            <h3 className="ac-gf-directory-column-section-title">Services</h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-services"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-music/"
              >
                Apple&nbsp;Music
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-tv-plus/"
              >
                Apple&nbsp;TV+
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-fitness-plus/"
              >
                Apple&nbsp;Fitness+
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-news/"
              >
                Apple&nbsp;News+
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-arcade/"
              >
                Apple&nbsp;Arcade
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/icloud/"
              >
                iCloud
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-one/"
              >
                Apple&nbsp;One
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-card/"
              >
                Apple&nbsp;Card
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-books/"
              >
                Apple&nbsp;Books
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-podcasts/"
              >
                Apple Podcasts
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/app-store/"
              >
                App&nbsp;Store
              </Link>
            </li>
          </ul>
        </div>
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-accounts"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-accounts"
          >
            <h3 className="ac-gf-directory-column-section-title">Account</h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-accounts"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="https://appleid.apple.com/us/"
              >
                Manage Your Apple&nbsp;ID
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/account"
              >
                Apple Store Account
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="https://www.icloud.com"
              >
                iCloud.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-storeservices"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-storeservices"
          >
            <h3 className="ac-gf-directory-column-section-title">
              Apple Store
            </h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-storeservices"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/retail/"
              >
                Find a Store
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/retail/geniusbar/"
              >
                Genius Bar
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/today/"
              >
                Today at Apple
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/today/camp/"
              >
                Apple Camp
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="https://apps.apple.com/us/app/apple-store/id375380948"
              >
                Apple Store App
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/special_deals"
              >
                Refurbished and Clearance
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/payment_plan"
              >
                Financing
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/trade_in"
              >
                Apple&nbsp;Trade&nbsp;In
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/order/list"
              >
                Order Status
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/help"
              >
                Shopping Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-business"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-business"
          >
            <h3 className="ac-gf-directory-column-section-title">
              For Business
            </h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-business"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/business/"
              >
                Apple and Business
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/retail/business/"
              >
                Shop htmlFor Business
              </Link>
            </li>
          </ul>
        </div>
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-education"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-education"
          >
            <h3 className="ac-gf-directory-column-section-title">
              For Education
            </h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-education"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/education/"
              >
                Apple and Education
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/education/k12/how-to-buy/"
              >
                Shop htmlFor K-12
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/educationrouting"
              >
                Shop htmlFor College
              </Link>
            </li>
          </ul>
        </div>
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-healthcare"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-healthcare"
          >
            <h3 className="ac-gf-directory-column-section-title">
              For Healthcare
            </h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-healthcare"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/healthcare/"
              >
                Apple in Healthcare
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/healthcare/apple-watch/"
              >
                Health on Apple&nbsp;Watch
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/healthcare/health-records/"
              >
                Health Records on iPhone
              </Link>
            </li>
          </ul>
        </div>
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-government"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-government"
          >
            <h3 className="ac-gf-directory-column-section-title">
              For Government
            </h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-government"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/r/store/government/"
              >
                Shop htmlFor Government
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/us/shop/goto/eppstore/veteransandmilitary"
              >
                Shop htmlFor Veterans and Military
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-responsibility"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-responsibility"
          >
            <h3 className="ac-gf-directory-column-section-title">
              Apple Values
            </h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-responsibility"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/accessibility/"
              >
                Accessibility
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/education-initiative/"
              >
                Education
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/environment/"
              >
                Environment
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/diversity/"
              >
                Inclusion and Diversity
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/privacy/"
              >
                Privacy
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/racial-equity-justice-initiative/"
              >
                Racial Equity and Justice
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/supplier-responsibility/"
              >
                Supplier Responsibility
              </Link>
            </li>
          </ul>
        </div>
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-about"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-about"
          >
            <h3 className="ac-gf-directory-column-section-title">
              About Apple
            </h3>
          </label>
          <Link
            to="#ac-gf-directory-column-section-state-about"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            to="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/newsroom/"
              >
                Newsroom
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/leadership/"
              >
                Apple Leadership
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/careers/us/"
              >
                Career Opportunities
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="https://investor.apple.com/"
                data-analytics-exit-link=""
              >
                Investors
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/compliance/"
              >
                Ethics &amp; Compliance
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/apple-events/"
              >
                Events
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                to="/contact/"
              >
                Contact Apple
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
