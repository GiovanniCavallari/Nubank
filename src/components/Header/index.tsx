import React from 'react';
import { MaterialIcons as Icon } from "@expo/vector-icons";

import logo from '../../assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './styled';

const Header = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Giovanni</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#ffffff" />
    </Container>
  );
};

export default Header;
