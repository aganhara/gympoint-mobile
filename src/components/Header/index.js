import React from 'react';
import logo from '~/assets/header-icon.png';

import { Container, Logo } from './styles';

export default function Header({ marginRight }) {
  return (
    <Container marginRight={marginRight}>
      <Logo source={logo} />
    </Container>
  );
}
