import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import COLORS from "../colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: justify;
`;

export default ({ data }) => {
  return (
    <Wrapper>
      <p>
        I'm a Computer Engineer currently doing a master's degree at{" "}
        <a href="https://www.ece.utoronto.ca" target="_blank">
          UofT
        </a>. I use this website to share my thoughts and showcase my work. You
        can contact me through email: falmusha at gmail
      </p>
      <p>
        I'm also interested in photography. Check it out{" "}
        <a href="https://500px.com/ifahad7" target="_blank">
          here
        </a>.
      </p>
    </Wrapper>
  );
};
