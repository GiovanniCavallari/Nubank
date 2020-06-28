import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Container, TabsContainer, TabItem, TabText } from './styled';

const Tabs = ({ translateY }) => {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        })
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      })
    }}>
      <TabsContainer
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
      >
        <TabItem>
          <Icon name="person-add" size={24} color="#ffffff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#ffffff" />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="arrow-downward" size={24} color="#ffffff" />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="arrow-upward" size={24} color="#ffffff" />
          <TabText>Transferir</TabText>
        </TabItem>

        <TabItem>
          <Icon name="lock" size={24} color="#ffffff" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

Tabs.propTypes = {
  translateY: PropTypes.object.isRequired,
};

export default Tabs;
