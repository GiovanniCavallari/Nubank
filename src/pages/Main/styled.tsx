import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #6D2177;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  justify-content: center;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #ffffff;
  border-radius: 4px;
  margin: 0px 20px;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 10px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0px 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eeeeee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333333;
`;
