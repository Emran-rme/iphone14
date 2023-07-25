import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav className="ac-gf-breadcrumbs mb-7">
      <Link to="/" className="home ac-gf-breadcrumbs-home">
        <span className="ac-gf-breadcrumbs-home-icon" aria-hidden="true">
          
        </span>
        <span className="ac-gf-breadcrumbs-home-label">Apple</span>
        <span className="ac-gf-breadcrumbs-home-chevron"></span>
        <span className="ac-gf-breadcrumbs-home-mask"></span>
      </Link>
      <div className="ac-gf-breadcrumbs-path">
        <ol
          className="ac-gf-breadcrumbs-list"
          vocab="http://schema.org/"
          typeof="BreadcrumbList"
        >
          <li
            className="ac-gf-breadcrumbs-item"
            property="itemListElement"
            typeof="ListItem"
          >
            <Link
              className="ac-gf-breadcrumbs-link"
              href="/iphone/"
              property="item"
              typeof="WebPage"
            >
              <span property="name">iPhone</span>
            </Link>
          </li>
          <li
            className="ac-gf-breadcrumbs-item"
            property="itemListElement"
            typeof="ListItem"
          >
            <span property="name">iPhone&nbsp;14</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
