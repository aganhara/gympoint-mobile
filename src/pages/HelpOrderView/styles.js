import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 20px;
`;

export const QuestionContainer = styled.View`
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 4px;
`;

export const QuestionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
  text-transform: uppercase;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const AnswerContainer = styled.View`
  margin-top: 16px;
`;

export const Text = styled.Text`
  margin-top: 16px;
  font-size: 14px;
  line-height: 26px;
  color: #666;
`;
