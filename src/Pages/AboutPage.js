import React from 'react';
import ConstructionImage from '../assets/construction.png';
import {
  Section,
  Background,
  BgImg,
  LinkBtn,
  ArrowRight,
  AlertText,
} from '../Pages/pageStyles';

const AboutPage = () => {
  return (
    <Section>
      <Background>
        <BgImg src={ConstructionImage} />
        <AlertText>
          This page is currently unavailable.
          <br /> Try this one.
        </AlertText>
        <LinkBtn to='/products'>
          Products Page <ArrowRight />{' '}
        </LinkBtn>
      </Background>
    </Section>
  );
};

export default AboutPage;
