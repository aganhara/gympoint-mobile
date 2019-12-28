import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  padding: 20px;
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 20px;
`;

export const ListHelp = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const HelpContainer = styled(RectButton)`
  margin-bottom: 10px;
`;

export const HelpContainerWrap = styled.View`
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const HelpHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-left: 24px;
`;

export const Ansewered = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.answered ? '#42cb59' : '#DDD')};
`;

export const HelpCreationDate = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  line-height: 26px;
  color: #666;
`;
