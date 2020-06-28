import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styled';

const Menu = ({ translateY }) => {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode value="https://www.github.com" size={100} backgroundColor="#ffffff" color="#6D2177" />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#ffffff" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#ffffff" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="attach-money" size={20} color="#ffffff" />
          <NavText>Configurar conta</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#ffffff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="store" size={20} color="#ffffff" />
          <NavText>Pedir conta PJ</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#ffffff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => null}>
        <SignOutButtonText>Sair da conta</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

Menu.propTypes = {
  translateY: PropTypes.object.isRequired,
};

export default Menu;
