import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import COLORS from "../colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const EntryLink = styled(Link)`
  text-decoration: none;
  color: #008584;
  &:hover {
    text-decoration: underline;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: ${COLORS.DARKEST};
`;

const Date = styled.span`
  font-size: 16px;
`;

const BlogEntry = ({ node }) => (
  <div key={node.id}>
    <TitleWrapper>
      <EntryLink to={node.fields.slug}>
        <Title>{node.frontmatter.title}</Title>
      </EntryLink>
      <Date>{node.frontmatter.date}</Date>
    </TitleWrapper>
    <p>{node.excerpt}</p>
  </div>
);

export default ({ data }) => {
  return (
    <Wrapper>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogEntry node={node} />
      ))}
    </Wrapper>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
