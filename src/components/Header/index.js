import React from 'react';
import PropTypes from 'prop-types';
import logo from '~/assets/header-icon.png';

import { Container, Logo } from './styles';

export default function Header({ marginRight }) {
  return (
    <Container marginRight={marginRight}>
      <Logo source={logo} />
    </Container>
  );
}

Header.propTypes = {
  marginRight: PropTypes.number,
};

Header.defaultProps = {
  marginRight: 0,
};
