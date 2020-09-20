import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_head: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "rice" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_month: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "September" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_head.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>Welcome!</h1>
              <br />
              <p>
                <StyledExternalLink href="https://github.com/tko-cactus/blog-gatsby">
                  My tech blog &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  /* background-color: ${props => props.theme.color.primary}; */
  background: liner-gradient(45deg, #6cb8ff, #fff66c, #ffa36c);
  padding-top: 96px;
  animation: AnimationName 10s ease infinite;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
  
  @keyframes AnimationName {
    0% { background-color: #6CB8FF; }
    33% { background-color: #FFF66C; }
    66% { background-color: #FFA36C; }
    100% { background-color: #6CB8FF; }
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
