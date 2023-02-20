import { ButtonContainer } from './Buttons.styled';

export const FeedbackOptions = ({ options, updateState }) => {
  return (
    <ButtonContainer>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => {
              updateState(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </ButtonContainer>
  );
};
