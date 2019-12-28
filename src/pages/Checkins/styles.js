import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 20px;
`;

export const CheckinList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Checkin = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background: #ddd;
  height: 46px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: #666;
`;
