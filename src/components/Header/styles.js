import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  max-height: 50px;
  justify-content: center;
  align-items: center;
  margin-right: ${props => (props.marginRight ? props.marginRight : 0)};
  background-color: #fff;
`;

export const Logo = styled.Image``;
