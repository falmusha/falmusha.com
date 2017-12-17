import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/fontawesome-free-regular";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import COLORS from "../colors";

const PROJECTS = [
  {
    name: "Hackberry",
    desc: "Attachable hardware module to pens record digital notes.",
    blogLink: "",
    srcLink: "https://github.com/iFahad7/hackberry",
    website: "https://github.com/iFahad7/hackberry"
  },
  {
    name: "SSL CAV",
    desc: "Enforce SSL cert CA verificatin for non-browser applications.",
    blogLink: "/articles/2015-12-27-ssl-cav/",
    srcLink: "https://github.com/iFahad7/ssl_cav",
    website: "https://github.com/iFahad7/ssl_cav"
  },
  {
    name: "Pixelfinder",
    desc: "Image search based on EXIF data. Targeted for photographers.",
    blogLink: "",
    srcLink: "https://github.com/iFahad7/pixelfinder-client",
    website: "https://ifahad7.github.io/pixelfinder-client/"
  },
  {
    name: "Mosa",
    desc:
      "Image Processing library to stitch a series of similar images to create a mosaic",
    blogLink: "",
    srcLink: "https://github.com/iFahad7/mosa",
    website: "https://github.com/iFahad7/mosa"
  }
];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Card = styled.div`
  width: 370px;
  margin: 8px;
  background-color: ${COLORS.WHITE};
  border-radius: 4px;
  a {
    text-decoration: none;
    color: ${COLORS.DARKEST};
    &:hover {
      color: ${COLORS.BLACK};
      text-decoration: underline;
    }
  }
`;

const CardHeader = styled.div`
  padding-top: 10px;
  padding-right: 16px;
  padding-bottom: 10px;
  padding-left: 16px;
  font-size: 22px;
  font-weight: 500;
`;

const CardContent = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;
  font-size: 16px;
  color: ${COLORS.BASE};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
`;

const ProjectLinks = styled.a`
  font-size: 16px;
  text-decoration: none;
  svg {
    margin-right: 2px;
  }
`;

const SourceLink = styled.div``;

function renderFooter({ blogLink, srcLink }) {
  return;
}
const Project = ({ name, desc, blogLink, srcLink, website }) => (
  <Card>
    <CardHeader>
      <a href={website || srcLink}>{name}</a>
    </CardHeader>

    <CardContent>{desc}</CardContent>
    <CardFooter>
      {blogLink ? (
        <ProjectLinks href={blogLink}>
          <FontAwesomeIcon icon={faFile} /> Blog
        </ProjectLinks>
      ) : null}
      {srcLink ? (
        <ProjectLinks href={srcLink}>
          <FontAwesomeIcon icon={faGithub} /> Source
        </ProjectLinks>
      ) : null}
    </CardFooter>
  </Card>
);

export default ({ data }) => {
  return (
    <Wrapper>
      {PROJECTS.map(project => {
        return <Project key={project["name"]} {...project} />;
      })}
    </Wrapper>
  );
};
