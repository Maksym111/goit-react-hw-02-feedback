import PropTypes from 'prop-types';
import { TitleInfo } from './Notification.styled';

const Notification = ({ message }) => {
  return <TitleInfo>{message}</TitleInfo>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
