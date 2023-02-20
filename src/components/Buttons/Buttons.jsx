import { ButtonContainer } from './Buttons.styled';

export const Buttons = ({ updateState }) => {
  return (
    <ButtonContainer>
      <button
        onClick={() => {
          updateState('good');
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateState('neutral');
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateState('bad');
        }}
      >
        Bad
      </button>
    </ButtonContainer>
  );
};
