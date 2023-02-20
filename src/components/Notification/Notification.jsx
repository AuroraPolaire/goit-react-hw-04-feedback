import { NotificationStyled } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <>
      <NotificationStyled>{message}</NotificationStyled>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
