// @flow

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RulebookCard from 'components/shared/RulebookCard';

const RulebookCarousel = props => {
  const { title, rulebooks } = props;
  return (
    <Carousel>
      <CarouselTitle>{title}</CarouselTitle>
      <CarouselCards>
        {rulebooks.map(
          rulebook =>
            rulebook ? (
              <CarouselItem key={rulebook.name} rulebook={rulebook} />
            ) : null
        )}
      </CarouselCards>
    </Carousel>
  );
};

const ITEM_MARGIN = '0.5rem';

const Carousel = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CarouselTitle = styled.h3`
  align-self: flex-start;
  margin-left: ${ITEM_MARGIN};
  margin-bottom: 0.5rem;
`;

const CarouselCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CarouselItem = styled(RulebookCard)`
  margin: 0.5rem ${ITEM_MARGIN};
`;

RulebookCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  rulebooks: PropTypes.array.isRequired,
};

export default RulebookCarousel;
