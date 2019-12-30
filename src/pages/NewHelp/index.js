import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function NewHelp({ navigation }) {
  const id = useSelector(state => state.student.id);
  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    await api.post(`students/${id}/help-orders`, { question });
    navigation.navigate('Help');
  }

  return (
    <Container>
      <Form>
        <FormInput
          multiline
          textAlignVertical="top"
          placeholder="Inclua seu pedido de auxílio"
          value={question}
          onChangeText={setQuestion}
        />
        <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
      </Form>
    </Container>
  );
}

NewHelp.navigationOptions = ({ navigation }) => ({
  headerTitle: <Header marginRight={44} />,
  // headerLayoutPreset: 'center',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={{ marginLeft: 20 }}
    >
      <Icon name="chevron-left" size={24} color="#000" />
    </TouchableOpacity>
  ),
});

NewHelp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
