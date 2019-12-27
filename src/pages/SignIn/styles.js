import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background: #fff;
`;

export const Image = styled.Image`
  margin-bottom: 20px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 16px;
`;

export const SubmitButton = styled(Button)``;
