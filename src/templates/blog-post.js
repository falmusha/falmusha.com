import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import COLORS from "../colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${COLORS.DARKEST};
`;

const Article = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${COLORS.BLACK};
  }
  p {
    color: ${COLORS.DARKEST};
    text-align: justify;
    line-height: 1.5;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Wrapper>
      <Helmet title={post.frontmatter.title} />
      <Title>{post.frontmatter.title}</Title>
      <Article
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Wrapper>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
