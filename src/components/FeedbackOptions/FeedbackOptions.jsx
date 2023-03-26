import PropTypes from 'prop-types';
import { FeedbackBtn, ListBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <ListBtn>
      {options.map(elem => (
        <li key={elem}>
          <FeedbackBtn type="button" name={elem} onClick={handleClick}>
            {elem}
          </FeedbackBtn>
        </li>
      ))}
    </ListBtn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
