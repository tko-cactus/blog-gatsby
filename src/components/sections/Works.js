import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { render } from 'react-dom';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Works = () => {
  return (
    <StaticQuery
      render={data => (
        <Section id="works" accent="secondary">
          <Container style={{ position: 'relative' }}>
            <h1>Works</h1>
          </Container>
        </Section>
      )}
    />
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

export default Works;
