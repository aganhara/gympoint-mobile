import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from '~/assets/logo.png';

import { Container, Image, Form, FormInput, SubmitButton } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [id, setId] = useState();
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          placeholder="Informe seu ID de cadastro"
          autoCapitalize="none"
          autoCorrect={false}
          value={id}
          onChangeText={setId}
        />

        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
