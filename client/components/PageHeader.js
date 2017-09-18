// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Media from 'components/Media';
import HomeButton from 'components/buttons/HomeButton';
import Icon from 'components/Icon';
import { default as MenuIcon } from 'components/icons/Menu';

const Header = styled.div`
  background-color: white;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: ${props => props.height};

  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderSection = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`;

const RulebookTitle = styled.span`
  font-size: 2em;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PageHeader = props => {
  const { onToggleSidebarClick, title, height } = props;

  return (
    <Header height={height}>
      <HeaderSection>
        <Icon
          tabIndex={1}
          aria-label={'Side menu toggle'}
          onClick={onToggleSidebarClick}
        >
          <MenuIcon size={20} />
        </Icon>
        <Media query={'desktop'}>
          {isDesktop => (isDesktop ? <HomeButton /> : null)}
        </Media>
      </HeaderSection>
      <RulebookTitle>
        {title}
      </RulebookTitle>
      <HeaderSection />
    </Header>
  );
};

PageHeader.defaultProps = {
  onToggleSidebarClick: () => {},
  title: '',
  height: '5rem',
};

PageHeader.propTypes = {
  onToggleSidebarClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default PageHeader;
