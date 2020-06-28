import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0px 30px;
`;

export const Code = styled.View`
  padding: 5px;
  background: #fff;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.4);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.4);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #ffffff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
  border-radius: 4px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.4);
`;

export const SignOutButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
`;
