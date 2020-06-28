import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  align-items: center;
  padding: ${25+ Constants.statusBarHeight}px 0px 30px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  margin-left: 8px;
`;
