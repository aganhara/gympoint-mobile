import React from 'react';
import logo from '~/assets/logo.png';

import { Container, Image, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          placeholder="Informe seu ID de cadastro"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <SubmitButton onPress={() => {}}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
