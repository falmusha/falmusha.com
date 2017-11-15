import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Header = () => (
  <div>
    <h1>
      <Link to="/">Home</Link>
    </h1>
  </div>
);

export default ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Personal website" },
        { name: "keywords", content: "blog, showcase, personal" }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
