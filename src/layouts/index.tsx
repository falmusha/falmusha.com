import * as React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

const Header = () => (
  <div>
    <h1>
      <Link to="/">Home</Link>
    </h1>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Fahad Almusharraf"
      meta={[
        { name: "description", content: "Personal website" },
        { name: "keywords", content: "blog, showcase, personal" }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

export default TemplateWrapper;
